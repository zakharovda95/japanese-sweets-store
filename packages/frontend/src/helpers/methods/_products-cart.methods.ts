import {
  CartProductType,
  ProductCartDataType,
} from '@/helpers/types/stores-types/_product-cart-store.type';

export function parseLocalStorageData(): ProductCartDataType {
  const localStorageData: string | null = localStorage.getItem('user_cart');
  if (localStorageData && localStorageData !== 'null') {
    return JSON.parse(localStorageData);
  } else {
    return { userCart: [], totalCost: 0 };
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

export function calculateTotalCost(userCart: CartProductType[]) {
  let totalCost = 0;

  userCart.forEach(item => {
    if (item.product) {
      if (item.product.sale) {
        const total = item.amount * item.product.cost;
        const sale = total * (item.product.sale / 100);
        totalCost += total - sale;
      } else {
        totalCost += item.amount * item.product?.cost;
      }
    } else {
      totalCost = 0;
    }
  });
  return totalCost;
}
