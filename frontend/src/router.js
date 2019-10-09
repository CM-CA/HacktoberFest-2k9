import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

<<<<<<< HEAD
/*EXPORTAR DE FORMA GLOBAL VUE*/
=======
>>>>>>> 6944aeddf24840c06d42ed9c782ed56fbd072709
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
