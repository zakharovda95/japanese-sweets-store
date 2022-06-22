import { Product } from '@/types/stores-types/_products-page-store.type';
import { ProductType } from '@/types/requests-types/_products-request.type';
import { CategoryProductType } from '@/types/requests-types/_categories-requests.type';

/** Форматирование данных из БД для отображения **/
export function formatProductDataForDisplaying(
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
