import { ReviewRequestType } from '@/helpers/types/requests-types/_request-params.type';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

export interface ProductPageStoreType {
  isLoading: boolean;
  data: Product | null;
  images: string[] | null;
  reviewData: ReviewRequestType;
}
