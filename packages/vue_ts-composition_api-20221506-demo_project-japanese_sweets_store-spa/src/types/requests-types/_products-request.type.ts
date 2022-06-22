export type ProductDetailType = {
  'id': number;
  'attributes': {
    'name': string;
    'createdAt': string;
    'updatedAt': string;
    'publishedAt': string;
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

export interface ProductAttributesType {
  title: string;
  description: string;
  image: string;
  cost: number;
  producer: string;
  sale: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category?: ProductCategoryType;
  details?: ProductDetailsType;
}

export interface ProductType {
  id: number;
  attributes: ProductAttributesType;
}

export interface AllProductsType {
  data: Array<ProductType>;
  meta: unknown;
}
