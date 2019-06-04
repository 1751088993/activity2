import WechatShare from "../modules/wx_share";
const ua = window.navigator.userAgent;
const wx = /MicroMessenger/i.test(ua);
// const wnl = /wnl/i.test(ua);

const shareData = {
  url: location.href, // eslint-disable-line
  title: "春节倒计时：向你说晚安",
  text: "希望你晚安好梦，迎来一个充满力量的2019年！",
  imgUrl: "https://mobile.51wnl-cq.com/clientH5/icon/wadx-share.jpg"
};

export function setShareData() {
  if (wx) {
    if (!window.wxShare) {
      window.wxShare = new WechatShare({
        title: shareData.title,
        text: shareData.text,
        imgUrl: shareData.imgUrl,
        url: shareData.url,
        callback: function() {
          setTimeout(() => {
            window.trackEvent("2018wanan_fenxiangchenggong", "share");
            let shareTips = document.querySelector(".wx-share-tips");
            if (shareTips) {
              shareTips.classList.add("hidden");
            }
          }, 500);
        }
      });
    } else {
      window.wxShare.setShareParams({
        title: shareData.title,
        text: shareData.text,
        imgUrl: shareData.imgUrl,
        url: shareData.url,
        callback: function() {
          setTimeout(() => {
            window.trackEvent("2018wanan_fenxiangchenggong", "share");
            let shareTips = document.querySelector(".wx-share-tips");
            if (shareTips) {
              shareTips.classList.add("hidden");
            }
          }, 500);
        }
      });
    }
  } else {
    /* wnl-share */
    window.wnlShare.setShareData({
      title: shareData.title,
      text: shareData.text,
      image: shareData.imgUrl,
      url: shareData.url
    });
  }
}

window.shareCallback = () => {
  window.trackEvent("2018wanan_fenxiangchenggong", "share");
};

export function setHomeShareData() {
  shareData.url = location.href.replace(/info|join|story|success|share/gi, "");
  shareData.title = "春节倒计时：向你说晚安";
  setShareData();
}

export function setSuccessShareData(num) {
  shareData.url = location.href.replace(/success/gi, "share");
  shareData.title = `我是第${num}名领取晚安短信计划的人`;
  setShareData();
}

export function showShare() {
  if (wx) {
    document.querySelector(".wx-share-tips").classList.remove("hidden");
  } else {
    window.wnlShare.showSharePlatform();
  }
  window.trackEvent("2018wanan_fenxiangwanan", "click");
}
