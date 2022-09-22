import { defineStore } from 'pinia';

import { getProductById, sendReview } from '@/helpers/requesters/requests/_product.requests';
import { formatProductDataForDisplaying } from '@/helpers/methods/_product.methods';
import { getRandomImagesForCarousel } from '@/helpers/requesters/requests/_carousels.requests';

import { reviewDataSchema } from '@/helpers/schemas/review-data.schema';

import { ProductPageStoreType } from '@/helpers/types/stores-types/_product-page-store.type';

import { cloneDeep } from 'lodash';

export const useProductPageStore = defineStore('product', {
  state: () =>
    ({
      isLoading: true,
      data: null,
      images: [],
      reviewData: cloneDeep(reviewDataSchema),
    } as ProductPageStoreType),

  actions: {
    async fetchData(id: number): Promise<void> {
      this.isLoading = true;
      const res = await getProductById(id);
      this.data = formatProductDataForDisplaying(id, res);
      if (this.data.category) {
        await this.getRandomImagesForCarousel(this.data.category);
      }
      this.isLoading = false;
    },

    async getRandomImagesForCarousel(category: string): Promise<void> {
      this.images = await getRandomImagesForCarousel(category);
    },

    async sendReview(): Promise<void> {
      try {
        await sendReview(this.reviewData);
        if (this.reviewData.product) {
          await this.fetchData(this.reviewData.product);
        }
        this.resetForm();
      } catch (err) {
        console.log(err);
      }
    },

    resetForm() {
      this.reviewData = cloneDeep(reviewDataSchema);
    },
  },
});
``;
