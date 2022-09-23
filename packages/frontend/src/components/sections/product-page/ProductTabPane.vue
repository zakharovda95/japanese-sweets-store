<template>
  <div class="product-tab-pane">
    <NTabs style="font-size: 1.2rem" type="line" animated>
      <NTabPane tab="Details" name="details">
        <NList bordered>
          <NThing class="item" v-for="detail in details" :key="detail">
            {{ `&#9733; ${detail}` }}
          </NThing>
        </NList>
      </NTabPane>
      <NTabPane tab="Reviews" name="reviews">
        <ReviewList class="review-list" />
      </NTabPane>
      <NTabPane tab="Write a review" name="review">
        <ProductReviewForm class="form" />
      </NTabPane>
    </NTabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductTabPane',
});
</script>

<script setup lang="ts">
import { NTabs, NTabPane, NList, NThing } from 'naive-ui';
import ProductReviewForm from '@/components/sections/product-page/ProductReviewForm.vue';
import ReviewList from '@/components/sections/product-page/ReviewsList.vue';

import { defineProps, PropType } from 'vue';

defineProps({
  details: {
    type: Array as PropType<Array<string> | []>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .item {
    font-size: 1.1rem;
  }
  .form {
    width: 95%;
  }
}

@media (min-width: 800px) {
  .item {
    font-size: 1.1rem;
  }
  .form {
    width: 70%;
  }
}
</style>
