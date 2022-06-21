<template>
  <div class="main-layout">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainLayout',
});
</script>

<script setup lang="ts">
import TheHeader from '@/layouts/header/TheHeader.vue';
import TheFooter from '@/layouts/footer/TheFooter.vue';
</script>

<style scoped lang="scss"></style>
