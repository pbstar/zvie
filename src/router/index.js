import Vue from "vue";
import VueRouter from "vue-router";
import doc from "../views/doc/index.vue";
import docInstall from "../views/doc/install";
import docStart from "../views/doc/start";
import docButton from "../views/doc/button";
import docPageFooter from "../views/doc/pageFooter";

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
        path: "pageFooter",
        name: "docPageFooter",
        component: docPageFooter,
      }
    ],
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((from, to, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    if (to.matched.length > 0) {
      document.title = to.matched[0].meta.title;
    }
  }
  next();
})

export default router;
