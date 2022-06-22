import { defineStore } from 'pinia';
import { ProductPageStoreType } from '@/types/stores-types/_products-page-store.type';
import { getAllProducts, getProductsByCategory } from '@/requesters/requester/_products.requests';
import { AllProductsType, ProductType } from '@/types/requests-types/_products-request.type';
import { formatProductDataForDisplaying } from '@/helpers/methods/_products.methods';

export const useProductsPageStore = defineStore('products', {
  state: () =>
    ({
      isLoading: true,
      data: null,
    } as ProductPageStoreType),

  actions: {
    async getAllProducts() {
      const res: AllProductsType = await getAllProducts();
      const productsArray: Array<ProductType> = res.data;
      this.data = formatProductDataForDisplaying(productsArray);
    },
    async getProductsByCategory(id: string | number) {
      const res = await getProductsByCategory(id);
    },
  },

  getters: {},
});
