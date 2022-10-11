<template>
  <div class="box">

  </div>
</template>

<script>
export default {
  name: 'toper',
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
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>