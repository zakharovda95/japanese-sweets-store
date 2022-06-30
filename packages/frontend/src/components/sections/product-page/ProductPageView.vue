<template>
  <div class="product-view">
    <div class="content">
      <ProductCover class="cover" :product-image="product.image" />
      <div class="description-wrap">
        <UIText class="title">{{ product.title }}</UIText>
        <UIText tag="NH3" type="#ffff" class="description">{{ product.description }}</UIText>
        <ProductCost font-size="NH1" class="price" :cost="product.cost" :sale="product.sale" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductView',
});
</script>

<script setup lang="ts">
import ProductCover from '@/components/sections/product-page/ProductCover.vue';
import { useProductPageStore } from '@/stores/product-page.store';
import { computed } from 'vue';
import UIText from '@/components/ui/UIText.vue';
import ProductCost from '@/components/sections/common/ProductCost.vue';

const store = useProductPageStore();
const product = computed(() => store.data);
</script>

<style scoped lang="scss">
@media (min-width: 1400px) {
  .product-view {
    display: flex;
    justify-content: space-around;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      justify-content: space-around;
      .cover {
        margin-right: 20px;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
      }
    }
  }
}
</style>
