export interface MainPageCarouselType {
  data: {
    id: number;
    attributes: AttributesType;
  };
  meta: unknown;
}

export type MostPopularProductsCarouselType = MainPageCarouselType;

export interface AttributesType {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  images: ImagesType;
}

export type ImagesType = {
  data: Array<ImageType>;
};

export type ImageType = {
  id: number;
  attributes: ImageAttributesType;
};

export interface ImageAttributesType {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormatsType;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | unknown;
  createdAt: string;
  updatedAt: string;
}

export interface ImageFormatsType {
  thumbnail: ImageFormatType;
  large: ImageFormatType;
  medium: ImageFormatType;
  small: ImageFormatType;
}

export interface ImageFormatType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  url: string;
}
