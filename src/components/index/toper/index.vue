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
        <input type="text" slot="reference" placeholder="搜索文档" @input="toSearch" v-model="input" />
      </el-popover>
      <router-link to="/doc/install" class="link">文档</router-link>
      <span>博客</span>
    </div>
  </div>
</template>
  
<script>
import { list1, list2 } from "@/assets/json/docLeftList.json";
export default {
  name: "toper",
  data() {
    return {
      list: [],
      input: "",
      allList: [],
    };
  },
  created() {
    this.allList = this.allList.concat(list1).concat(list2);
    this.list = this.allList;
  },
  methods: {
    toSearch() {
      console.log(this.input);
      if (this.input) {
        this.list = [];
        var reg = new RegExp(this.input);
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

    span {
      color: #555;
      margin-left: 30px;
    }

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
      color: #41B784;
      margin-left: 30px;
    }
  }
}
</style>