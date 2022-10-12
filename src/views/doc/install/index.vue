<template>
  <div>
    <h2>安装</h2>
    <p class="p">请使用推荐的方式进行资源包的安装。</p>
    <h3>npm 安装</h3>
    <p class="p">
      使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
    </p>
    <div class="code">
      <p>npm install zvie</p>
    </div>
    <p class="p">
      如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：
      <a href="#/doc/start">快速上手</a>。
    </p>
  </div>
</template>
<script>
export default {
  name: "docInstall",
};
</script>
<style lang="scss" scoped>
.code {
  background-color: #eee;
  padding: 10px;
  font-family: monospace;
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 16px;
}
h3 {
  margin-bottom: 10px;
}
.p {
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 20px;
  color: #666;
}
a {
  color: #0b8586;
}
</style>
