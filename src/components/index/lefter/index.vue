<template>
  <div class="box">
    <h4>开发指南</h4>
    <router-link to="/doc/install" :class="$route.name=='docInstall'?'activeLink':'link'">安装</router-link>
    <router-link to="/doc/start" :class="$route.name=='docStart'?'activeLink':'link'">快速上手</router-link>
    <h4>基础组件</h4>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Button 按钮</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Input 输入框</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Radio 单选框</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Checkbox 多选框</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">InputNumber 计数器</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Select 选择器</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Cascader 级联选择器</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Switch 开关</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Slider 滑块</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Rate 评分</router-link>
    <router-link to="/doc/button" :class="$route.name=='docButton'?'activeLink':'link'">Upload 上传</router-link>
  </div>
</template>

<script>
export default {
  name: 'lefter',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
.box {
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  h4 {
    border-bottom: 1px solid #eee;
    height: 60px;
    line-height: 60px;
    color: #666;
    font-weight: 400;
  }

  .link {
    line-height: 35px;
    height: 35px;
    margin-top: 6px;
    padding: 0 8px;
    border-radius: 5px;
    color: #888;
    font-size: 15px;
    text-decoration: none;
  }

  .activeLink {
    line-height: 35px;
    height: 35px;
    margin-top: 6px;
    padding: 0 8px;
    border-radius: 5px;
    color: #0b8586;
    background-color: rgb(240, 240, 240);
    font-size: 15px;
    text-decoration: none;
  }

  .link:hover {
    color: #0b8586;
    background-color: rgb(246, 246, 246);
  }
}
</style>