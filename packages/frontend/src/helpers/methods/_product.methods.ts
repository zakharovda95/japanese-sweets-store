import { ProductByIdType } from '@/helpers/types/requests-types/_product-request.type';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

export function formatProductDataForDisplaying(id: string, product: ProductByIdType): Product {
  console.log(product);
  return {
    id: +id,
    title: product.title,
    description: product.description,
    cost: product.cost,
    image: product.image,
    sale: product.sale,
    producer: product.producer,
    category: product.category.data.attributes.name,
    details: product.details.data.map(detail => detail.attributes.name),
    reviews: product.reviews.data.map(review => review.attributes.rate),
  };
}
