<template>
  <div class="doc">
    <h2>快速上手</h2>
    <p class="p">本节将介绍如何在项目中使用 Zvie。</p>
    <h3>引入 Zvie</h3>
    <p class="p">
      你可以引入整个
      Zvie，暂不支持根据需要仅引入部分组件。我们先介绍如何引入完整的 Zvie。
    </p>
    <p class="p">在 main.js 中写入以下内容：</p>
    <div class="code">
      <p>
        import Vue from "vue"; <br />
        import App from "./App.vue"; <br />
        import zvie from "zvie"; <br />
        import "zvie/lib/zvie.css"; <br />
        Vue.config.productionTip = false;<br />
        Vue.use(zvie); <br />
        new Vue({ <br />
        &nbsp;&nbsp;render: (h) => h(App),<br />
        }).$mount("#app");
      </p>
    </div>
    <p class="p">
      以上代码便完成了 Zvie 的引入。需要注意的是，样式文件需要单独引入。
    </p>
    <h3>开始使用</h3>
    <p class="p">
      至此，一个基于 Vue 和 Zvie
      的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
    </p>
  </div>
</template>
<script>
export default {
  name: "docStart",
};
</script>
<style lang="scss" scoped>

</style>

