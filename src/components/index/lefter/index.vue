<template>
  <div class="box">
    <h4>开发指南</h4>
    <router-link v-for="(item, index) in list1" :key="index + 'l1'" :to="item.url"
      :class="$route.name == item.name ? 'activeLink' : 'link'">{{ item.text }}</router-link>
    <h4>基础组件</h4>
    <router-link v-for="(item, index) in list2" :key="index + 'l2'" :to="item.url"
      :class="$route.name == item.name ? 'activeLink' : 'link'">{{ item.text }}</router-link>
    <h4>高级组件</h4>
    <router-link v-for="(item, index) in list3" :key="index + 'l3'" :to="item.url"
      :class="$route.name == item.name ? 'activeLink' : 'link'">{{ item.text }}</router-link>
  </div>
</template>

<script>
import { list1, list2, list3 } from "@/assets/json/docLeftList.js";
export default {
  name: "lefter",
  data() {
    return {
      list1,
      list2,
      list3
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  h4 {
    border-bottom: 1px solid #eee;
    height: 50px;
    line-height: 50px;
    color: #666;
    font-weight: 400;
    margin-top: 10px;
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
    color: #0cb56c;
    background-color: rgb(240, 240, 240);
    font-size: 15px;
    text-decoration: none;
  }

  .link:hover {
    color: #0cb56c;
    background-color: rgb(246, 246, 246);
  }
}
</style>