<template>
  <div class="product-view">
    <RibbonMenu class="menu" />
    <FiltersPanel class="filters" v-if="!isLoading" />
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
import FiltersPanel from '@/components/sections/products-page/FiltersPanel.vue';
import { useProductsPageStore } from '@/stores/products-page.store';
import { computed } from 'vue';
const store = useProductsPageStore();
const isLoading = computed(() => store.isLoading);
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
      margin-top: 34px;
    }
  }
}
@media (min-width: 1019px) {
  .product-view {
    display: flex;
    flex-direction: column;
    .filters {
      position: fixed;
      z-index: 4;
      top: 165px;
      left: 3vw;
    }
  }
}
</style>
