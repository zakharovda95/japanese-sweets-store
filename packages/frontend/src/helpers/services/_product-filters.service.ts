import { FiltersType, SelectOptionsType } from '@/helpers/types/_products-filters.type';
import {
  ProductsFiltersOptionsLabels,
  ProductsFiltersOptionsValues,
} from '@/helpers/enums/_product-filters.enum';

export const sortingByPriceOptions: SelectOptionsType = [
  {
    label: ProductsFiltersOptionsLabels.ascending,
    value: ProductsFiltersOptionsValues.ascending,
  },
  {
    label: ProductsFiltersOptionsLabels.descending,
    value: ProductsFiltersOptionsValues.descending,
  },
];

export const filtersSchema: FiltersType = {
  sortByPrice: null,
  priceRange: [0, 1],
  filterByBrand: null,
  onlySaleProducts: false,
};
