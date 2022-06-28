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
import { ProductCategoryId } from '@/helpers/enums/products/_products-categories.enum';
import { computed, watch } from 'vue';
import { NSpin } from 'naive-ui';
import ProductItem from '@/components/sections/products-page/ProductItem.vue';
import { PageName } from '@/helpers/enums/_pages.enum';

const store = useProductsPageStore();
const route = useRoute();
const isLoading = computed(() => store.isLoading);
const routeName = computed(() => route.name);
watch(
  routeName,
  () => {
    switch (routeName.value) {
      case PageName.candy:
        store.getProductsByCategory(ProductCategoryId.candy);
        break;
      case PageName.snacks:
        store.getProductsByCategory(ProductCategoryId.snacks);
        break;
      case PageName.cookies:
        store.getProductsByCategory(ProductCategoryId.cookies);
        break;
      case PageName.chocolates:
        store.getProductsByCategory(ProductCategoryId.chocolates);
        break;
      case PageName.food:
        store.getProductsByCategory(ProductCategoryId.food);
        break;
      case PageName.sale:
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
@media (max-width: 389px) {
  .product-page {
  }
}
@media (min-width: 600px) and (max-width: 799px) {
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .item {
      display: flex;
      margin: 5px;
    }
  }
}
@media (min-width: 800px) and (max-width: 1199px) {
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .item {
      display: flex;
      margin: 5px;
    }
  }
}
@media (min-width: 1199px) and (max-width: 1399px) {
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .item {
      display: flex;
      margin: 5px;
    }
  }
}
@media (min-width: 1399px) {
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .item {
      display: flex;
      margin: 5px;
    }
  }
}
</style>
