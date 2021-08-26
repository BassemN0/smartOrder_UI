// The main vue configration codes
import Vue from "vue";
import App from "./App.vue";

// using lazy-load
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

// codes to add bootstrap
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
// importing bootstrap css files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// adding and using vue-router
import VueRouter from "vue-router";
import { routes } from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "hash",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// importing and using vue-cookies
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.$cookies.config("1d");

Vue.config.productionTip = false;

// registering the globally used components
// importing the components
import callAWaiter from "./components/actionComponentsFolder/callWaiter.vue";
import orderACheck from "./components/actionComponentsFolder/orderCheck.vue";
import appHeader from "./components/header.vue";
import appFooter from "./components/footer.vue";
import appError from "./components/error.vue";
import appLoading from "./components/loading.vue";
import appRights from "./components/rights.vue";

// using them
Vue.component("callWaiter", callAWaiter);
Vue.component("orderCheck", orderACheck);
Vue.component("app-header", appHeader);
Vue.component("app-footer", appFooter);
Vue.component("app-error", appError);
Vue.component("app-loading", appLoading);
Vue.component("app-rights", appRights);

// regestring event bus
export const centralData = new Vue({
  data() {
    return {
      error: false,
      loaded: false
    };
  }
});

// rendring the html el
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
