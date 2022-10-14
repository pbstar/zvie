<template>
  <div class="doc">
    <h2>安装</h2>
    <p class="p">本节将介绍如何在项目中安装并引入 Zvie 资源包。</p>
    <h3>npm 安装</h3>
    <p class="p">
      使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
    </p>
    <div class="code">
      <p>npm install zvie</p>
    </div>
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
    <!-- <p class="p">
      如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：
      <a href="#/doc/start">快速上手</a>。
    </p> -->
  </div>
</template>
<script>
export default {
  name: "docInstall",
};
</script>
<style lang="scss" scoped>
</style>
