<template>
  <div class="review-list">
    <NList>
      <NThing v-if="!reviews.length">
        <p>No reviews :( You can write one!</p>
      </NThing>
      <NThing v-else v-for="review in reviews" :key="review.review">
        <p>nickname: {{ review.nickname }}</p>
        <p>rate: {{ review.rate }}</p>
        <p>review: {{ review.review }}</p>
        <br />
      </NThing>
    </NList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReviewList',
});
</script>

<script setup lang="ts">
import { NList, NThing } from 'naive-ui';

import { useProductPageStore } from '@/stores/product-page.store';
import { computed } from 'vue';

const store = useProductPageStore();

const reviews = computed(() => {
  if (store.data) {
    return store.data.reviews;
  }
  return null;
});
</script>

<style scoped lang="scss">
.review-list {
}
</style>
