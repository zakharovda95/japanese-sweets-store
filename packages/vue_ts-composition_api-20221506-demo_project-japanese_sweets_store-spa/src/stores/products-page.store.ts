import { defineStore } from 'pinia';
import { ProductPageStoreType } from '@/types/stores-types/_products-page-store.type';
import { getAllProducts, getProductsByCategory } from '@/requesters/requester/_products.requests';
import { AllProductsType, ProductType } from '@/types/requests-types/_products-request.type';
import {
  formatProductDataForDisplaying,
  getProductsOnSaleOnly,
} from '@/helpers/methods/_products.methods';
import {
  CategoryProductType,
  CategoryType,
} from '@/types/requests-types/_categories-requests.type';

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
      this.isLoading = false;
    },
    async getProductsByCategory(id: string | number) {
      const res: CategoryType = await getProductsByCategory(id);
      const productsArray: Array<CategoryProductType> = res.data.attributes.products.data;
      this.data = formatProductDataForDisplaying(productsArray);
      this.isLoading = false;
    },
    async getProductsOnSaleOnly() {
      await this.getAllProducts();
      if (this.data) {
        this.data = getProductsOnSaleOnly(this.data);
      }
    },
  },
});
