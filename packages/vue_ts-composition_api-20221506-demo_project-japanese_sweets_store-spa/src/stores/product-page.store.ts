import { defineStore } from 'pinia';
import { Product, ProductPageStoreType } from '@/types/stores-types/_products-page-store.type';
import { database } from '@/requesters/firebase/_firebase-database.requester';
import {
  fetchAndSortAllProducts,
  getPriceRangeValues,
  getProductsOnSaleOnly,
} from '@/services/_products.service';

export const useProductsPageStore = defineStore('products', {
  state: () =>
    ({
      isLoading: true,
      data: null,
    } as ProductPageStoreType),

  actions: {
    async fetchData(path: string): Promise<void> {
      if (path === '/') {
        this.data = await fetchAndSortAllProducts(path);
      } else {
        this.data = await database.getData(path);
      }
      this.isLoading = false;
    },
    async getSaleOnlyProducts(): Promise<void> {
      const allProducts: Array<Product> = await fetchAndSortAllProducts('/');
      this.data = getProductsOnSaleOnly(allProducts);
    },
  },

  getters: {
    minMaxPriceRangeValues(): Array<number> {
      if (this.data) {
        console.log(123);
        return getPriceRangeValues(this.data);
      } else {
        return [0, 1];
      }
    },
  },
});
