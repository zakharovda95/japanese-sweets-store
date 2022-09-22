import { defineStore } from 'pinia';

import {
  getMainPageCarouselImages,
  getMostPopularProductsCarouselImages,
} from '@/helpers/requesters/requests/_carousels.requests';
import { formatImagesArrayForCarousel } from '@/helpers/methods/_carousels.methods';

import {
  ImageType,
  MainPageCarouselType,
  MostPopularProductsCarouselType,
} from '@/helpers/types/requests-types/_carousel-requests.type';
import { MainPageStoreType } from '@/helpers/types/stores-types/_main-page-store.type';

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
      const mainCarouselImagesArray: Array<ImageType> =
        mainCarouselData.data.attributes.images.data;
      this.images.mainCarousel = formatImagesArrayForCarousel(mainCarouselImagesArray);

      const mostPopularProductsCarouselData: MostPopularProductsCarouselType =
        await getMostPopularProductsCarouselImages();
      const mostPopularProductsCarouselImagesArray: Array<ImageType> =
        mostPopularProductsCarouselData.data.attributes.images.data;
      this.images.mostPopularProductsCarousel = formatImagesArrayForCarousel(
        mostPopularProductsCarouselImagesArray,
      );
      this.isLoading = false;
    },
  },
});
