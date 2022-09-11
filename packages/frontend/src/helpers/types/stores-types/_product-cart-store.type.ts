export type CartProductInfoType = {
  id: number;
  title: string;
  cost: number;
  image: string;
  sale: number;
};

export type CartProductType = {
  product: CartProductInfoType | null;
  amount: number;
};

export interface ProductCartStoreType {
  data: ProductCartDataType;
}

export interface ProductCartDataType {
  userCart: Array<CartProductType> | [] | null;
  totalCost: number;
}
