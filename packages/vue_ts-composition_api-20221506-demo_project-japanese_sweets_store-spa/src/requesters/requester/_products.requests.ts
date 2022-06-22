import { provider } from '@/requesters/_provider.requester';
import { RequestParamsType } from '@/types/requests-types/_request-params.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getAllProducts() {
  const res = await provider.axios.get('/api/products?pagination[page]=1&pagination[pageSize]=100');
  return res.data;
}

export async function getProductsByCategory(id: string | number) {
  const res = await provider.axios.get(`/api/categories/${String(id)}`, { params: params });
  return res.data;
}
