import {
  OrderRequestType,
  OrderDataType,
} from '@/helpers/types/requests-types/_request-params.type';

import { provider } from '@/helpers/requesters/_provider.requester';

export async function sendOrderData(params: OrderRequestType) {
  const data: OrderDataType = {
    data: {
      userId: null,
      userNickname: params.userNickname,
      email: params.email,
      address: params.address,
      totalCost: params.totalCost,
      products: params.products,
    },
  };
  await provider.axios.post('/api/orders', data);
}
