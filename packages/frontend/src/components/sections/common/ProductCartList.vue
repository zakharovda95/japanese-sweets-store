<template>
  <div class="product-cart-list">
    <NTable bordered>
      <thead v-if="!noEdit">
        <tr>
          <th>
            <UIText tag="NH3">Please, check your order!</UIText>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userCart" :key="item.product.id">
          <td>
            <ProductCartItem @custom:update-item="updateItem" :no-edit="noEdit" :item="item" />
          </td>
        </tr>
        <tr>
          <td>
            <UIText tag="NH3">Total: $ {{ store.data.totalCost.toFixed(2) }}</UIText>
          </td>
        </tr>
      </tbody>
    </NTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartList',
});
</script>

<script setup lang="ts">
import UIText from '@/components/ui/UIText.vue';
import ProductCartItem from '@/components/sections/product-cart-page/ProductCartItem.vue';
import { NTable } from 'naive-ui';

import { useProductCartStore } from '@/stores/product-cart.store';
import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';

import { computed, defineProps } from 'vue';

defineProps({
  noEdit: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const store = useProductCartStore();

const userCart = computed(() => store.data.userCart);

const updateItem = (e: CartProductType): void => {
  store.updateUserCart(e);
};
</script>

<style scoped lang="scss">
.product-cart-list {
  display: flex;
  flex-direction: column;
  width: 60vw;
}
</style>
