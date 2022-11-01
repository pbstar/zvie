<template>
  <div class="box">
    <div class="bleft">
      <img src="../../../assets/img/logo.png" alt="" />
      <h1>Zvie</h1>
    </div>
    <div class="bright">
      <el-popover placement="bottom" width="220" trigger="click">
        <div style="
            display: flex;
            flex-direction: column;
            height: 168px;
            overflow-y: auto;
          ">
          <router-link v-for="(item, index) in list" :key="index" :to="item.url" style="
              color: #888;
              font-size: 15px;
              line-height: 26px;
              margin: 2px 5px 3px 0;
              padding: 3px 8px;
              border-radius: 5px;
            " class="z_global_1">
            {{ item.text }}</router-link>
          <el-empty v-show="list.length == 0" description="未查询到数据" :image-size="44"></el-empty>
        </div>
        <input v-show="pName == 'doc'" type="text" slot="reference" placeholder="搜索文档" @input="toSearch"
          v-model="input" />
      </el-popover>
      <router-link to="/doc/install" :class="pName == 'doc' ? 'activeLink' : 'link'">文档</router-link>
      <router-link to="/blog" :class="pName == 'blog' ? 'activeLink' : 'link'">博客</router-link>
    </div>
  </div>
</template>
  
<script>
import { list1, list2, list3 } from "@/assets/json/docLeftList.js";
export default {
  name: "toper",
  data() {
    return {
      list: [],
      input: "",
      allList: [],
      pName: "",
    };
  },
  watch: {
    $route: {
      handler: function (to) {
        if (to.matched.length > 0) {
          this.pName = to.matched[0].name;
        }
        if (to.meta.title) {
          document.title = to.meta.title;
        } else {
          if (to.matched.length > 0 && to.matched[0].meta.title) {
            document.title = to.matched[0].meta.title;
          }
        }
      },
      immediate: true,
    },
  },
  created() {
    this.allList = this.allList.concat(list1).concat(list2).concat(list3);
    this.list = this.allList;
  },
  methods: {
    toSearch() {
      if (this.input) {
        this.list = [];
        var reg = new RegExp(this.input, 'i');
        for (var i = 0; i < this.allList.length; i++) {
          if (this.allList[i].text.match(reg)) {
            this.list.push(this.allList[i]);
          }
        }
      } else {
        this.list = this.allList;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 1200px;
  height: 68px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bleft {
    display: flex;
    align-items: center;

    h1 {
      color: #555;
    }

    img {
      width: 46px;
      height: 46px;
      margin-right: 8px;
    }
  }

  .bright {
    display: flex;
    align-items: center;

    input {
      width: 220px;
      height: 35px;
      border: 1px solid #ddd;
      padding: 1px 10px 0;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
      line-height: 35px;
      box-sizing: border-box;
    }

    .link {
      color: #555;
      margin-left: 30px;
    }

    .activeLink {
      margin-left: 30px;
      color: #0cb56c;
    }
  }
}
</style>