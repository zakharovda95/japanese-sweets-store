import { defineStore } from 'pinia';

import {
  CartProductType,
  ProductCartStoreType,
} from '@/helpers/types/stores-types/_product-cart-store.type';

import {
  calculateTotalCost,
  parseLocalStorageData,
  updateProductCart,
} from '@/helpers/methods/_products-cart.methods';
import { sendOrderData } from '@/helpers/requesters/requests/_order.requests';
import { orderDataSchema } from '@/helpers/schemas/order-data.schema';

import { cloneDeep } from 'lodash';

export const useProductCartStore = defineStore('cart', {
  state: () =>
    ({
      data: {
        userCart: [],
        totalCost: 0,
      },
      orderData: cloneDeep(orderDataSchema),
    } as ProductCartStoreType),
  actions: {
    addToCart(productCart: CartProductType): void {
      if (this.data.userCart) {
        if (this.data.userCart.length && productCart) {
          const elem = this.data.userCart.find(elem => {
            return elem.product?.id === productCart.product?.id;
          });
          if (elem && this.data.userCart.length) {
            elem.amount += productCart.amount;
            this.calculateTotalCost();
            localStorage.setItem('user_cart', JSON.stringify(this.data));
          } else {
            this.data.userCart.push(productCart as never);
            this.calculateTotalCost();
            localStorage.setItem('user_cart', JSON.stringify(this.data));
          }
        } else {
          this.data.userCart.push(productCart as never);
          this.calculateTotalCost();
          localStorage.setItem('user_cart', JSON.stringify(this.data));
        }
      } else {
        this.data.userCart = [];
        this.data.userCart.push(productCart as never);
        this.calculateTotalCost();
        localStorage.setItem('user_cart', JSON.stringify(this.data));
      }
    },

    getLocalStorageData(): void {
      this.data = parseLocalStorageData();
    },

    updateUserCart(product: CartProductType): void {
      if (this.data.userCart && product) {
        this.data.userCart = updateProductCart(this.data.userCart, product);
        this.calculateTotalCost();
        if (this.data.userCart && this.data.userCart.length) {
          localStorage.setItem('user_cart', JSON.stringify(this.data));
        }
        if (!this.data.userCart || !this.data.userCart.length) {
          localStorage.removeItem('user_cart');
        }
      }
    },

    calculateTotalCost(): void {
      if (this.data.userCart) {
        this.data.totalCost = calculateTotalCost(this.data.userCart);
      }
    },

    resetForm() {
      this.orderData = cloneDeep(orderDataSchema);
    },

    setOrderDataBeforeSending() {
      if (this.data.userCart) {
        const products = this.data.userCart.map(item => {
          return item.product!.id;
        });
        this.orderData.totalCost = +this.data.totalCost.toFixed(2);
        this.orderData.products = products;
      }
    },

    async sendOrder() {
      try {
        this.setOrderDataBeforeSending();
        await sendOrderData(this.orderData);
        this.resetForm();
        localStorage.removeItem('user_cart');
      } catch (err) {
        console.log(err);
      }
    },
  },
});
