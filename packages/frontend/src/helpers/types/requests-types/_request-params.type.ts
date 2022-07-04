/** Типизация основных квери параметров **/
export interface RequestParamsType {
  populate?: string;
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
}

export interface ReviewRequestType {
  userId?: null;
  userNickname?: string;
  review?: string;
  rate?: number;
  product: number | null;
}

export interface ReviewDataType {
  data: ReviewRequestType;
}
