export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  cost: number;
  producer: string;
  details?: Array<string>;
  sale: number;
};

export interface ProductsPageStoreType {
  isLoading: boolean;
  dataState: Array<Product> | null | undefined;
  data: Array<Product> | null | undefined;
}

export interface ProductPageStoreType {
  isLoading: boolean;
  data: Product | null;
}
