import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { ROUTE } from '@/constants/router.constant';

const routes = [
  {
    path: ROUTE.HOME.PATH,
    name: ROUTE.HOME.NAME,
    component: HomeView,
    meta: {
      keepAlive: false,
      reuse: false,
    },
  },
  {
    path: ROUTE.WRITE.PATH,
    name: ROUTE.WRITE.NAME,
    meta: {
      keepAlive: false,
      reuse: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoAdd.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
});

export default router;
