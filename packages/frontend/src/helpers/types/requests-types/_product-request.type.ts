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

export interface ProductByIdType {
  title: string;
  description: string;
  image: string;
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
}
