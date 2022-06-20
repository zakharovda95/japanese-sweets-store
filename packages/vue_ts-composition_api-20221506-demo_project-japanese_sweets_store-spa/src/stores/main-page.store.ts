import { defineStore } from 'pinia';
import {
  getMainPageCarouselImages,
  getMostPopularProductsCarouselImages,
} from '@/requesters/requester/_carousels.request';
import {
  MainPageCarouselType,
  MostPopularProductsCarouselType,
} from '@/types/requests-types/_carousel-requests.type';
import { MainPageStoreType } from '@/types/stores-types/_main-page-store.type';

export const useMainPageStore = defineStore('main', {
  state: () =>
    ({
      isLoading: true,
      images: {
        mainCarousel: [],
        mostPopularProductsCarousel: [],
      },
    } as MainPageStoreType),
  actions: {
    async getCarouselsImages() {
      const mainCarouselData: MainPageCarouselType = await getMainPageCarouselImages();
      this.images.mainCarousel = mainCarouselData.data.attributes.images.data;

      const mostPopularProductsCarouselData: MostPopularProductsCarouselType =
        await getMostPopularProductsCarouselImages();
      this.images.mostPopularProductsCarousel =
        mostPopularProductsCarouselData.data.attributes.images.data;
    },
  },
});
