import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/about.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue"),
    },
  ],
});
