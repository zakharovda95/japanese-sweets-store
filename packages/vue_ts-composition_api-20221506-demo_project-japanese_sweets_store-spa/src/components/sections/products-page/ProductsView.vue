<template>
  <div class="product-view">
    <RibbonMenu class="menu" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsView',
});
</script>

<script setup lang="ts">
import RibbonMenu from '@/components/sections/products-page/RibbonMenu.vue';
</script>

<style scoped lang="scss">
@media (max-width: 390px) {
  .product-view {
    margin: 0 auto;
    width: 95vw;
  }
}
@media (max-width: 768px) {
  .product-view {
    margin: 0 auto;
    width: 80vw;
  }
}
@media (min-width: 769px) {
  .product-view {
    margin: 0 auto;
    width: 63vw;
    .menu {
      padding: 10px;
    }
  }
}
</style>
