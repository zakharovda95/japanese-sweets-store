import { defineStore } from 'pinia';
import { getProductById } from '@/helpers/requesters/requester/_product.requests';
import { formatProductDataForDisplaying } from '@/helpers/methods/_product.methods';
import { ProductPageStoreType } from '@/helpers/types/stores-types/_products-page-store.type';

export const useProductPageStore = defineStore('product', {
  state: () =>
    ({
      isLoading: true,
      data: null,
    } as ProductPageStoreType),
  actions: {
    async fetchData(id: string) {
      const res = await getProductById(id);
      this.data = formatProductDataForDisplaying(id, res);
      this.isLoading = false;
    },
  },
});
