<template>
  <div class="box">
    <Lefter
      :class="isLeftFixed ? 'bleftFlex' : 'bleft'"
      :style="isLeftFixed ? 'height:' + leftH + 'px' : ''"
    ></Lefter>
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
      isLeftFixed: false,
      leftH: 0,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.throttle(this.handleScroll, 10),
      false
    );
  },
  methods: {
    handleScroll() {
      let showH = document.documentElement.clientHeight;
      let showT = parseInt(document.documentElement.scrollTop);
      let zHeight = document.body.scrollHeight;
      if (showT < 68) {
        this.isLeftFixed = false;
      } else {
        if (showH + showT + 100 > zHeight) {
          this.leftH = zHeight - showT - 100;
        } else {
          this.leftH = showH;
        }
        this.isLeftFixed = true;
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
          }, wait);
        }
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .bleft {
    width: 200px;
    padding-right: 20px;
  }
  .bleftFlex {
    width: 200px;
    padding-right: 20px;
    position: fixed;
    top: 0;
    overflow-y: auto;
  }

  .blMer {
    width: 200px;
  }

  .bright {
    width: 1000px;
    padding: 30px 0 30px 20px;
    border-left: 1px solid #eee;
  }
}
</style>
