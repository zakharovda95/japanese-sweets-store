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

export interface ReviewDataType {
  data: ReviewRequestType;
}

export interface ReviewRequestType {
  userId?: null;
  userNickname?: string;
  review?: string;
  rate?: number;
  product: number | null;
}

export interface OrderDataType {
  data: OrderRequestType;
}

export interface OrderRequestType {
  userId: null;
  userNickname: string;
  email: string;
  address: string;
  totalCost: number | null;
  products: Array<number> | null;
}
