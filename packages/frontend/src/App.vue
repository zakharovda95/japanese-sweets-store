<template>
  <div class="container">
    <NConfigProvider>
      <router-view />
    </NConfigProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
</script>

<style scoped lang="scss">
.container {
  background: #e0e0e0;
}
</style>
