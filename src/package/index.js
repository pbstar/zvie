import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import button from "./button";

const coms = [button];

// 批量组件注册
const install = function (Vue) {
  Vue.use(ElementUI);
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};


export default install;