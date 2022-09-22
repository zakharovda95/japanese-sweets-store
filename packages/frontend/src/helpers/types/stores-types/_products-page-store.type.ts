export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  cost: number;
  producer: string;
  details?: Array<string>;
  reviews?: ReviewType[] | null;
  sale: number;
};

export interface ReviewType {
  nickname: string;
  review: string;
  rate: number;
}

export interface ProductsPageStoreType {
  isLoading: boolean;
  dataState: Array<Product> | null | undefined;
  data: Array<Product> | null | undefined;
}
