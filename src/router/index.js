import Vue from "vue";
import VueRouter from "vue-router";
import doc from "../views/doc";
import docInstall from "../views/doc/install";
import docStart from "../views/doc/start";
import docButton from "../views/doc/button";
import docInput from "../views/doc/input";
import docPageFooter from "../views/doc/pageFooter";

import blog from "../views/blog";

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/doc",
  },
  {
    path: "/doc",
    name: "doc",
    component: doc,
    redirect: "/doc/install",
    meta: {
      title: "Zvie-文档"
    },
    children: [
      {
        path: "install",
        name: "docInstall",
        component: docInstall,
      }, {
        path: "start",
        name: "docStart",
        component: docStart,
      }, {
        path: "button",
        name: "docButton",
        component: docButton,
      }, {
        path: "input",
        name: "docInput",
        component: docInput,
      }, {
        path: "pageFooter",
        name: "docPageFooter",
        component: docPageFooter,
      }
    ],
  },{
    path: "/blog",
    name: "blog",
    component: blog,
    meta: {
      title: "Zvie-博客"
    },
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
