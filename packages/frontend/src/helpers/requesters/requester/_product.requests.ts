import { provider } from '@/helpers/requesters/_provider.requester';
import { RequestParamsType } from '@/helpers/types/requests-types/_request-params.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getProductById(id: string) {
  const res = await provider.axios.get(`/api/products/${id}`, { params: params });
  return res.data.data.attributes;
}
