<template>
  <NSpin class="spin" size="large" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'UISpin',
});
</script>

<script setup lang="ts">
import { NSpin } from 'naive-ui';
</script>

<style scoped lang="scss">
.spin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  align-self: center;
  width: 100%;
  height: calc(100vh - 197px);
  overflow: hidden;
}
</style>
