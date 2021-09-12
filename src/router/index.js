import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/coaches" },
  {
    path: "/coaches",
    name: "Coaches",
    component: () => import("../views/coaches/CoachList.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/coaches/CoachRegister.vue"),
  },
  {
    path: "/:NotFound(.*)*",
    name: "PageNotFound",
    component: () => import("../components/layouts/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
