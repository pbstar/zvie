<template>
  <div class="box">
    <div class="bleft">
      <h1>ZVIE</h1>
    </div>
    <div class="bright">
      <input type="text" placeholder="搜索文档" />
      <span>文档</span>
      <span>博客</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "toper",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  height: 68px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bright {
    display: flex;
    align-items: center;

    span {
      margin-left: 30px;
    }
    input {
      width: 220px;
      height: 30px;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
      line-height: 32px;
      box-sizing: border-box;
    }
  }
}
</style>