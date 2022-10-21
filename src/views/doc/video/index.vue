<template>
  <div class="doc">
    <h2>Video 视频</h2>
    <p class="p">一款带解析器、能节省流量的HTML5视频播放器。</p>
    <fieldset>
      <legend>示例用法</legend>
    </fieldset>
    <zvi-video></zvi-video>
    <div class="code">
      <pre>
        &lt;zvi-video>&lt;/zvi-video>
      </pre>
    </div>
    <fieldset>
      <legend>属性列表</legend>
    </fieldset>
    <table>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>id</td>
        <td>播放器唯一值</td>
        <td>string</td>
        <td>—</td>
        <td>zviVideo</td>
      </tr>
      <tr>
        <td>url</td>
        <td>视频资源地址</td>
        <td>string</td>
        <td>—</td>
        <td>//oss.mcweb.club/<br />video/xgplayer.mp4</td>
      </tr>
      <tr>
        <td>directInit</td>
        <td>是否直接初始化（属性中有异步数据时，<br />请等待异步数据完成时用方法中的初始<br />化，而非直接初始化）</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>poster</td>
        <td>播放器的封面</td>
        <td>string</td>
        <td>—</td>
        <td>//oss.mcweb.club/img<br />/zvie/xgplayer.jpg</td>
      </tr>
      <tr>
        <td>width</td>
        <td>播放器宽度</td>
        <td>string / number</td>
        <td>—</td>
        <td>600</td>
      </tr>
      <tr>
        <td>height</td>
        <td>播放器高度</td>
        <td>string / number</td>
        <td>—</td>
        <td>337.5</td>
      </tr>
      <tr>
        <td>fluid</td>
        <td>是否设置为流式布局（播放器宽度跟随父<br />元素的宽度大小变化，且高度按照配置项<br />中的高度和宽度的比例来变化）</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>fitVideoSize</td>
        <td>自适应视频内容</td>
        <td>string</td>
        <td>fixWidth / fixHeight</td>
        <td>—</td>
      </tr>
      <tr>
        <td>volume</td>
        <td>播放器预设音量</td>
        <td>string / number</td>
        <td>0 ~ 1</td>
        <td>0.6</td>
      </tr>
      <tr>
        <td>autoplay</td>
        <td>是否自动播放</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loop</td>
        <td>是否循环播放</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>lastPlayTime</td>
        <td>播放器开始播放位置（单位秒）</td>
        <td>string / number</td>
        <td>—</td>
        <td>0</td>
      </tr>
      <tr>
        <td>defaultPlaybackRate</td>
        <td>播放器播放速度</td>
        <td>string / number</td>
        <td>—</td>
        <td>1</td>
      </tr>
      <tr>
        <td>playbackRate</td>
        <td>播放器播放速度列表</td>
        <td>array</td>
        <td>—</td>
        <td>[0.5, 1, 1.5, 2, 3, 5]</td>
      </tr>
      <tr>
        <td>ignores</td>
        <td>播放器关闭的内置控件</td>
        <td>array</td>
        <td>
          ['time','definition',<br />'fullscreen','loading',<br />'play','pip','error',<br />'progress','replay',<br />'volume'.'poster']
        </td>
        <td>['pip']</td>
      </tr>
    </table>
    <fieldset>
      <legend>方法列表</legend>
    </fieldset>
    <table>
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>init</td>
        <td>初始化播放器</td>
        <td>—</td>
      </tr>
      <tr>
        <td>play</td>
        <td>播放视频</td>
        <td>—</td>
      </tr>
      <tr>
        <td>pause</td>
        <td>暂停视频</td>
        <td>—</td>
      </tr>
      <tr>
        <td>replay</td>
        <td>重播视频</td>
        <td>—</td>
      </tr>
      <tr>
        <td>reload</td>
        <td>重载播放器</td>
        <td>—</td>
      </tr>
      <tr>
        <td>destroy</td>
        <td>销毁播放器</td>
        <td>—</td>
      </tr>
    </table>
    <fieldset>
      <legend>事件列表</legend>
    </fieldset>
    <table>
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>play</td>
        <td>播放视频</td>
        <td>—</td>
      </tr>
      <tr>
        <td>pause</td>
        <td>暂停视频</td>
        <td>—</td>
      </tr>
      <tr>
        <td>ended</td>
        <td>播放结束</td>
        <td>—</td>
      </tr>
      <tr>
        <td>timechange</td>
        <td>播放时间变化</td>
        <td>播放到的秒数</td>
      </tr>
      <tr>
        <td>volumechange</td>
        <td>音量发生变化</td>
        <td>视频音量（0 ~ 1）</td>
      </tr>
      <tr>
        <td>fullscreenchange</td>
        <td>进入或退出全屏</td>
        <td>进入则为true，退出则为false</td>
      </tr>
      <tr>
        <td>playbackratechange</td>
        <td>播放速度变化</td>
        <td>改变前后速度{form:1,to:1.5}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import zviVideo from "@/package/video";
export default {
  name: "docVideo",
  components: {
    zviVideo,
  },
};
</script>
