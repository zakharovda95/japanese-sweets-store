import { RouteRecordRaw } from 'vue-router';

export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: 'sign-in',
    name: 'sign-in',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'sign-up',
    name: 'sign-up',
    component: () => import('@/pages/MainPage.vue'),
  },
];
