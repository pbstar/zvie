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
      default: "http://oss.mcweb.club/video/xgplayer.mp4",
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
      default: "http://oss.mcweb.club/img/zvie/xgplayer.jpg",
    },
    playbackRate: {
      type: Array,
      default: function () {
        return [0.5, 1, 1.5, 2, 3, 5]
      },
    },
    defaultPlaybackRate: {
      type: [String, Number],
      default: 1,
    },
    lastPlayTime: {
      type: [String, Number],
      default: 0,
    },
    ignores: {
      type: Array,
      default: function () {
        return ['pip']
      }
    },
    directInit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    if (this.directInit) this.init()
  },
  methods: {
    init() {
      let pip = true
      for (let i = 0; i < this.ignores.length; i++) {
        if (this.ignores[i] == 'pip') pip = false
      }
      this.player = new Player({
        id: this.id,
        url: this.url,
        width: this.width,
        height: this.height,
        poster: this.poster,
        playbackRate: this.playbackRate, //倍速列表
        defaultPlaybackRate: this.defaultPlaybackRate, //播放速递
        volume: this.volume, //声音
        fluid: this.fluid, //是否宽度自适应
        fitVideoSize: this.fitVideoSize, //适应内容模式
        loop: this.loop, //循环播放
        autoplay: this.autoplay, //自动播放
        lastPlayTime: this.lastPlayTime, //起始播放时间
        rotateFullscreen: this.rotateFullscreen, //横屏全屏
        pip, //画中画
        'x5-video-orientation': 'landscape',
        'x5-video-player-fullscreen': false,
        'x5-video-player-type': 'h5',
        playsinline: true,
        ignores: this.ignores
      });
      this.player.on('play', () => {
        this.$emit('play')
      })
      this.player.on('pause', () => {
        this.$emit('pause')
      })
      this.player.on('ended', () => {
        this.$emit('ended')
      })
      this.player.on('timeupdate', (e) => {
        this.$emit('timechange', e.currentTime.toFixed(2))
      })
      this.player.on('volumechange', (e) => {
        console.log('shengyin', e.volume.toFixed(2));
        this.$emit('volumechange', e.volume.toFixed(2))
      })
      this.player.on('requestFullscreen', () => {
        this.$emit('fullscreenchange', true)
      })
      this.player.on('exitFullscreen', () => {
        this.$emit('fullscreenchange', false)
      })
      this.player.on('playbackrateChange', (e) => {
        this.$emit('playbackratechange', e)
      })
    },
    play() {
      if (this.player) {
        this.player.play()
      } else {
        this.init()
        this.player.play()
      }
    },
    pause() {
      if (this.player) this.player.pause()
    },
    replay() {
      if (this.player) {
        this.player.replay()
      } else {
        this.init()
        this.player.play()
      }
    },
    reload() {
      if (this.player) {
        this.player.destroy()
        this.init()
      } else {
        this.init()
      }
    },
    destroy() {
      if (this.player) {
        this.player.destroy()
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>