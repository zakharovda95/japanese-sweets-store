import { ReviewRequestType } from '@/helpers/types/requests-types/_request-params.type';

export const reviewDataSchema: ReviewRequestType = {
  userId: null,
  userNickname: '',
  review: '',
  rate: 0,
  product: null,
};
