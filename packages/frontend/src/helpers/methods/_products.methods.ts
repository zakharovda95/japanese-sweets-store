import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { ProductType } from '@/helpers/types/requests-types/_products-request.type';
import { CategoryProductType } from '@/helpers/types/requests-types/_categories-requests.type';

/** Форматирование данных из БД для отображения **/
export function formatProductsDataForDisplaying(
  productsArray: Array<ProductType> | Array<CategoryProductType>,
): Array<Product> {
  const arr = productsArray.map(product => {
    return {
      id: product.id,
      title: product.attributes.title,
      description: product.attributes.description,
      image: product.attributes.image,
      cost: product.attributes.cost,
      producer: product.attributes.producer,
      sale: product.attributes.sale,
    };
  });
  return Object.values(arr)
    .flat()
    .sort(() => Math.random() - 0.5);
}

export function getProductsOnSaleOnly(array: Array<Product>): Array<Product> {
  return array.filter(item => item.sale);
}

export function getCategoryId(category: string): number | null {
  switch (category) {
    case 'candy':
      return 1;
    case 'snacks':
      return 2;
    case 'cookies':
      return 3;
    case 'chocolates':
      return 4;
    case 'food':
      return 5;
    default:
      return null;
  }
}
