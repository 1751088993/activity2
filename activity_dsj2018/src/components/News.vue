<template>
  <div class="news">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of data" :key="index">
        <div class="news-item">
          <img :src="bgImg" alt>
          <div class="layout">
            <div class="title-wrapper">
              <div class="title-num">NO.{{index+1}}</div>
              <div class="title-line"></div>
              <div class="title-text">{{item.title}}</div>
            </div>
            <div class="line1"></div>
            <div class="line2"></div>
            <img :src="item.img" alt class="news-img">
            <div class="text">{{item.content}}</div>
          </div>
          <div class="index">
            <div class="icon"></div>
            <div class="progress-bar">
              <div class="progress-bar-value" v-bind:style="{width:item.width}"></div>
            </div>
            <div class="percent">{{item.defaultValue.toFixed(1)}}%</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="arrows"></div>
  </div>
</template>

<script>
import { data } from "../data/data.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import zhi1 from "../assets/zhi1.png";
import zhi2 from "../assets/zhi2.png";

export default {
  data() {
    return {
      data: data,
      ani: null,
      bgImg: "",
      swiperOption: {
        direction: "vertical",
        height: window.innerHeight,
        on: {
          slideChangeTransitionStart: () => {
            window.trackEvent("slide", "click");
            const ua = window.navigator.userAgent;
            let wx = /MicroMessenger/i.test(ua);
            const ios = /iPhone/gi.test(ua);
            if (this.swiper.activeIndex === this.data.length - 1) {
              if (wx && ios) {
                this.$router.replace("result");
              } else {
                this.$router.push("result");
              }
            }
          },
          slideChangeTransitionEnd: () => {
            let index = this.swiper.activeIndex;
            window.cancelAnimationFrame(this.ani);
            this.setPercentValue(this.data[index], this.data[index].value);
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.bgImg = zhi1;
    if (this.isIphoneX()) {
      this.bgImg = zhi2;
    }
    setTimeout(() => {
      this.setPercentValue(this.data[0], this.data[0].value);
    }, 300);
  },
  methods: {
    getImgUrl(index) {
      return `./assets/NO${index}.png`;
    },
    setProgressBarValue(data, value) {
      data.width = value + "%";
    },
    setPercentValue(data, value) {
      let interval = parseFloat(value / 50);
      let step = () => {
        if (data.defaultValue < value) {
          this.ani = requestAnimationFrame(() => {
            let stepValue = parseFloat(data.defaultValue + interval);
            data.defaultValue = stepValue;
            this.setProgressBarValue(data, stepValue);
            step();
          });
        } else {
          cancelAnimationFrame(this.ani);
          data.defaultValue = value;
        }
      };
      step();
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
