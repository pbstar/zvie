<template>
  <div class="box">
    <Lefter class="bleft"></Lefter>
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
};
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .bleft {
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
