<template>
  <div class="order-page">
    <OrderPageView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'OrderPage',
});
</script>

<script setup lang="ts">
import OrderPageView from '@/components/sections/order-page/OrderPageView.vue';

import { useProductCartStore } from '@/stores/product-cart.store';

import { onMounted } from 'vue';

const store = useProductCartStore();

onMounted(() => {
  store.getLocalStorageData();
});
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .order-page {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
}

@media (min-width: 800px) and (max-width: 1019px) {
  .order-page {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
}

@media (min-width: 1020px) {
  .order-page {
    display: flex;
    justify-content: center;
    margin-top: 36px;
  }
}
</style>
