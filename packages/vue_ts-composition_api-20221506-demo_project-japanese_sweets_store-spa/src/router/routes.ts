import { RouteRecordRaw } from 'vue-router';
import { MainRoutes } from '@/router/modules/main.routes';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'index',
    redirect: { name: 'main' },
    component: () => import('@/layouts/MainLayout.vue'),
    children: [...MainRoutes],
  },
];
