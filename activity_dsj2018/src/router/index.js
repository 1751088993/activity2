import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import News from "@/components/News";
import Result from "@/components/Result";
import Share from "@/components/Share";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/result",
      name: "result",
      component: Result
    },
    {
      path: "/share",
      name: "share",
      component: Share
    }
  ]
});
