<template>
  <UISpin v-if="isLoading" />
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
import UISpin from '@/components/ui/UISpin.vue';

import { useProductPageStore } from '@/stores/product-page.store';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const store = useProductPageStore();

const id = computed(() => route.params.productId);

store.fetchData(+id.value);

const isLoading = computed(() => store.isLoading);
</script>

<style scoped lang="scss">
@media (max-width: 499px) {
  .product-page {
    display: flex;
    justify-content: center;
    width: 95vw;
    margin: 0 auto;
  }
}

@media (min-width: 500px) and (max-width: 799px) {
  .product-page {
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
  }
}

@media (min-width: 800px) and (max-width: 1399px) {
  .product-page {
    display: flex;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
  }
}

@media (min-width: 1400px) {
  .product-page {
    display: flex;
    justify-content: center;
    width: 60vw;
    margin: 0 auto;
  }
}
</style>
