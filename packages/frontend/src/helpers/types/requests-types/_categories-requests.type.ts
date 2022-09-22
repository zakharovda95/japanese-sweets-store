import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';

export interface CategoryType {
  data: CategoryDataType;
  meta: unknown;
}

export interface CategoryDataType {
  id: number;
  attributes: CategoryAttributesType;
}

export interface CategoryAttributesType {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: {
    data: Array<CategoryProductType>;
  };
}

export interface CategoryProductType {
  id: number;
  attributes: CategoryProductAttributeType;
}

export interface CategoryProductAttributeType {
  title: string;
  description: string;
  image: { data: ImageType };
  cost: number;
  producer: string;
  sale: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
