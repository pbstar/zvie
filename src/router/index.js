import Vue from "vue";
import VueRouter from "vue-router";
import doc from "../views/doc";
import docInstall from "../views/doc/install";
import docIntroduce from "../views/doc/introduce";
import docButton from "../views/doc/button";
import docInput from "../views/doc/input";
import docIcon from "../views/doc/icon";
import docPageFooter from "../views/doc/pageFooter";
import docVideo from "../views/doc/video";
import docVerification from "../views/doc/verification";
import doc404 from "../views/doc/404";

import blog from "../views/blog";
import page404 from "../views/404";

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
        path: "introduce",
        name: "docIntroduce",
        component: docIntroduce,
      }, {
        path: "button",
        name: "docButton",
        component: docButton,
      }, {
        path: "input",
        name: "docInput",
        component: docInput,
      }, {
        path: "icon",
        name: "docIcon",
        component: docIcon,
      }, {
        path: "pageFooter",
        name: "docPageFooter",
        component: docPageFooter,
      }, {
        path: "video",
        name: "docVideo",
        component: docVideo,
      }, {
        path: "verification",
        name: "docVerification",
        component: docVerification,
      }, {
        path: "*",
        name: "doc404",
        component: doc404,
      }
    ],
  }, {
    path: "/blog",
    name: "blog",
    component: blog,
    meta: {
      title: "Zvie-博客"
    },
  }, {
    path: "*",
    name: "page404",
    component: page404,
    meta: {
      title: "Zvie-404"
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
