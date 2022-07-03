import { defineStore } from 'pinia';
import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';

export const useProductCartStore = defineStore('cart', {
  state: () => ({
    userCart: [] as CartProductType[],
  }),
  actions: {
    addToCart(productCart: CartProductType): void {
      if (this.userCart.length && productCart) {
        const elem = this.userCart.find(elem => {
          return elem.product?.id === productCart.product?.id;
        });
        if (elem) {
          elem.amount += productCart.amount;
        } else {
          this.userCart.push(productCart);
        }
      } else {
        this.userCart.push(productCart);
      }
      localStorage.setItem('user_cart', JSON.stringify(this.userCart));
    },
  },
});
