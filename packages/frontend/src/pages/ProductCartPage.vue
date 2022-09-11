<template>
  <div class="product-cart-page">
    <ProductCartView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartPage',
});
</script>

<script setup lang="ts">
import ProductCartView from '@/components/sections/product-cart-page/ProductCartView.vue';

import { useProductCartStore } from '@/stores/product-cart.store';

import { onMounted } from 'vue';

const store = useProductCartStore();

onMounted(() => {
  store.getLocalStorageData();
});
</script>

<style scoped lang="scss">
@media (max-width: 499px) {
  .product-cart-page {
    display: flex;
    justify-content: center;
    width: 95vw;
    margin: 0 auto;
  }
}
@media (min-width: 500px) and (max-width: 799px) {
  .product-cart-page {
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
  }
}
@media (min-width: 800px) and (max-width: 1399px) {
  .product-cart-page {
    display: flex;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
  }
}
@media (min-width: 1400px) {
  .product-cart-page {
    display: flex;
    justify-content: center;
    width: 60vw;
    margin: 0 auto;
  }
}
</style>
