<template>
  <div class="box">
    <Lefter class="bleft" v-show="!isLeftFixed"></Lefter>
    <div class="blMer" v-show="isLeftFixed"></div>
    <router-view class="bright" />
  </div>
</template>
<script>
import Lefter from "@/components/index/lefter/index.vue";

export default {
  name: "doc",
  components: {
    Lefter,
  },
  data() {
    return {
      isLeftFixed: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.throttle(this.handleScroll, 50), false)
  },
  methods: {
    handleScroll() {
      let showH = document.documentElement.clientHeight
      let showT = parseInt(document.documentElement.scrollTop)
      let zHeight = document.body.scrollHeight
      console.log(showH, showT, zHeight);
      if (showT > 68) {
        this.isLeftFixed = true
      } else if () {
        this.isLeftFixed = false
      } else {

      }
    },

    throttle(fn, wait) {
      var timer = null;
      return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
          timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
          }, wait)
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  // justify-content: space-between;

  .bleft {
    width: 180px;
    // position: fixed;
  }

  .blMer {
    width: 180px;
  }

  .bright {
    width: 1000px;
    padding: 30px 0 30px 20px;
    margin-left: 20px;
    border-left: 1px solid #eee;
  }
}
</style>
