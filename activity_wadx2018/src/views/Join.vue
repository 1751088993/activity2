<template>
  <div class="join">
    <div class="page">
      <div class="layout">
        <img src="../assets/biaoti.png" class="img title-img">
        <div class="text text-1">开启2019年春节倒计时，</div>
        <div class="text text-2">我们要让你的手机，在每天晚上10点准时亮起。</div>
        <div class="text text-3">报名持续开启，留下手机号，</div>
        <div class="text text-4">从明天开始，我们将每天向你发送晚安短信，</div>
        <div class="text text-5">陪你度过狗年的最后一个月。</div>
      </div>
      <div class="btn btn1" @click="join">领取你的晚安</div>
    </div>
  </div>
</template>

<script>
import { setHomeShareData } from "../modules/share.js";

export default {
  mounted() {
    setHomeShareData();
  },
  methods: {
    join() {
      this.$router.replace("info");
      window.trackEvent("2018wanan_lingqunidewanan", "click");
    }
  }
};
</script>

<style>
</style>
