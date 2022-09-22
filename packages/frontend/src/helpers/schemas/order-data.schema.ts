import { OrderRequestType } from '@/helpers/types/requests-types/_request-params.type';

export const orderDataSchema: OrderRequestType = {
  userId: null,
  userNickname: '',
  email: '',
  address: '',
  totalCost: 0,
  products: [],
};
