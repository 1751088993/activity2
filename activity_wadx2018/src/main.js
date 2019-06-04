import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./modules/wnl_share";
import "./modules/trackEvent";

import "./style/normalize.css";
import "./style/reset.css";
import "./style/rem.css";
import "./style/index.css";

window.isLoadImage = false;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

document.querySelector(".wx-share-tips").addEventListener("click", function() {
  this.classList.add("hidden");
});
