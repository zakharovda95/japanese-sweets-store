export type SelectOptionType = {
  label: string;
  value: string;
};

export type SelectOptionsType = Array<SelectOptionType>;

export type FiltersType = {
  sortByPrice: null | string;
  priceRange: Array<number>;
  filterByBrand: null | string;
  onlySaleProducts: boolean;
};
