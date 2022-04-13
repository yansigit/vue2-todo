import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { ROUTE } from '@/constants/router.constant';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: ROUTE.HOME.PATH,
    name: ROUTE.HOME.NAME,
    component: HomeView,
  },
  {
    path: ROUTE.WRITE.PATH,
    name: ROUTE.WRITE.NAME,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoAdd.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
