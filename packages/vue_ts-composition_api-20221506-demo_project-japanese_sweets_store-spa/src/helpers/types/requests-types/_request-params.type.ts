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
