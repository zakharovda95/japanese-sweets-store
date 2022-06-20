import { defineStore } from 'pinia';
import { MainPageStoreType } from '@/types/stores-types/_main-page-store.type';
import { getMainPageCarousel } from '@/requesters/requester/_carousels.request';

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
      const mainCarouselData = await getMainPageCarousel();
      console.log(mainCarouselData);
    },
  },
});
