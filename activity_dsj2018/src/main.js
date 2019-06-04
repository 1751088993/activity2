import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import router from "./router";
import "./trackEvent";
import "./wnl_share";
import WechatShare from "./wx_share";

import "./style/index.css";
import "./style/normalize.css";
import "./style/reset.css";
import "swiper/dist/css/swiper.css";
import "./style/rem.css";

Vue.use(VueRouter);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

window.trackEvent("IM", "visit");

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

const shareData = {
  url: location.href, // eslint-disable-line
  title: "带你穿越2018，品世间百态",
  text: "今年霸屏的都在这了，看看你知道多少？",
  imgUrl: "https://mobile.51wnl-cq.com/clientH5/icon/share-icon200.jpg"
};

/* wnl-share */
window.wnlShare.setShareData({
  title: shareData.title,
  text: shareData.text,
  image: shareData.imgUrl,
  url: shareData.url
});

window.shareCallback = () => {
  window.trackEvent("shared", "share");
};

window.wxShare = new WechatShare({
  title: "带你穿越2018，品世间百态",
  text: "今年霸屏的都在这了，看看你知道多少？",
  imgUrl: "https://mobile.51wnl-cq.com/clientH5/icon/share-icon200.jpg",
  url: location.href,
  callback: function() {
    setTimeout(() => {
      window.trackEvent("shared", "share");
      let shareTips = document.querySelector(".wx-share-tips");
      if (shareTips) {
        shareTips.classList.add("hidden");
      }
    }, 500);
  }
});
