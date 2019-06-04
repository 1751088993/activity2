<template>
  <div class="success">
    <div class="page">
      <div class="title title-1">春节倒计时</div>
      <div class="title title-2">晚安短信计划</div>
      <div class="icon"></div>
      <div class="title-3">领取成功</div>
      <div class="text text-1">你是第<span>{{num}}</span>位领取晚安短信的人
      </div>
      <div class="text text-2">从明天开始，</div>
      <div class="text">我们将每天向你发送晚安短信，</div>
      <div class="text">陪你度过狗年的最后一个月。</div>
      <div class="text text-3">希望你晚安好梦，</div>
      <div class="text">来一个充满力量的<span>2019</span>年
      </div>
      <div class="btn btn1" @click="toShare">分享晚安</div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<script>
import { setSuccessShareData, showShare } from "../modules/share.js";

export default {
  data() {
    return {
      num: 0
    };
  },
  mounted() {
    this.num = this.$route.params.num;
    setSuccessShareData(this.num);
  },
  methods: {
    toShare() {
      showShare();
    }
  }
};
</script>

<style>
</style>
