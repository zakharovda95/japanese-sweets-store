import { ProductByIdType } from '@/helpers/types/requests-types/_product-request.type';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { APP_CONFIG } from '@/helpers/services/_app-config.service';

export function formatProductDataForDisplaying(id: number, product: ProductByIdType): Product {
  return {
    id: id,
    title: product.title,
    description: product.description,
    cost: product.cost,
    image: APP_CONFIG.BACK_URL + product.image.data.attributes.url,
    sale: product.sale,
    producer: product.producer,
    category: product.category.data.attributes.name,
    details: product.details.data.map(detail => detail.attributes.name),
    reviews: product.reviews.data.map(review => ({
      nickname: review.attributes.userNickname,
      rate: review.attributes.rate,
      review: review.attributes.review,
    })),
  };
}
