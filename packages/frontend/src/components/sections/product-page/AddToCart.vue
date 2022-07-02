<template>
  <div class="add-to-cart">
    <NButton class="add" size="large" color="#ff69b4" @click="addToCart">ADD TO CART</NButton>
    <NInputNumber
      :min="1"
      :max="10"
      v-model:value="count"
      :default-value="1"
      bordered
      class="count"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddToCart',
});
</script>

<script setup lang="ts">
import { NButton, NInputNumber } from 'naive-ui';
import { ref, defineProps, PropType } from 'vue';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { useProductCartStore } from '@/stores/product-cart.store';
import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';
const count = ref<number>(1);
const props = defineProps({
  product: {
    type: Object as PropType<Product | null>,
    required: true,
  },
});
const store = useProductCartStore();
const addToCart = (): void => {
  const cartProduct: CartProductType = {
    product: props.product,
    amount: count.value,
  };
  store.addToCart(cartProduct);
};
</script>

<style scoped lang="scss">
.add-to-cart {
  display: flex;
  .add {
    margin-right: 8px;
  }
  .count {
    width: 80px;
    margin-top: 3px;
  }
}
</style>
