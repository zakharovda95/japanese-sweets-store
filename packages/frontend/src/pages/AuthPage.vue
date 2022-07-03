<template>
  <div class="auth-page">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthPage',
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .auth-page {
    margin: 0 auto;
    width: 90vw;
  }
}
@media (min-width: 800px) and (max-width: 1019px) {
  .auth-page {
    margin: 0 auto;
    width: 80vw;
  }
}
@media (min-width: 1020px) {
  .auth-page {
    margin: 0 auto;
    width: 60vw;
  }
}
</style>
