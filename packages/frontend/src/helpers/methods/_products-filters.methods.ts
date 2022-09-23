import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { FiltersType, SelectOptionType } from '@/helpers/types/_products-filters.type';

import ProductsFilter from '@/helpers/classes/products-filter.class';

export function getPriceRangeValues(array: Array<Product>): Array<number> {
  const prices = array.map(item => item.cost);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
}

export function createOptionsForFilteringByBrand(array: Array<Product>): Array<SelectOptionType> {
  const set: Set<string> = new Set();
  const arr: Array<SelectOptionType> = [{ label: 'All', value: 'All' }];

  array.forEach(product => {
    set.add(product.producer);
  });

  set.forEach(item => {
    const obj: SelectOptionType = {
      label: item,
      value: item,
    };
    arr.push(obj);
  });
  return arr;
}

export function filterProducts(array: Array<Product>, filters: FiltersType): Array<Product> {
  const instance = new ProductsFilter(array, filters);
  return instance.filterProducts();
}
