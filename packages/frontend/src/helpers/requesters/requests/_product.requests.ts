import { provider } from '@/helpers/requesters/_provider.requester';

import {
  RequestParamsType,
  ReviewRequestType,
  ReviewDataType,
} from '@/helpers/types/requests-types/_request-params.type';

const params: RequestParamsType = {
  populate: '*',
};

export async function getProductById(id: number) {
  const res = await provider.axios.get(`/api/products/${id}`, { params: params });
  return res.data.data.attributes;
}

export async function sendReview(params: ReviewRequestType) {
  const data: ReviewDataType = {
    data: {
      userId: null,
      userNickname: params.userNickname,
      review: params.review,
      rate: params.rate,
      product: params.product,
    },
  };
  await provider.axios.post('/api/reviews', data);
}
