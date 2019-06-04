<template>
  <div class="home">
    <div class="page bg1">
      <div class="layout">
        <img src="../assets/biaoti.png" class="img title-img">
        <div class="star-wrapper">
          <img src="../assets/qiu.png" class="img star">
          <div class="circle">
            <div class="airplane"></div>
          </div>
        </div>
        <div class="btn btn1" @click="start">开启</div>
      </div>
    </div>
  </div>
</template>

<script>
import Meteor from "../modules/meteor.js";
import { setHomeShareData } from "../modules/share.js";
import { LoadImage } from "../modules/loadImage.js";

export default {
  data() {
    return {
      interval: null
    };
  },
  components: {},
  mounted() {
    if (!window.isLoadImage) {
      window.isLoadImage = true;
      LoadImage();
    }
    setHomeShareData();
    this.interval = setInterval(() => {
      new Meteor();
    }, this.randomFrom(200, 500));
  },
  methods: {
    start() {
      const music = document.querySelector(".music");
      const musicIcon = document.querySelector(".music-icon");
      const flag = musicIcon.classList.contains("active");
      if (!flag) {
        music.play();
        musicIcon.classList.add("active");
      }
      clearInterval(this.interval);
      this.$router.push("story");
      window.trackEvent("2018wanani_kaiqi", "click");
    },
    randomFrom(lowerValue, upperValue) {
      return Math.floor(
        Math.random() * (upperValue - lowerValue + 1) + lowerValue
      );
    }
  }
};
</script>
