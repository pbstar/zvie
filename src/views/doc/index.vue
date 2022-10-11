<template>
  <div class="box">
    <Lefter class="bleft"></Lefter>
    <router-view class="bright" />
  </div>
</template>
<script>
import Lefter from '@/components/index/lefter/index.vue';

export default {
  name: 'doc',
  components: {
    Lefter
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;

  .bleft {
    width: 200px;
  }

  .bright {
    width: 1000px;
  }
}
</style>
