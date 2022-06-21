import { RouteRecordRaw } from 'vue-router';
// import { ProductRoutes } from '@/router/modules/products.routes';
import { AuthRoutes } from '@/router/modules/auth.routes';

export const MainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'products',
    name: 'products',
    redirect: { name: 'all' },
    component: () => import('@/pages/ProductsPage.vue'),
    // children: [...ProductRoutes],
  },
  {
    path: 'cart',
    name: 'cart',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'auth',
    name: 'auth',
    component: () => import('@/pages/MainPage.vue'),
    children: [...AuthRoutes],
  },
];
