import { Product } from '@/types/stores-types/_products-page-store.type';
import { ProductType } from '@/types/requests-types/_products-request.type';

export function formatProductDataForDisplaying(productsArray: Array<ProductType>): Array<Product> {
  return productsArray.map(product => {
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
}
