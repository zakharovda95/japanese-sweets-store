import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';

export type ProductDetailType = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type ProductDetailsType = {
  data: Array<ProductDetailType>;
};

export type ProductCategoryType = {
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

export type ProductType = {
  id: number;
  attributes: ProductAttributesType;
};

export interface AllProductsType {
  data: Array<ProductType>;
  meta: unknown;
}

export type ProductAttributesType = {
  title: string;
  description: string;
  image: { data: ImageType };
  cost: number;
  producer: string;
  sale: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category?: ProductCategoryType;
  details?: ProductDetailsType;
};
