import Vue from "vue";
import VueRouter from "vue-router";
import doc from "../views/doc/index.vue";
import docInstall from "../views/doc/install";
import docStart from "../views/doc/start";
import docButton from "../views/doc/button";

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
      },
    ],
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
