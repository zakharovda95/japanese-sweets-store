import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

export function getPriceRangeValues(array: Array<Product>): Array<number> {
  const prices = array.map(item => item.cost);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
}
