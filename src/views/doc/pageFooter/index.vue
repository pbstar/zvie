<template>
  <div class="doc">
    <h2>PageFooter</h2>
    <p class="p">本节将介绍如何在项目中使用 ZVIE。</p>
    <h3>引入 ZVIE</h3>
    <p class="p">
      你可以引入整个
      ZVIE，暂不支持根据需要仅引入部分组件。我们先介绍如何引入完整的 ZVIE。
    </p>
    <p class="p">在 main.js 中写入以下内容：</p>
    <div class="code">
      <p>
        import Vue from "vue"; <br />
        import App from "./App.vue"; <br />
        import zvie from "zvie"; <br />
        import "zvie/zvie.css"; <br />
        Vue.config.productionTip = false;<br />
        Vue.use(zvie); <br />
        new Vue({ <br />
        &nbsp;&nbsp;render: (h) => h(App),<br />
        }).$mount("#app");
      </p>
    </div>
    <p class="p">
      以上代码便完成了 ZVIE 的引入。需要注意的是，样式文件需要单独引入。
    </p>
    <h3>开始使用</h3>
    <p class="p">
      至此，一个基于 Vue 和 ZVIE
      的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
    </p>
  </div>
</template>
<script>
export default {
  name: "docPageFooter",
};
</script>

