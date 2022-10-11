import Vue from "vue";
import VueRouter from "vue-router";
import doc from "../views/doc/index.vue";
import docIndex from "../views/doc/post/index.vue";
Vue.use(VueRouter);

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
    redirect: "/doc/index",
    children: [
      {
        path: "index",
        name: "docIndex",
        component: docIndex,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
