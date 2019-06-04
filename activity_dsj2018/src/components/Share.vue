<template>
  <div class="share">
    <img src="../assets/zhi.png" alt class="img">
    <div class="result-content">
      <div class="section s1">2018年已接近末尾</div>
      <div class="section s2">在今年发生的热点事情中</div>
      <div class="section s3">有欢喜、有悲伤、有难过</div>
      <div class="section s4">每一件事情的背后</div>
      <div class="section s5">都值得我们去思考......</div>
      <img src="../assets/erweima.png" alt class="qrcode">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  }
};
</script>

<style>
</style>