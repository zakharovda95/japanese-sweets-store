import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';

export interface ProductAttributesType {
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
}

export interface ProductDetailsType {
  data: Array<ProductDetailType>;
}

export interface ProductCategoryType {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface ProductDetailType {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface AllProductsType {
  data: Array<ProductType>;
  meta: unknown;
}
export interface ProductType {
  id: number;
  attributes: ProductAttributesType;
}
