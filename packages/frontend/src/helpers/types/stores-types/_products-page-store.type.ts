import { ReviewRequestType } from '@/helpers/types/requests-types/_request-params.type';

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

export interface ProductPageStoreType {
  isLoading: boolean;
  data: Product | null;
  images: string[] | null;
  reviewData: ReviewRequestType;
}
