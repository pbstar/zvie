<template>
  <div class="box">
    <h3>开发指南</h3>
    <p>安装</p>
    <p>快速上手</p>
    <h3>基础组件</h3>
    <p>Button 按钮</p>
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
  }
}
</script>
<style lang="scss" scoped>
.box {
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  h3 {
    border-bottom: 1px solid #eee;
    height: 60px;
    line-height: 60px;
    color: #888;
    font-weight: 400;
  }
}
</style>