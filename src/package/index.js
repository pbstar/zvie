// import { Button } from 'element-ui';
import '@/assets/css/zvie.css';
import zButton from "./button";
import zButtonGroup from "./button/group";
import zInput from "./input";
import zVideo from "./video";
import zVerification from "./verification";

// var eles = [Button]
var coms = [zButton, zButtonGroup, zInput, zVideo, zVerification];

var install = function (Vue) {
  let obj = { install }
  // eles.forEach(ele => {
  //   Vue.use(ele);
  // })
  coms.forEach((com, key) => {
    obj[key + 1] = arr[key]
    Vue.component(com.name, com);
  });
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default obj