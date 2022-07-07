<template>
  <div class="product-cart-item">
    <ProductCover class="cover" :image="cloneItem.product.image" />
    <UIText class="title" tag="NH2">{{ cloneItem.product.title }}</UIText>
    <NInputNumber
      :min="0"
      :max="10"
      :value="cloneItem.amount"
      @update:value="$emit('custom:updateItem', $event)"
      bordered
      class="count"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartItem',
});
</script>

<script setup lang="ts">
import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';
import { PropType, defineProps, computed, defineEmits } from 'vue';
import ProductCover from '@/components/sections/common/ProductCover.vue';
import UIText from '@/components/ui/UIText.vue';
import { NInputNumber } from 'naive-ui';
import { cloneDeep } from 'lodash';

defineEmits(['custom:updateItem']);

const props = defineProps({
  item: {
    type: Object as PropType<CartProductType>,
    required: false,
    default: () => ({}),
  },
});
const cloneItem = computed(() => cloneDeep(props.item));
</script>

<style scoped lang="scss">
@media (max-width: 499px) {
}
@media (min-width: 500px) and (max-width: 799px) {
}
@media (min-width: 800px) and (max-width: 1019px) {
}
@media (min-width: 1020px) and (max-width: 1399px) {
  .product-cart-item {
    display: flex;
    .cover {
      width: 100px;
      height: 100px;
    }
    .title {
      vertical-align: center;
    }
  }
}
@media (min-width: 1400px) {
  .product-cart-item {
    display: flex;
    .cover {
      width: 100px;
      height: 100px;
    }
    .title {
      vertical-align: center;
    }
  }
}
</style>
