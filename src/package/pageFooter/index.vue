<template>
  <div class="box">
    <div class="bleft"></div>
    <div class="bright"></div>
  </div>
</template>

<script>
export default {
  name: "zvi-button",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.bt {
  color: red;
}
</style>
