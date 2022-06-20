import { provider } from '@/requesters/_provider.requester';
import { RequestParamsType } from '@/types/_request-params.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getMainPageCarousel() {
  return await provider.axios.get('api/carousels/1', { params: params });
}
