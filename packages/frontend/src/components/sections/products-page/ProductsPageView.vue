<template>
  <div class="product-view">
    <div class="menu">
      <RibbonMenu class="ribbon-menu" />
    </div>
    <div class="content">
      <FiltersPanel class="filters" v-if="!isLoading && widthX > 1019" />
      <div class="small-screen-filter" v-if="!isLoading && widthX <= 1019">
        <NButton class="button" type="info" @click="showModal = true">SHOW FILTERS</NButton>
        <NModal v-model:show="showModal">
          <FiltersPanel @custom:closeModal="showModal = false" />
        </NModal>
      </div>
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
import { computed, ref } from 'vue';
import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';
import { NModal, NButton } from 'naive-ui';
const store = useProductsPageStore();
const isLoading = computed(() => store.isLoading);
const { widthX } = useWindowWidthWatcher();
const showModal = ref<boolean>(false);
</script>

<style scoped lang="scss">
@media (max-width: 399px) {
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
      flex-direction: column;
      .small-screen-filter {
        margin-left: 5px;
        margin-top: 24px;
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
@media (min-width: 400px) and (max-width: 1019px) {
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
      flex-direction: column;
      .small-screen-filter {
        margin-left: 5px;
        margin-top: 24px;
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
@media (min-width: 1020px) and (max-width: 1399px) {
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
@media (min-width: 1400px) {
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
