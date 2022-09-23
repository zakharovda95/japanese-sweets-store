import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { FiltersType } from '@/helpers/types/_products-filters.type';

import { sortBy } from 'lodash';

export default class ProductsFilter {
  private readonly array: Product[];
  private filters: FiltersType;
  private result: Product[];

  constructor(array: Product[], filters: FiltersType) {
    this.array = array;
    this.filters = filters;
    this.result = this.array;
  }

  private filterProductByOnlySale() {
    this.result = this.result.filter(item => (this.filters.onlySaleProducts ? item.sale : item));
  }

  private filterProductsByFavoriteBrand() {
    this.result = this.result.filter(item => {
      if (this.filters.filterByBrand !== 'All') {
        return item.producer === this.filters.filterByBrand;
      } else {
        return item;
      }
    });
  }

  private filterProductsByPriceRange() {
    this.result = this.result.filter(
      item => item.cost >= this.filters.priceRange[0] && item.cost <= this.filters.priceRange[1],
    );
  }

  private sortByPriceAndGetProducts() {
    if (this.filters.sortByPrice === 'ascending') {
      this.result = sortBy(this.result, 'cost');
    }
    if (this.filters.sortByPrice === 'descending') {
      this.result = sortBy(this.result, 'cost').reverse();
    }
  }

  public filterProducts() {
    if (this.filters.onlySaleProducts) {
      this.filterProductByOnlySale();
    }

    if (this.filters.filterByBrand) {
      this.filterProductsByFavoriteBrand();
    }

    if (this.filters.sortByPrice) {
      this.sortByPriceAndGetProducts();
    }

    this.filterProductsByPriceRange();

    return this.result;
  }
}
