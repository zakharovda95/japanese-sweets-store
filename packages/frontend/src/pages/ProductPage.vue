<template>
  <NSpin v-if="isLoading" />
  <div class="product-page" v-if="!isLoading">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductPage',
});
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { NSpin } from 'naive-ui';
import { useProductPageStore } from '@/stores/product-page.store';
import { computed } from 'vue';
const route = useRoute();
const store = useProductPageStore();
const id = computed<string>(() => route.params.productId);
store.fetchData(id.value);
const isLoading = computed(() => store.isLoading);
</script>

<style scoped lang="scss">
@media (min-width: 1400px) {
  .product-page {
    display: flex;
    justify-content: center;
    width: 60vw;
    margin: 0 auto;
  }
}
</style>
