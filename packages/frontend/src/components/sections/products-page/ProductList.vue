<template>
  <NSpin v-if="isLoading" />
  <div v-else class="product-list">
    <ProductItem class="item" v-for="product in products" :key="product.id" :product="product" />
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
import {
  ProductCategories,
  ProductCategoryId,
} from '@/helpers/enums/links/_product-categories.enum';
import { computed, watch } from 'vue';
import { NSpin } from 'naive-ui';
import ProductItem from '@/components/sections/products-page/ProductItem.vue';
const store = useProductsPageStore();
const route = useRoute();
const isLoading = computed(() => store.isLoading);
const routeName = computed(() => route.name);
watch(
  routeName,
  () => {
    switch (routeName.value) {
      case ProductCategories.candy:
        store.getProductsByCategory(ProductCategoryId.candy);
        break;
      case ProductCategories.snacks:
        store.getProductsByCategory(ProductCategoryId.snacks);
        break;
      case ProductCategories.cookies:
        store.getProductsByCategory(ProductCategoryId.cookies);
        break;
      case ProductCategories.chocolates:
        store.getProductsByCategory(ProductCategoryId.chocolates);
        break;
      case ProductCategories.food:
        store.getProductsByCategory(ProductCategoryId.food);
        break;
      case ProductCategories.sale:
        store.getProductsOnSaleOnly();
        break;
      default:
        store.getAllProducts();
        break;
    }
  },
  { immediate: true, deep: true },
);
const products = computed(() => store.data);
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  .item {
    display: flex;
    margin: 5px;
  }
}
</style>
