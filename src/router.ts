import Vue from "vue";
import Router from "vue-router";
import Groceries from "./views/groceries.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/groceries",
      name: "groceries",
      component: Groceries
    },
    {
      path: "/analysis",
      name: "analysis",
      component: () => import("./views/analysis.vue")
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* webpackChunkName: "settings" */
      component: () => import("./views/settings.vue")
    }
  ]
});
