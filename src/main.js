import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import '@/assets/css/zvie.css';
import "@/assets/css/index.css";
import "@/assets/css/doc.scss";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
