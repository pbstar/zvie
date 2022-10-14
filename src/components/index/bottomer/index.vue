<template>
  <div class="box">
    <div class="bleft">Copyright © 2022 Zvie .</div>
    <div class="bright">
      <img class="brbox" src="../../../assets/icon/github.png" alt="" />
      <div
        class="brbox"
        style="
          background-color: #fff;
          width: 28px;
          height: 28px;
          border-radius: 16px;
        "
      >
        <img
          style="margin: -2px 2px 1px -2px"
          src="../../../assets/icon/weixin.png"
          alt=""
        />
      </div>
      <img class="brbox" src="../../../assets/icon/totop.png" alt="" />
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
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .bleft {
    color: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }
  .bright {
    height: 60px;
    display: flex;
    align-items: center;
    .brbox {
      margin-left: 10px;
    }
  }
}
</style>