<template>
  <NSpin v-if="isLoading" />
  <div v-if="!isLoading && products.length" class="product-list">
    <ProductItem class="item" v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div class="error-message">
    <UIMessage class="message" size="huge" v-if="!isLoading && !products.length">
      <UIText tag="NH2" type="error">Oops! No Results :(</UIText>
      <UIText tag="NH2" type="warning">Please, choose other options!</UIText>
    </UIMessage>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductList',
};
</script>

<script setup lang="ts">
import ProductItem from '@/components/sections/products-page/ProductItem.vue';
import UIMessage from '@/components/ui/UIMessage.vue';
import { NSpin } from 'naive-ui';

import { PageName } from '@/helpers/enums/_pages.enum';
import { useProductsPageStore } from '@/stores/products-page.store';
import { ProductCategoryId } from '@/helpers/enums/products/_products-categories.enum';
import UIText from '@/components/ui/UIText.vue';

import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useProductsPageStore();
const route = useRoute();

const isLoading = computed(() => store.isLoading);
const routeName = computed(() => route.name);
const products = computed(() => store.data);
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
</script>

<style scoped lang="scss">
@media (max-width: 389px) {
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .item {
      display: flex;
      margin: 5px;
    }
  }
  .error-message {
    margin: 36px;
    width: 100%;
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
  .error-message {
    margin: 36px;
    width: 100%;
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
  .error-message {
    margin: 36px;
    width: 100%;
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
  .error-message {
    margin: 36px;
    width: 100%;
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
  .error-message {
    margin: 36px;
    width: 100%;
  }
}
</style>
