export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  coast: number;
  producer: string;
  details: Array<string>;
  sale: number | boolean;
};

export type Products = {
  candy: Array<Product>;
  snacks: Array<Product>;
  cookies: Array<Product>;
  chocolates: Array<Product>;
  food: Array<Product>;
};

export interface ProductPageStoreType {
  isLoading: boolean;
  data: Array<Product> | null;
}
