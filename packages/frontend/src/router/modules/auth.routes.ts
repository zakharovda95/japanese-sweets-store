import { RouteRecordRaw } from 'vue-router';
import { PageName } from '@/helpers/enums/_pages.enum';

export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: 'sign-in',
    name: PageName.signin,
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'sign-up',
    name: PageName.signup,
    component: () => import('@/pages/MainPage.vue'),
  },
];
