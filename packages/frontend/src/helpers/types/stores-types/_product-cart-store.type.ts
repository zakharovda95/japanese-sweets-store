import { OrderRequestType } from '@/helpers/types/requests-types/_request-params.type';

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
  orderData: OrderRequestType;
}

export interface ProductCartDataType {
  userCart: Array<CartProductType> | [] | null;
  totalCost: number;
}
