import { RouteRecordRaw } from 'vue-router';
import { PageName } from '@/helpers/enums/_pages.enum';

export const ProductsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'all',
    name: PageName.all,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'candy',
    name: PageName.candy,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'snacks',
    name: PageName.snacks,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'cookies',
    name: PageName.cookies,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'chocolates',
    name: PageName.chocolates,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'food',
    name: PageName.food,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
  {
    path: 'sale',
    name: PageName.sale,
    component: () => import('@/components/sections/products-page/ProductList.vue'),
  },
];
