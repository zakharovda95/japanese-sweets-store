<template>
  <div class="product-page">
    <ProductsPageView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsPage',
});
</script>

<script setup lang="ts">
import ProductsPageView from '@/components/sections/products-page/ProductsPageView.vue';
</script>

<style scoped lang="scss">
@media (max-width: 399px) {
  .product-page {
    margin: 0 auto;
  }
}

@media (min-width: 400px) and (max-width: 1199px) {
  .product-page {
    margin: 0 auto;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .product-page {
    margin: 0 auto;
  }
}

@media (min-width: 1400px) {
  .product-page {
    margin: 0 auto;
  }
}
</style>
