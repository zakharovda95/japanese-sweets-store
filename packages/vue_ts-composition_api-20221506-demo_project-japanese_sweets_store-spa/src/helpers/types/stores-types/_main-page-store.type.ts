export type MainPageImages = {
  mainCarousel: Array<string>;
  mostPopularProductsCarousel: Array<string>;
};

export interface MainPageStoreType {
  isLoading: boolean;
  images: MainPageImages;
}
