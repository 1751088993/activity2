import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/story",
      name: "story",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Story.vue")
    },
    {
      path: "/join",
      name: "join",
      component: () => import(/* webpackChunkName: "about" */ "./views/Join.vue")
    },
    {
      path: "/info",
      name: "info",
      component: () => import(/* webpackChunkName: "about" */ "./views/Info.vue")
    },
    {
      path: "/success/:num",
      name: "success",
      component: () => import(/* webpackChunkName: "about" */ "./views/Success.vue")
    },
    {
      path: "/share/:num",
      name: "share",
      component: () => import(/* webpackChunkName: "about" */ "./views/Share.vue")
    }
  ]
});
