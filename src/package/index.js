import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import zButton from "./button";

const eles = [Button]
const coms = [zButton];

const install = function (Vue) {
  eles.forEach(ele => {
    Vue.use(ele);
  })
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};

export default install;