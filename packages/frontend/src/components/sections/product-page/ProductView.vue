<template>
  <div class="product-view">
    <div class="cover">
      <ProductCover :product-image="product.image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductView',
});
</script>

<script setup lang="ts">
import ProductCover from '@/components/sections/product-page/ProductCover.vue';
import { useProductPageStore } from '@/stores/product-page.store';
import { computed } from 'vue';

const store = useProductPageStore();
const product = computed(() => store.data);
</script>

<style scoped lang="scss">
@media (min-width: 1399px) {
  .product-view {
    display: flex;
    width: 60vw;
    align-items: center;
    justify-content: center;
    .cover {
    }
  }
}
</style>
