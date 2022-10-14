<template>
  <div class="doc">
    <h2>引入</h2>
    <p class="p">本节将介绍如何在项目中以 cdn 的形式引入 Zvie 资源包。</p>
    <h3>CDN</h3>
    <p class="p">
      目前可以通过
      <a href="https://unpkg.com/zvie" target="blank">unpkg.com/zvie</a>
      获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
    </p>
    <div class="code">
      <pre>
        &lt;!-- 引入样式 -->
        &lt;link rel="stylesheet" href="https://unpkg.com/zvie/lib/zvie.css"/>
        &lt;!-- 引入组件库 -->
        &lt;script src="https://unpkg.com/zvie/lib/zvie.umd.min.js">&lt;/script>
      </pre>
    </div>
    <p class="p">
      建议使用 CDN 引入的用户在链接地址上锁定版本，以免将来 Zvie
      升级后受到兼容性更新的影响。锁定版本的方法请查看
      <a href="https://unpkg.com" target="blank">unpkg.com</a> 。
    </p>
  </div>
</template>
<script>
export default {
  name: "docIntroduce",
};
</script>
<style lang="scss" scoped>
</style>

