export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  cost: number;
  producer: string;
  details?: Array<string>;
  reviews?: Array<number> | null;
  sale: number;
};

export interface ProductsPageStoreType {
  isLoading: boolean;
  dataState: Array<Product> | null | undefined;
  data: Array<Product> | null | undefined;
}

export type ReviewDataType = {
  rate: number;
  nickname: string;
  review: string;
};

export interface ProductPageStoreType {
  isLoading: boolean;
  data: Product | null;
  reviewData: ReviewDataType;
}
