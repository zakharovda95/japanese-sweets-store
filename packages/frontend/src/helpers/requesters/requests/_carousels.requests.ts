import { provider } from '@/helpers/requesters/_provider.requester';
import { RequestParamsType } from '@/helpers/types/requests-types/_request-params.type';
import {
  MainPageCarouselType,
  MostPopularProductsCarouselType,
} from '@/helpers/types/requests-types/_carousel-requests.type';
import { getProductsByCategory } from '@/helpers/requesters/requests/_products.requests';
import { getCategoryId } from '@/helpers/methods/_products.methods';
import { CategoryType } from '@/helpers/types/requests-types/_categories-requests.type';
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

export async function getRandomImagesForCarousel(category: string): Promise<Array<string> | null> {
  const id = getCategoryId(category);
  if (id) {
    const res: CategoryType = await getProductsByCategory(id);
    const products = res.data.attributes.products.data;
    const urlArr = products.map(product => product.attributes.image);
    return urlArr.sort(() => 0.5 - Math.random()).slice(0, 5);
  } else {
    return null;
  }
}
