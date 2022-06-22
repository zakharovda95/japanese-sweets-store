<template>
  <ProductsView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsPage',
});
</script>

<script setup lang="ts">
import ProductsView from '@/components/sections/products-page/ProductsView.vue';
</script>

<style scoped lang="scss"></style>
