<template>
  <UISpin v-if="isLoading" />
  <div v-else class="main-page">
    <MainPageView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainPage',
});
</script>

<script setup lang="ts">
import MainPageView from '@/components/sections/main-page/MainPageView.vue';
import UISpin from '@/components/ui/UISpin.vue';

import { useMainPageStore } from '@/stores/main-page.store';

import { computed } from 'vue';

const store = useMainPageStore();

store.getCarouselsImages();

const isLoading = computed<boolean>(() => store.isLoading);
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .main-page {
    background: white;
    margin: 0 auto;
    width: 90vw;
    background: none;
  }
}

@media (min-width: 800px) and (max-width: 1019px) {
  .main-page {
    background: white;
    margin: 0 auto;
    width: 80vw;
    background: none;
  }
}

@media (min-width: 1020px) {
  .main-page {
    margin: 0 auto;
    width: 60vw;
    background: none;
  }
}
</style>
