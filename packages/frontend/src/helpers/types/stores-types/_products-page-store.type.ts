export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  type?: string;
  cost: number;
  producer: string;
  details?: Array<string>;
  sale: number;
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
