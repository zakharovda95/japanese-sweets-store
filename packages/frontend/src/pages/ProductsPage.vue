<template>
  <div class="product-page">
    <ProductsView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsPage',
});
</script>

<script setup lang="ts">
import ProductsView from '@/components/sections/products-page/ProductsView.vue';
</script>

<style scoped lang="scss">
@media (max-width: 390px) {
  .product-page {
  }
}
@media (min-width: 799px) {
  .product-page {
    margin: 0 auto;
  }
}
@media (min-width: 1199px) {
  .product-page {
    margin: 0 auto;
  }
}
@media (min-width: 1399px) {
  .product-page {
    margin: 0 auto;
  }
}
</style>
