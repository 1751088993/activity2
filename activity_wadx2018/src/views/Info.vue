<template>
  <div class="info">
    <div class="page" :style="{ height: bodyHeight + 'px' }">
      <div class="form">
        <div class="input-item">
          <input
            type="text"
            placeholder="填写手机号"
            ref="iphoneNum"
            v-model="phoneNum"
            autofocus="autofocus"
          >
        </div>
        <div class="tips">*每个手机号只能领取一次</div>
        <div class="input-item input-item-2">
          <input
            type="text"
            placeholder="验证码"
            v-model="validateCode"
            ref="validateCode"
            onblur="window.scrollTo(0, 0)"
          >
          <div class="auth-code" @click="getAuthCode">{{codeNumText}}</div>
        </div>
        <div class="btn btn1" @click="commit">立即领取</div>
        <div class="tips2">手机号码只用于晚安计划，不做其他用途；短信可随时退订</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import toast from "../modules/toast.js";
import { setHomeShareData } from "../modules/share.js";

export default {
  data() {
    return {
      phoneNum: "",
      codeNumText: "获取验证码",
      validateCode: "",
      sign: "",
      bodyHeight: 0,
      num: 0
    };
  },
  mounted() {
    setHomeShareData();
    this.bodyHeight = document.documentElement.clientHeight;
    if (window.innerWidth !== 320) {
      this.$refs.iphoneNum.focus();
    } else {
      this.$refs.iphoneNum.blur();
    }
  },
  methods: {
    commit() {
      window.trackEvent("2018wanan_lijilingqu", "click");
      if (!/^1[0-9]{10}$/.test(this.phoneNum)) {
        toast({
          text: "请输入正确的手机号"
        });
        return false;
      }
      if (!/\d$/.test(this.validateCode)) {
        toast({
          text: "请输入正确的验证码"
        });
        return false;
      }
      this.commitPhoneNum(this.phoneNum, this.validateCode, this.sign).then(
        res => {
          if (res.data.status === 200 && res.data.data !== 304) {
            toast({
              text: "领取成功!"
            });
            this.getNum().then(res => {
              this.num = res.data.data + 112356;
              localStorage.setItem("wnl_wadx_num", this.num);
              this.$router.replace({
                name: "success",
                params: { num: this.num }
              });
            });
          } else if (res.data.status === 200 && res.data.data === 304) {
            toast({
              text: "该号码已经领取！"
            });
            return false;
          } else {
            toast({
              text: res.data.msg
            });
            return false;
          }
        }
      );
    },
    getAuthCode() {
      if (!/^1[0-9]{10}$/.test(this.phoneNum)) {
        toast({
          text: "请输入正确的手机号"
        });
        return false;
      }
      if (this.codeNumText === "获取验证码") {
        this.getCode(this.phoneNum).then(res => {
          // console.log(res.data.data);
          this.sign = res.data.data.reqSign;
          toast({
            text: "获取成功"
          });
        });
        this.codeNumText = 60;
        let interval = setInterval(() => {
          this.codeNumText -= 1;
          if (this.codeNumText <= 0) {
            this.codeNumText = "获取验证码";
            clearInterval(interval);
          }
        }, 1000);
      }
    },
    commitPhoneNum(phoneNum, code, sign) {
      let data = {
        phoneno: phoneNum,
        Code: code,
        Sign: sign
      };
      // console.log(data);
      return axios.post("//b.cqyouloft.com/atcapi/api/activity/NightMsg", data);
    },
    getCode(phoneNum) {
      let data = {
        phone: phoneNum
      };
      data = JSON.stringify(data);
      return axios({
        url:
          "https://calpro.51wnl.com/api/calpro/RequestValidate?idfa=xxxx&imei=xxxx&oudidi=ddddd",
        method: "post",
        data,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    },
    getNum() {
      return axios.get("//b.cqyouloft.com/atcapi/api/activity/NightMsgNo");
    }
  }
};
</script>

<style>
</style>