<template>
  <div class="home">
    <img src="../assets/shouye.png" alt class="img home-bg">
    <div class="home-btn" @click="start"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.isIphoneX()) {
      document.querySelector(".home").style.transform = "translateY(-54%)";
    }
  },
  methods: {
    start() {
      const ua = window.navigator.userAgent;
      const wx = /MicroMessenger/i.test(ua);
      const ios = /iPhone/gi.test(ua);
      window.trackEvent("start", "click");
      const music = document.querySelector(".music");
      const musicIcon = document.querySelector(".music-icon");
      const flag = musicIcon.classList.contains("active");
      if (!flag) {
        music.play();
        musicIcon.classList.add("active");
      }
      if (wx && ios) {
        this.$router.replace("news");
      } else {
        this.$router.push("news");
      }
    },
    isIphoneX() {
      // top 44px bottom 34px
      var w = window;
      var ua = w.navigator.userAgent;
      var dpr = w.devicePixelRatio;
      var sw = w.screen.width;
      var sh = w.screen.height;
      // iPhone X、iPhone XS
      var isIPhoneX =
        /iphone/gi.test(ua) && dpr === 3 && sw === 375 && sh === 812;
      // iPhone XS Max
      var isIPhoneXSMax =
        /iphone/gi.test(ua) && dpr === 3 && sw === 414 && sh === 896;
      // iPhone XR
      var isIPhoneXR =
        /iphone/gi.test(ua) && dpr === 2 && sw === 414 && sh === 896;
      return isIPhoneX || isIPhoneXSMax || isIPhoneXR;
    }
  }
};
</script>

<style>
</style>
