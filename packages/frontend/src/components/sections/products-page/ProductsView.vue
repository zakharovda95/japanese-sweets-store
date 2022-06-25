<template>
  <div class="product-view">
    <div class="menu">
      <RibbonMenu class="ribbon-menu" />
    </div>
    <div class="content">
      <FiltersPanel class="filters" v-if="!isLoading" />
      <router-view />
    </div>
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
@media (min-width: 799px) {
  .product-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu {
      margin-top: 34px;
      .ribbon-menu {
        margin: 0 auto;
      }
    }
    .content {
      display: flex;
      margin-top: 24px;
      .filters {
        align-self: flex-start;
        margin-top: 5px;
      }
    }
  }
}
@media (min-width: 1199px) {
  .product-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu {
      margin-top: 34px;
      .ribbon-menu {
        margin: 0 auto;
      }
    }
    .content {
      display: flex;
      margin-top: 24px;
      .filters {
        align-self: flex-start;
        margin-top: 5px;
      }
    }
  }
}
@media (min-width: 1399px) {
  .product-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu {
      margin-top: 34px;
      .ribbon-menu {
        margin: 0 auto;
      }
    }
    .content {
      display: flex;
      margin-top: 24px;
      .filters {
        align-self: flex-start;
        margin-top: 5px;
      }
    }
  }
}
</style>
