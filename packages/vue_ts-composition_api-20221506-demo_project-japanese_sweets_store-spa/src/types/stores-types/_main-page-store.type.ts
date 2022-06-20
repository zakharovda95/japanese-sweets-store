import { ImageType } from '@/types/requests-types/_carousel-requests.type';

export type MainPageImages = {
  mainCarousel: Array<ImageType>;
  mostPopularProductsCarousel: Array<ImageType>;
};

export interface MainPageStoreType {
  isLoading: boolean;
  images: MainPageImages;
}
