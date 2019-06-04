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
    window.trackEvent("2018wanan_yemianfangwen", "im");
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
