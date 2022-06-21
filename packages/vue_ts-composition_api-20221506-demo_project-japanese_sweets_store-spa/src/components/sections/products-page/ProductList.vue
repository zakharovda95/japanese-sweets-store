<template>
  <NSpin v-if="isLoading" />
  <div v-else class="product-list">
    <NSpace justify="space-around">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </NSpace>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductList',
};
</script>

<script setup lang="ts">
import { useProductsPageStore } from '@/stores/products-page.store';
import { useRoute } from 'vue-router';
import { ProductCategories, ProductCategoryRoutes } from '@/enums/links/_product-categories.enum';
import { computed, watch } from 'vue';
import { NSpin, NSpace } from 'naive-ui';
import ProductItem from '@/components/sections/products-page/ProductItem.vue';
const store = useProductsPageStore();
const route = useRoute();
const isLoading = computed<boolean>(() => store.isLoading);
const routeName = computed(() => route.name);
watch(
  routeName,
  () => {
    switch (routeName.value) {
      case ProductCategories.candy:
        store.fetchData(ProductCategoryRoutes.candy);
        break;
      case ProductCategories.snacks:
        store.fetchData(ProductCategoryRoutes.snacks);
        break;
      case ProductCategories.cookies:
        store.fetchData(ProductCategoryRoutes.cookies);
        break;
      case ProductCategories.chocolates:
        store.fetchData(ProductCategoryRoutes.chocolates);
        break;
      case ProductCategories.food:
        store.fetchData(ProductCategoryRoutes.food);
        break;
      case ProductCategories.sale:
        store.getSaleOnlyProducts();
        break;
      default:
        store.fetchData(ProductCategoryRoutes.all);
    }
  },
  { immediate: true, deep: true },
);
const products = computed(() => store.data);
</script>

<style scoped lang="scss">
.product-list {
  margin-top: 24px;
}
</style>
