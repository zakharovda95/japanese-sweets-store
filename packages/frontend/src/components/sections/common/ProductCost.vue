<template>
  <div class="product-cost">
    <UIText v-if="typeof price === 'string'" class="full-price" type="primary" :tag="fontSize">
      {{ price }}
    </UIText>
    <div class="with-sale" v-if="typeof price === 'object'">
      <UIText strike :style="{ 'margin-right': '10px' }" type="error" :tag="fontSize">
        {{ price.fullPrice }}
      </UIText>
      <UIText class="full-price" type="primary" :tag="fontSize"> {{ price.afterSale }}</UIText>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCost',
});
</script>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import UIText from '@/components/ui/UIText.vue';
const props = defineProps({
  cost: {
    type: Number,
    required: true,
  },
  sale: {
    type: Number,
    required: true,
  },
  fontSize: {
    type: String,
    default: 'NH6',
  },
});
const price = computed<string | { [key: string]: string }>(() => {
  if (props.sale) {
    const priceAfterSale = (props.cost - props.cost * (props.sale / 100)).toFixed(2);
    return {
      fullPrice: `$ ${props.cost.toFixed(2)}`,
      afterSale: `$ ${priceAfterSale}`,
    };
  }
  return `$ ${props.cost}`;
});
</script>

<style scoped lang="scss">
.product-cost {
  flex-grow: 1;
  .with-sale {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-self: center;
  }
}
</style>
