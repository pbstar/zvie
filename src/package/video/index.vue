<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import Player from 'xgplayer';
export default {
  name: "zvi-video",
  props: {
    id: {
      type: String,
      default: "zviVideo",
    },
    url: {
      type: String,
      default: "",
    },
    width: {
      type: [String, Number],
      default: 600,
    },
    height: {
      type: [String, Number],
      default: 337.5,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    fitVideoSize: {
      type: String,
      default: "",
    },
    volume: {
      type: [String, Number],
      default: 0.6,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    poster: {
      type: String,
      default: "",
    },
    playbackRate: {
      type: Array,
      default: [],
    },
    defaultPlaybackRate: {
      type: [String, Number],
      default: 1,
    },
    playbackRateUnit: {
      type: String,
      default: "X",
    },
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = new Player({
      id: this.id,
      url: this.url,
      width: this.width,
      height: this.height
    });
  }
};
</script>
<style lang="scss" scoped>

</style>