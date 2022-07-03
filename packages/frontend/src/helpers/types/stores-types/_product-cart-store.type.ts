export type CartProductInfoType = {
  id: number;
  title: string;
  cost: number;
  sale: number;
};

export type CartProductType = {
  product: CartProductInfoType | null;
  amount: number;
};

export interface ProductCartStoreType {
  userCart: Array<CartProductType> | [];
}
