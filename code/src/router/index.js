/*
 * @Author: WaterFly
 * @Date: 2022-11-08 16:33:00
 * @Description:
 * Just enjoy code.
 */

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/home", redirect: "/" },
  {
    path: "/",
    name: "Home",
    component: () => import("@/page/Home.vue"),
  },
  {
    path: "/a/:userId",
    name: "PageA",
    props: true,
    component: () => import("@/page/PageA.vue"),
    beforeEnter: (to, from) => {
      // ...
      console.log("配置守卫 beforeEnter", to, from);
      return true;
    },
    children: [
      {
        path: "a/sub/:userId",
        name: "pageSub",
        component: () => import("@/page/PageASub.vue"),
      },
    ],
  },
  {
    path: "/b/:id",
    name: "PageB",
    component: () => import("@/page/PageB.vue"),
    props: {
      objectModel: 123,
    },
  },
  {
    path: "/c",
    name: "PageC",
    component: () => import("@/page/PageC.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
