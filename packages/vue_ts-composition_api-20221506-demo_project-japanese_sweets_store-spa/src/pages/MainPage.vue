<template>
  <div class="main-page">
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
import { useMainPageStore } from '@/stores/main-page.store';
import MainPageView from '@/components/sections/main-page/MainPageView.vue';

const store = useMainPageStore();
store.getCarouselsImages();
</script>

<style scoped lang="scss">
@media (max-width: 390px) {
}
@media (max-width: 768px) {
}
@media (min-width: 769px) {
  .main-page {
    margin: 0 auto;
    width: 60vw;
    background: none;
  }
}
</style>
