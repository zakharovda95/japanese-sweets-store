import { RouteRecordRaw } from 'vue-router';
import { ProductsRoutes } from '@/router/modules/products.routes';
import { AuthRoutes } from '@/router/modules/auth.routes';
import { ProductRoutes } from '@/router/modules/product.routes';
import { PageName } from '@/helpers/enums/_pages.enum';

export const MainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.main,
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'products',
    name: PageName.goods,
    redirect: { name: 'all' },
    component: () => import('@/pages/ProductsPage.vue'),
    children: [...ProductsRoutes],
  },
  ...ProductRoutes,
  {
    path: 'cart',
    name: PageName.cart,
    component: () => import('@/pages/ProductCartPage.vue'),
  },
  {
    path: 'auth',
    name: PageName.auth,
    component: () => import('@/pages/AuthPage.vue'),
    children: [...AuthRoutes],
  },
];
