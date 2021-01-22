import Vue from "vue";
import VueRouter from "vue-router";

import login from "@v/login/index.vue";
import Home from "@/Home/index.vue";
Vue.use(VueRouter);
import module from './modole'
// module.forEach((item)=>{
//   item.query={t:Date.now()}
// })
// console.log(module)
export const currencyRoutes = [{
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/dashbord",
    children: module,

  },
];

// const creatRouter = () => {
//   return new VueRouter({
//     routes: currencyRoutes
//   });
// };
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: currencyRoutes
});

export default router;