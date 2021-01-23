import Vue from "vue";
import VueRouter from "vue-router";

import login from "@v/login/index.vue";
import Home from "@/Home/index.vue";
Vue.use(VueRouter);
import module from './modole'

export const currencyRoutes = [{
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: login,
    query:{
      type:'22'
    }
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/dashbord",
    children: module,
  },
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: currencyRoutes
});

export default router;