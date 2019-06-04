<template>
  <div id="app">
    <audio class="music hidden" loop="loop">
      <source src="./assets/music.mp3" type="audio/mpeg">
    </audio>
    <div class="wnl-icon"></div>
    <div class="music-icon" @click="switchMusic"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let ua = window.navigator.userAgent;
    let huawei8 = /HUAWEINXT-AL10/gi.test(ua);
    let huawei10 = /HUAWEIALP-AL00/gi.test(ua);
    if (huawei8 || huawei10) {
      document.querySelector(".home-bg").style.transform = "scaleY(0.95)";
    }
    this.music = document.querySelector(".music");
    this.music.play();
  },
  methods: {
    switchMusic() {
      const music = document.querySelector(".music");
      const musicIcon = document.querySelector(".music-icon");
      const flag = musicIcon.classList.contains("active");
      if (!flag) {
        music.play();
        musicIcon.classList.add("active");
      } else {
        music.pause();
        musicIcon.classList.remove("active");
      }
    }
  }
};
</script>


<style>
</style>
