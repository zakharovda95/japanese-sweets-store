import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';

export function parseLocalStorageData(): CartProductType[] | null {
  const localStorageData: string | null = localStorage.getItem('user_cart');
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return null;
  }
}
