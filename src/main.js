// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 引用 BS4
import "bootstrap";

// 引用 AJAX 套件
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
// 引用 Loading 套件
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.component("Loading", Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
