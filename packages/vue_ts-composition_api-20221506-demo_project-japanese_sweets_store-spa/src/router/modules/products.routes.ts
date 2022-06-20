import { RouteRecordRaw } from 'vue-router';

export const ProductRoutes: Array<RouteRecordRaw> = [
  {
    path: 'all',
    name: 'all',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'candy',
    name: 'candy',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'snacks',
    name: 'snacks',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'cookies',
    name: 'cookies',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'chocolates',
    name: 'chocolates',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'food',
    name: 'food',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
  {
    path: 'sale',
    name: 'sale',
    component: () => import('@/components/sections/product-page/ProductList.vue'),
  },
];
