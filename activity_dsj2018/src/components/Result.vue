<template>
  <div class="result">
    <img src="../assets/zhi.png" alt class="img result-bg">
    <div class="result-content">
      <div class="section s1" :class="{show:show}">2018年已接近末尾</div>
      <div class="section s2" :class="{show:show}">在今年发生的热点事情中</div>
      <div class="section s3" :class="{show:show}">有欢喜、有悲伤、有难过</div>
      <div class="section s4" :class="{show:show}">每一件事情的背后</div>
      <div class="section s5" :class="{show:show}">都值得我们去思考......</div>
      <div class="result-btn" :class="{show:show}" @click="toShare"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      tips: null
    };
  },
  mounted() {
    const ua = window.navigator.userAgent;
    const wx = /MicroMessenger/i.test(ua);
    if (this.isIphoneX()) {
      document.querySelector(".result").style.transform = "translateY(-54%)";
    }
    if (wx) {
      let tips = document.querySelector(".wx-share-tips");
      if (!tips) {
        document.body.insertAdjacentHTML(
          "afterbegin",
          '<div class="wx-share-tips hidden"></div>'
        );
      }
      document
        .querySelector(".wx-share-tips")
        .addEventListener("click", function() {
          this.classList.add("hidden");
        });
    }
    let huawei8 = /HUAWEINXT-AL10/gi.test(ua);
    let huawei10 = /HUAWEIALP-AL00/gi.test(ua);
    if (huawei8 || huawei10) {
      document.querySelector(".result-bg").style.transform = "scaleY(0.95)";
    }
    setTimeout(() => {
      this.show = true;
    }, 100);
    window.wxShare.setShareParams({
      title: "带你穿越2018，品世间百态",
      text: "今年霸屏的都在这了，看看你知道多少？",
      imgUrl: "https://mobile.51wnl-cq.com/clientH5/icon/share-icon200.jpg",
      url: location.href.replace(/result/gi, "share"),
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

    const shareData = {
      url: location.href.replace(/result/gi, "share"), // eslint-disable-line
      title: "带你穿越2018，品世间百态",
      text: "今年霸屏的都在这了，看看你知道多少？",
      imgUrl: "https://mobile.51wnl-cq.com/clientH5/icon/share-icon200.jpg"
    };
    window.wnlShare.setShareData({
      title: shareData.title,
      text: shareData.text,
      image: shareData.imgUrl,
      url: shareData.url
    });
  },
  methods: {
    toShare() {
      let ua = window.navigator.userAgent;
      let wnl = /wnl/i.test(ua);
      window.trackEvent("shareBtn", "click");
      if (wnl) {
        window.wnlShare.showSharePlatform();
      } else {
        const ua = window.navigator.userAgent;
        const wx = /MicroMessenger/i.test(ua);
        if (wx) {
          document.querySelector(".wx-share-tips").classList.remove("hidden");
        }
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
