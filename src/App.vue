<template>
  <div id="app">
    <div class="top">
      <Toper></Toper>
    </div>
    <div class="mid">
      <router-view />
    </div>
    <div class="bot">
      <Bottomer></Bottomer>
    </div>
  </div>
</template>
<script>
import Toper from "@/components/index/toper";
import Bottomer from "@/components/index/bottomer/index.vue";

export default {
  name: "app",
  components: {
    Toper,
    Bottomer,
  },
  mounted() {
    let loading = document.getElementById("zvie_base_loading");
    loading.style.display = 'none'
  }
};
</script>
<style lang="scss" scoped>
.top {
  box-shadow: 0 2px 10px 0 #eee;
}

.mid {
  min-height: calc(100vh - 168px);
}

.bot {
  background-color: #333;
}
</style>
