<template>
  <div class="product-tab-pane">
    <NTabs style="font-size: 1.2rem" type="line" animated>
      <NTabPane tab="Details" name="details">
        <NList bordered>
          <NThing class="item" v-for="(detail, index) in details" :key="detail">
            {{ `${index + 1}) ${detail}` }}
          </NThing>
        </NList>
      </NTabPane>
      <NTabPane tab="Review" name="review">
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
import { defineProps, PropType } from 'vue';
import ProductReviewForm from '@/components/sections/product-page/ProductReviewForm.vue';
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
