<template>
  <div class="main-layout">
    <TheHeader class="header" />
    <div class="content">
      <router-view />
    </div>
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
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
</style>
