// import { Button } from 'element-ui';
import '@/assets/css/zvie.css';
import zButton from "./button";
import zButtonGroup from "./button/group";
import zInput from "./input";

// const eles = [Button]
const coms = [zButton,zButtonGroup,zInput];

const install = function (Vue) {
  // eles.forEach(ele => {
  //   Vue.use(ele);
  // })
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};

export default install;