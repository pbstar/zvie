<template>
  <div class="doc">
    <h2>Button 按钮</h2>
    <p class="p">常用的操作按钮。</p>
    <fieldset>
      <legend>示例用法</legend>
    </fieldset>
    <zvi-button>默认按钮</zvi-button>
    <zvi-button type="primary">主要按钮</zvi-button>
    <zvi-button type="success">成功按钮</zvi-button>
    <zvi-button type="info">信息按钮</zvi-button>
    <zvi-button type="warning">警告按钮</zvi-button>
    <zvi-button type="danger">危险按钮</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button>默认按钮&lt;/zvi-button>
        &lt;zvi-button type="primary">主要按钮&lt;/zvi-button>
        &lt;zvi-button type="success">成功按钮&lt;/zvi-button>
        &lt;zvi-button type="info">信息按钮&lt;/zvi-button>
        &lt;zvi-button type="warning">警告按钮&lt;/zvi-button>
        &lt;zvi-button type="danger">危险按钮&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" size="big">大型按钮</zvi-button>
    <zvi-button type="primary">默认按钮</zvi-button>
    <zvi-button type="primary" size="small">小型按钮</zvi-button>
    <zvi-button type="primary" size="mini">超小按钮</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" size="big">大型按钮&lt;/zvi-button>
        &lt;zvi-button type="primary">默认按钮&lt;/zvi-button>
        &lt;zvi-button type="primary" size="small">小型按钮&lt;/zvi-button>
        &lt;zvi-button type="primary" size="mini">超小按钮&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" plain>朴素按钮</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" plain>朴素按钮&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" round>圆角按钮</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" round>圆角按钮&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" disabled>禁用状态</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" disabled>禁用状态&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" icon="zvi-icon-edit">图标按钮</zvi-button>
    <zvi-button type="primary" icon="zvi-icon-delete"></zvi-button>
    <zvi-button type="primary" icon="zvi-icon-search">搜索</zvi-button>
    <zvi-button type="primary"
      >上传<i class="zvi-icon-upload zvi-icon--right"></i
    ></zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" icon="zvi-icon-edit">图标按钮&lt;/zvi-button>
        &lt;zvi-button type="primary" icon="zvi-icon-delete">&lt;/zvi-button>
        &lt;zvi-button type="primary" icon="zvi-icon-search">搜索&lt;/zvi-button>
        &lt;zvi-button type="primary">上传&lt;i class="zvi-icon-upload zvi-icon--right">&lt;/i>&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button type="primary" :loading="true">加载中</zvi-button>
    <div class="code">
      <pre>
        &lt;zvi-button type="primary" :loading="true">加载中&lt;/zvi-button>
      </pre>
    </div>
    <zvi-button-group style="margin-right: 10px">
      <zvi-button type="primary" icon="zvi-icon-arrow-left">上一页</zvi-button>
      <zvi-button type="primary"
        >下一页<i class="zvi-icon-arrow-right zvi-icon--right"></i
      ></zvi-button>
    </zvi-button-group>
    <zvi-button-group>
      <zvi-button type="primary" icon="zvi-icon-edit"></zvi-button>
      <zvi-button type="primary" icon="zvi-icon-share"></zvi-button>
      <zvi-button type="primary" icon="zvi-icon-delete"></zvi-button>
    </zvi-button-group>
    <div class="code">
      <pre>
        &lt;zvi-button-group style="margin-right: 10px">
          &lt;zvi-button type="primary" icon="zvi-icon-arrow-left">上一页&lt;/zvi-button>
          &lt;zvi-button type="primary">下一页&lt;i class="zvi-icon-arrow-right zvi-icon--right">&lt;/i>&lt;/zvi-button>
        &lt;/zvi-button-group>
        &lt;zvi-button-group>
          &lt;zvi-button type="primary" icon="zvi-icon-edit">&lt;/zvi-button>
          &lt;zvi-button type="primary" icon="zvi-icon-share">&lt;/zvi-button>
          &lt;zvi-button type="primary" icon="zvi-icon-delete">&lt;/zvi-button>
        &lt;/zvi-button-group>
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
        <td>type</td>
        <td>类型</td>
        <td>string</td>
        <td>primary / success / warning / danger / info / text</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>尺寸</td>
        <td>string</td>
        <td>big / small / mini</td>
        <td>—</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标类名</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>plain</td>
        <td>是否朴素按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>round</td>
        <td>是否圆角按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>是否圆形按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>autofocus</td>
        <td>是否默认聚焦</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>
<script>
import zviButton from "@/package/button";
import zviButtonGroup from "@/package/button/group.vue";
export default {
  name: "docButton",
  components: {
    zviButton,
    zviButtonGroup,
  },
};
</script>
