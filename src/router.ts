import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: '/groceries' },
    {
      path: "/groceries/:search?",
      name: "groceries",
      component: () => import("./views/Groceries.vue"),
    },
    {
      path: "/analysis",
      name: "analysis",
      component: () => import("./views/Analysis.vue")
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* webpackChunkName: "settings" */
      component: () => import("./views/Settings.vue")
    }
  ]
});
