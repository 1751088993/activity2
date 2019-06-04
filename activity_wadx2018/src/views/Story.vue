<template>
  <div class="story" ref="story">
    <div class="stage stage1" ref="stage1">
      <img :src="stage1" class="full-screen-bg">
      <div class="stage-text stage1-text" ref="stage1text">嘿，这一年过得怎么样</div>
    </div>
    <div class="stage stage2 hidden" ref="stage2">
      <img :src="stage2" class="full-screen-bg">
      <div class="stage-text stage2-text" ref="stage2text">打拼，奔波，勇往直前</div>
    </div>
    <div class="stage stage3 hidden" ref="stage3">
      <img :src="stage3" class="full-screen-bg">
      <div class="stage-text stage3-text" ref="stage3text">你有多久没有好好关心自己了</div>
    </div>
    <div class="stage stage4a hidden" ref="stage4a">
      <img :src="stage4a" class="full-screen-bg">
    </div>
    <div class="stage stage4b hidden" ref="stage4b">
      <img :src="stage4b" class="full-screen-bg">
    </div>
    <div class="stage stage4c hidden" ref="stage4c">
      <img :src="stage4c" class="full-screen-bg">
    </div>
    <div class="stage stage4d hidden" ref="stage4d">
      <img :src="stage4d" class="full-screen-bg">
    </div>
    <div class="stage stage4e hidden" ref="stage4e">
      <img :src="stage4e" class="full-screen-bg">
    </div>
    <div class="stage stage4f hidden" ref="stage4f">
      <img :src="stage4f" class="full-screen-bg">
    </div>
    <div class="stage stage5 hidden" ref="stage5">
      <img :src="stage5" class="full-screen-bg">
      <div class="stage5-text" ref="stage5text">
        <div class="stage-text stage5-text-1">平凡的你</div>
        <div class="stage-text stage5-text-2">了不起的你</div>
        <div class="stage-text stage5-text-3">晚安</div>
        <div class="stage-text stage5-text-4">每晚陪你说晚安</div>
        <div class="stage-text stage5-text-5">愿你想的人今夜入梦</div>
      </div>
    </div>
    <div class="skip" @click="skipStory">跳过</div>
  </div>
</template>

<script>
import { sleep } from "../modules/utils.js";
// import stage1 from "../assets/stage1.jpg";
// import stage2 from "../assets/stage2.jpg";
// import stage3 from "../assets/stage3.jpg";
// import stage4a from "../assets/stagea.jpg";
// import stage4b from "../assets/stageb.jpg";
// import stage4c from "../assets/stagec.jpg";
// import stage4d from "../assets/staged.jpg";
// import stage4e from "../assets/stagee.jpg";
// import stage4f from "../assets/stagef.jpg";
// import stage5 from "../assets/chengshi1.jpg";
import { setHomeShareData } from "../modules/share.js";
import { imageList } from "../modules/loadImage.js";

export default {
  data() {
    return {
      stage1: imageList.stage1.src,
      stage2: imageList.stage2.src,
      stage3: imageList.stage3.src,
      stage4a: imageList.stage4a.src,
      stage4b: imageList.stage4b.src,
      stage4c: imageList.stage4c.src,
      stage4d: imageList.stage4d.src,
      stage4e: imageList.stage4e.src,
      stage4f: imageList.stage4f.src,
      stage5: imageList.stage5.src,
      toJoinTimeout: null,
      isSkip: false
    };
  },
  mounted() {
    setHomeShareData();
    setTimeout(() => {
      this.$refs.story.style.opacity = "1";
    }, 10);
    this.play().then(() => {
      this.toJoinTimeout = setTimeout(() => {
        if (!this.isSkip) {
          let num = localStorage.getItem("wnl_wadx_num");
          if (num) {
            this.$router.replace({ name: "success", params: { num: num } });
          } else {
            this.$router.replace("join");
          }
        }
      }, 4500);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.isSkip = true;
    next();
  },
  methods: {
    async play() {
      let interval = 2000;
      if (this.$refs.stage1text) {
        this.$refs.stage1text.classList.add("ani");
      }
      await sleep(interval);
      if (this.$refs.stage1) {
        this.$refs.stage2.classList.remove("hidden");
        this.$refs.stage1.style.opacity = "0";
      }
      await sleep(500);
      if (this.$refs.stage2text) {
        this.$refs.stage2text.classList.add("ani");
      }
      await sleep(interval);
      if (this.$refs.stage2) {
        this.$refs.stage3.classList.remove("hidden");
        this.$refs.stage2.style.opacity = "0";
      }
      await sleep(500);
      if (this.$refs.stage3text) {
        this.$refs.stage3text.classList.add("ani");
      }
      await sleep(interval);
      if (this.$refs.stage3) {
        this.$refs.stage4a.classList.remove("hidden");
        this.$refs.stage3.style.opacity = "0";
      }
      await sleep(500);
      if (this.$refs.stage4a) {
        this.$refs.stage4b.classList.remove("hidden");
        this.$refs.stage4a.style.opacity = "0";
      }
      await sleep(1500);
      if (this.$refs.stage4b) {
        this.$refs.stage4c.classList.remove("hidden");
        this.$refs.stage4b.style.opacity = "0";
      }
      await sleep(1500);
      if (this.$refs.stage4c) {
        this.$refs.stage4d.classList.remove("hidden");
        this.$refs.stage4c.style.opacity = "0";
      }
      await sleep(1500);
      if (this.$refs.stage4d) {
        this.$refs.stage4e.classList.remove("hidden");
        this.$refs.stage4d.style.opacity = "0";
      }
      await sleep(1500);
      if (this.$refs.stage4e) {
        this.$refs.stage4f.classList.remove("hidden");
        this.$refs.stage4e.style.opacity = "0";
      }
      await sleep(1500);
      if (this.$refs.stage4f) {
        this.$refs.stage5.classList.remove("hidden");
        this.$refs.stage4f.style.opacity = "0";
      }
      await sleep(500);
      if (this.$refs.stage5text) {
        this.$refs.stage5text.classList.add("ani");
      }
    },
    skipStory() {
      this.isSkip = true;
      clearTimeout(this.toJoinTimeout);
      //  localStorage.setItem('wnl_wadx_num',100);
      let num = localStorage.getItem("wnl_wadx_num");
      if (num) {
        this.$router.replace({ name: "success", params: { num: num } });
      } else {
        this.$router.replace("join");
      }
      window.trackEvent("2018wanan_tiaoguo", "click");
    }
  }
};
</script>
