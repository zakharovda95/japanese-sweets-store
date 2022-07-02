import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

export type CartProductType = {
  product: Product | null;
  amount: number;
};

export interface ProductCartStoreType {
  userCart: Array<CartProductType> | [];
}
