import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import ComponentePrueba from "../components/ComponentePrueba.vue";
import FooterComponent from "../components/FooterComponent.vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component('componente-prueba', ComponentePrueba)
Vue.component('footer-c', FooterComponent)

new Vue({
  router,
  store,
  Carousel,
  ComponentePrueba,
  FooterComponent,
  render: h => h(App)
}).$mount("#app");
