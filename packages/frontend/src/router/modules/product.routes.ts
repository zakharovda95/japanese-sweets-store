import { RouteRecordRaw } from 'vue-router';
import { PageName } from '@/helpers/enums/_pages.enum';

export const ProductRoutes: Array<RouteRecordRaw> = [
  {
    path: 'product',
    name: PageName.product,
    redirect: { name: PageName.productById },
    component: () => import('@/pages/ProductPage.vue'),
    children: [
      {
        path: ':productId',
        name: PageName.productById,
        component: () => import('@/components/sections/product-page/ProductPageView.vue'),
        props: true,
      },
    ],
  },
];
