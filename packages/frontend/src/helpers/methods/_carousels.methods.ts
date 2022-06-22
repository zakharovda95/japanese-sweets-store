import { ImageType } from '@/helpers/types/requests-types/_carousel-requests.type';
import { APP_CONFIG } from '@/helpers/services/_app-config.service';

export function formatImagesArrayForCarousel(imagesArray: Array<ImageType>): Array<string> {
  return imagesArray.map(image => APP_CONFIG.BACK_URL + image.attributes.url);
}
