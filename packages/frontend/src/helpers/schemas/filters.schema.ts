import { FiltersType } from '@/helpers/types/_products-filters.type';

export const filtersSchema: FiltersType = {
  sortByPrice: null,
  priceRange: [0, 1],
  filterByBrand: null,
  onlySaleProducts: false,
};
