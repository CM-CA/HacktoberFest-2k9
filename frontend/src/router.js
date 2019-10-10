import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

global.Vue = Vue

global.Vue = Vue;

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/"
    }
  ]
});
