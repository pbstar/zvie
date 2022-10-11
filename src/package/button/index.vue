<template>
  <div>
    <el-button class="bt" type="primary">主要de按钮</el-button>
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
