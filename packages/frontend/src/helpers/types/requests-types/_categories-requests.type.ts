import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';

export type CategoryProductAttributeType = {
  title: string;
  description: string;
  image: { data: ImageType };
  cost: number;
  producer: string;
  sale: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CategoryProductType = {
  id: number;
  attributes: CategoryProductAttributeType;
};

export type CategoryAttributesType = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: {
    data: Array<CategoryProductType>;
  };
};

export type CategoryDataType = {
  id: number;
  attributes: CategoryAttributesType;
};

export interface CategoryType {
  data: CategoryDataType;
  meta: unknown;
}
