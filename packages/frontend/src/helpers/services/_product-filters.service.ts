import { SelectOptionsType } from '@/helpers/types/_products-filters.type';

import {
  ProductsFiltersOptionsLabels,
  ProductsFiltersOptionsValues,
} from '@/helpers/enums/products/_products-filters.enum';

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
