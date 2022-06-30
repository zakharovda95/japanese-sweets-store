<template>
  <div class="product-view">
    <div class="content">
      <ProductCover class="cover" :image="product.image" />
      <div class="description-wrap">
        <UIText align="left" class="title">{{ product.title }}</UIText>
        <NRate class="rate" />
        <UIText align="left" tag="NH3" type="#ffff" class="description">
          {{ product.description }}
        </UIText>
        <ProductCost font-size="NH1" class="price" :cost="product.cost" :sale="product.sale" />
        <AddToCart class="add" />
      </div>
    </div>
    <ProductTabPane :details="product.details" class="tab-pane" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductView',
});
</script>

<script setup lang="ts">
import ProductCover from '@/components/sections/common/ProductCover.vue';
import { useProductPageStore } from '@/stores/product-page.store';
import { computed } from 'vue';
import UIText from '@/components/ui/UIText.vue';
import ProductCost from '@/components/sections/common/ProductCost.vue';
import AddToCart from '@/components/sections/product-page/AddToCart.vue';
import { NRate } from 'naive-ui';
import ProductTabPane from '@/components/sections/product-page/ProductTabPane.vue';

const store = useProductPageStore();
const product = computed(() => store.data);
</script>

<style scoped lang="scss">
@media (min-width: 1400px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      justify-content: space-around;
      .cover {
        width: 25vw;
        height: 25vw;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        .rate {
          margin-bottom: 12px;
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
</style>
