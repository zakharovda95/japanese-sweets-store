import { defineStore } from 'pinia';
import { getProductById, sendReview } from '@/helpers/requesters/requests/_product.requests';
import { formatProductDataForDisplaying } from '@/helpers/methods/_product.methods';
import { ProductPageStoreType } from '@/helpers/types/stores-types/_products-page-store.type';
export const useProductPageStore = defineStore('product', {
  state: () =>
    ({
      isLoading: true,
      data: null,
      reviewData: {
        userId: null,
        userNickname: '',
        review: '',
        rate: 0,
        product: null,
      },
    } as ProductPageStoreType),
  actions: {
    async fetchData(id: string): Promise<void> {
      this.isLoading = true;
      const res = await getProductById(id);
      this.data = formatProductDataForDisplaying(id, res);
      this.isLoading = false;
    },
    async sendReview(): Promise<void> {
      try {
        await sendReview(this.reviewData);
        await this.fetchData(String(this.reviewData.product));
        this.resetForm();
      } catch (err) {
        console.log(err);
      }
    },
    resetForm() {
      this.reviewData = {
        userId: null,
        userNickname: '',
        review: '',
        rate: 0,
        product: null,
      };
    },
  },
});
``;
