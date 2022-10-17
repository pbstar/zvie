<template>
  <div class="box">
    <div class="bleft">Copyright © 2022 <a href="https://pbstar.github.io/zvie/" target="_blank">Zvie</a> / <a
        href="https://element.eleme.cn/" target="_blank">Element</a> .</div>
    <div class="bright">
      <div class="brbox">
        <img class="bricon" src="../../../assets/icon/github.png" @click="toGithub" alt="" />
      </div>
      <div class="brbox">
        <el-popover placement="top" width="160" trigger="click">
          <img class="bricon" src="../../../assets/icon/weixin.png" slot="reference" alt="" />
          <img style="width: 100%" src="../../../assets/img/weixin.jpg" alt="" />
        </el-popover>
      </div>
      <div class="brbox">
        <img class="bricon" @click="scrollToTop" src="../../../assets/icon/totop.png" alt="" />
      </div>
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
  methods: {
    scrollToTop() {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop;
        let ispeed = Math.floor(osTop / 5 > 50 ? -osTop / 5 : -50);
        document.documentElement.scrollTop = osTop + ispeed;
        if (osTop <= 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    toGithub() {
      window.open("https://github.com/pbstar/zvie", "blank");
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

    a {
      color: #58f7b2;
    }
  }

  .bright {
    height: 60px;
    display: flex;
    align-items: center;

    .brbox {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>