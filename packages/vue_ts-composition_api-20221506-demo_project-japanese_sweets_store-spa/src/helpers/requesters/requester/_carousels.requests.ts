import { provider } from '@/helpers/requesters/_provider.requester';
import { RequestParamsType } from '@/helpers/types/requests-types/_request-params.type';
import {
  MainPageCarouselType,
  MostPopularProductsCarouselType,
} from '@/helpers/types/requests-types/_carousel-requests.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getMainPageCarouselImages(): Promise<MainPageCarouselType> {
  const res = await provider.axios.get('api/carousels/1', { params: params });
  return res.data;
}

export async function getMostPopularProductsCarouselImages(): Promise<MostPopularProductsCarouselType> {
  const res = await provider.axios.get('api/carousels/2', { params: params });
  return res.data;
}
