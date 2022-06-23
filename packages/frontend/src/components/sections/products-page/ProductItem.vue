<template>
  <NCard hoverable>
    <div class="cover" :style="cover" />
    <div class="title">
      <UIText class="title" tag="NH6">{{ product.title }}</UIText>
    </div>
    <div class="cost">
      <UIText type="primary" tag="NH4"> {{ cost }}</UIText>
    </div>
  </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductItem',
});
</script>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import { computed, defineProps, PropType } from 'vue';
import UIText from '@/components/ui/UIText.vue';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    default: () => ({}),
  },
});
const cover = computed<{ [key: string]: string }>(() => {
  return {
    'background-image': `url(${props.product.image})`,
    'background-size': 'cover',
    'background-position': 'center',
  };
});
const cost = computed<string>(() => {
  if (props.product.sale) {
    const priceAfterSale = (
      props.product.cost -
      props.product.cost * (props.product.sale / 100)
    ).toFixed(2);
    return `$ ${props.product.cost} $ ${priceAfterSale}`;
  }
  return `$ ${props.product.cost}`;
});
</script>

<style scoped lang="scss">
@media (max-width: 769px) {
  .n-card {
    width: 100vw;
    height: 100vw;
    cursor: pointer;
  }
}
@media (max-width: 1199px) {
  .card {
    cursor: pointer;
    width: 280px;
    height: 300px;
  }
}
@media (min-width: 1200px) {
  .n-card {
    display: flex;
    cursor: pointer;
    width: 260px;
    height: 320px;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100%;
      height: 25%;
    }
    .cost {
      height: 10%;
      flex-grow: 1;
    }
  }
}
</style>
