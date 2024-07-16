import { createRouter, createWebHashHistory } from "vue-router";

import home from "./pages/home.vue";
import single from "./pages/single.vue";
import Error404 from "./pages/error404.vue";
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/single",
      name: "single",
      component: single,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error-404",
      component: Error404,
    },
  ],
});

export { router };
