import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { FiltersType, SelectOptionType } from '@/helpers/types/_products-filters.type';
import { sortBy } from 'lodash';

export function getPriceRangeValues(array: Array<Product>): Array<number> {
  const prices = array.map(item => item.cost);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
}

export function createOptionsForFilteringByBrand(array: Array<Product>): Array<SelectOptionType> {
  const set: Set<string> = new Set();
  const arr: Array<SelectOptionType> = [];
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

export function filterProducts(
  array: Array<Product>,
  filters: FiltersType,
): Array<Product> | undefined {
  console.log(filters);
  const onlySale = array.filter(item => {
    if (filters.onlySaleProducts) {
      return item.sale;
    } else {
      return item;
    }
  });
  const favoriteBrand = onlySale.filter(item => {
    if (filters.filterByBrand) {
      return item.producer === filters.filterByBrand;
    } else {
      return item;
    }
  });
  const priceRange = favoriteBrand.filter(item => {
    const min = filters.priceRange[0];
    const max = filters.priceRange[1];
    return item.cost >= min && item.cost <= max;
  });
  if (filters.sortByPrice) {
    let res: Array<Product> | [] = [];
    if (filters.sortByPrice === 'ascending') {
      res = sortBy(priceRange, 'cost');
    }
    if (filters.sortByPrice === 'descending') {
      res = sortBy(priceRange, 'cost').reverse();
    }
    return res;
  }
}
