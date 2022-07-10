<template>
  <div class="ui-message">
    <NCard v-bind="$attrs">
      <slot />
    </NCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIMessage',
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import { defineProps } from 'vue';

defineProps({
  cardWidth: {
    type: String,
    required: false,
    default: () => '300px',
  },
});
</script>

<style scoped lang="scss">
.n-card {
  display: flex;
  width: v-bind(cardWidth);
}
</style>
