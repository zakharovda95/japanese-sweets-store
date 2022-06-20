<template>
  <div class="container">123123</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainPage',
});
</script>

<script setup lang="ts">
import { useMainPageStore } from '@/stores/main-page.store';

const store = useMainPageStore();
store.getCarouselsImages();
</script>

<style scoped lang="scss">
@media (max-width: 390px) {
}
@media (max-width: 768px) {
}
@media (min-width: 769px) {
  .container {
    margin: 0 auto;
    width: 60vw;
    background: none;
  }
}
</style>
