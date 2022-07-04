import { defineStore } from 'pinia';
import { ProductsPageStoreType } from '@/helpers/types/stores-types/_products-page-store.type';
import {
  getAllProducts,
  getProductsByCategory,
} from '@/helpers/requesters/requests/_products.requests';
import {
  AllProductsType,
  ProductType,
} from '@/helpers/types/requests-types/_products-request.type';
import {
  formatProductsDataForDisplaying,
  getProductsOnSaleOnly,
} from '@/helpers/methods/_products.methods';
import {
  CategoryProductType,
  CategoryType,
} from '@/helpers/types/requests-types/_categories-requests.type';
import { FiltersType } from '@/helpers/types/_products-filters.type';
import { filterProducts } from '@/helpers/methods/_products-filters.methods';
import { cloneDeep } from 'lodash';

export const useProductsPageStore = defineStore('products', {
  state: () =>
    ({
      isLoading: false,
      dataState: null,
      data: null,
    } as ProductsPageStoreType),

  actions: {
    async getAllProducts() {
      this.isLoading = true;
      const res: AllProductsType = await getAllProducts();
      const productsArray: Array<ProductType> = res.data;
      this.data = formatProductsDataForDisplaying(productsArray);
      this.dataState = cloneDeep(this.data);
      this.isLoading = false;
    },
    async getProductsByCategory(id: string | number) {
      this.isLoading = true;
      const res: CategoryType = await getProductsByCategory(id);
      const productsArray: Array<CategoryProductType> = res.data.attributes.products.data;
      this.data = formatProductsDataForDisplaying(productsArray);
      this.dataState = cloneDeep(this.data);
      this.isLoading = false;
    },
    async getProductsOnSaleOnly() {
      await this.getAllProducts();
      if (this.data) {
        this.data = getProductsOnSaleOnly(this.data);
        this.dataState = cloneDeep(this.data);
      }
    },
    filterProducts(filters: FiltersType) {
      if (this.dataState) {
        this.data = filterProducts(this.dataState, filters);
      }
    },
  },
});
