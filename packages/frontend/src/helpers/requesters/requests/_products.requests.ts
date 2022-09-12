import { provider } from '@/helpers/requesters/_provider.requester';
import { RequestParamsType } from '@/helpers/types/requests-types/_request-params.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getAllProducts() {
  const res = await provider.axios.get(
    '/api/products?pagination[page]=1&pagination[pageSize]=100',
    { params: params },
  );
  return res.data;
}

export async function getProductsByCategory(id: number) {
  const res = await provider.axios.get(`/api/categories/${String(id)}`, {
    params: { populate: '*' },
  });
  return res.data;
}
