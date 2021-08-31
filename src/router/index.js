import Vue from "vue";
import VueRouter from "vue-router";


import Home from "../views/Home.vue";

import About from "../views/About.vue";
import My from "../views/My.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/My",
    name: "My",
    component: My,
    // component: r=>require.ensure([],()=>r(require('@/views/My.vue')),demot),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
