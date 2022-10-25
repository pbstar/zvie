<template>
  <div class="doc">
    <h2>Verification 验证码</h2>
    <p class="p">验证码生成器。</p>
    <fieldset>
      <legend>示例用法</legend>
    </fieldset>
    <zvi-verification @updateCode="updateCode"></zvi-verification>
    <div class="code">
      <pre>
        &lt;zvi-verification @updateCode="updateCode">&lt;/zvi-verification>
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
        <td>contentWidth</td>
        <td>验证码容器宽度</td>
        <td>number</td>
        <td>—</td>
        <td>100</td>
      </tr>
      <tr>
        <td>contentHeight</td>
        <td>验证码容器高度</td>
        <td>number</td>
        <td>—</td>
        <td>44</td>
      </tr>
      <tr>
        <td>identifyCodes</td>
        <td>验证码取值来源</td>
        <td>string</td>
        <td>—</td>
        <td>1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ</td>
      </tr>
      <tr>
        <td>identifyNumber</td>
        <td>验证码取值数量</td>
        <td>number</td>
        <td>—</td>
        <td>4</td>
      </tr>
      <tr>
        <td>fontSizeMin</td>
        <td>验证码字体最小值</td>
        <td>number</td>
        <td>—</td>
        <td>25</td>
      </tr>
      <tr>
        <td>fontSizeMax</td>
        <td>验证码字体最大值</td>
        <td>number</td>
        <td>—</td>
        <td>35</td>
      </tr>
      <tr>
        <td>bgcMin</td>
        <td>验证码图片背景色最小值</td>
        <td>number</td>
        <td>—</td>
        <td>200</td>
      </tr>
      <tr>
        <td>bgcMax</td>
        <td>验证码图片背景色最大值</td>
        <td>number</td>
        <td>—</td>
        <td>220</td>
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
        <td>updateCode</td>
        <td>验证码改变</td>
        <td>验证码</td>
      </tr>
    </table>
  </div>
</template>
<script>
import zviVerification from "@/package/verification";
export default {
  name: "docVerification",
  components: {
    zviVerification,
  },
  methods: {
    updateCode(e) {
      console.log(e);
    }
  },
  beforeDestroy() {
    console.clear()
  }
};
</script>