export type CategoryProductAttributeType = {
  title: string;
  description: string;
  image: string;
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
