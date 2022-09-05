import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';

export type ProductByIdDetailType = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type ProductByIdCategoryType = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type ProductReviewType = {
  id: number;
  attributes: {
    rate: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export interface ProductByIdType {
  title: string;
  description: string;
  image: { data: ImageType };
  cost: number;
  producer: string;
  sale: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: ProductByIdCategoryType;
  details: {
    data: Array<ProductByIdDetailType>;
  };
  reviews: {
    data: Array<ProductReviewType>;
  };
}
