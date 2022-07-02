import { defineStore } from 'pinia';
import {
  CartProductType,
  ProductCartStoreType,
} from '@/helpers/types/stores-types/_product-cart-store.type';

export const useProductCartStore = defineStore('cart', {
  state: () => ({
    userCart: [],
  }),
  actions: {
    addToCart(productCart: CartProductType) {
      this.userCart.push(productCart);
    },
  },
});
