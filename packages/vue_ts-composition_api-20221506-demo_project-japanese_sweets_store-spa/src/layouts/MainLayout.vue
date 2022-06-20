<template>
  <div class="container">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/layouts/header/TheHeader.vue';
import TheFooter from '@/layouts/footer/TheFooter.vue';
export default defineComponent({
  name: 'MainLayout',
  components: { TheFooter, TheHeader },
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
