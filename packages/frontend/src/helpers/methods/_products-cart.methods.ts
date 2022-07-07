import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';

export function parseLocalStorageData(): CartProductType[] | null {
  const localStorageData: string | null = localStorage.getItem('user_cart');
  if (localStorageData && localStorageData !== 'null') {
    return JSON.parse(localStorageData);
  } else {
    return null;
  }
}

export function updateProductCart(
  userCart: CartProductType[],
  newValue: CartProductType,
): CartProductType[] {
  userCart.forEach((item, index, array) => {
    if (item.product?.id === newValue.product?.id) {
      if (newValue.amount) {
        item.amount = newValue.amount;
      } else {
        array.splice(index, 1);
      }
    } else {
      return false;
    }
  });
  return userCart;
}
