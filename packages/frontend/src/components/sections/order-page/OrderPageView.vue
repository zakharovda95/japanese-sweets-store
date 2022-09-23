<template>
  <EmptyCart v-if="!store.data.userCart.length" />
  <div v-else class="order-page-view">
    <UIText>Your order</UIText>
    <ProductCartList no-edit />
    <OrderForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderPageView',
});
</script>

<script setup lang="ts">
import UIText from '@/components/ui/UIText.vue';
import OrderForm from '@/components/sections/order-page/OrderForm.vue';
import ProductCartList from '@/components/sections/common/ProductCartList.vue';
import EmptyCart from '@/components/sections/common/EmptyCart.vue';

import { useProductCartStore } from '@/stores/product-cart.store';

const store = useProductCartStore();
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .order-page-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    background: white;
  }
}

@media (min-width: 800px) and (max-width: 1019px) {
  .order-page-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    background: white;
  }
}

@media (min-width: 1020px) {
  .order-page-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    background: white;
  }
}
</style>
