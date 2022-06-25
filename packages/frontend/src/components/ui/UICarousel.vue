<template>
  <NCarousel>
    <img
      v-for="image in images"
      :key="image"
      :style="styles"
      class="image"
      :src="image"
      :alt="alt"
    />
  </NCarousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UICarousel',
});
</script>

<script setup lang="ts">
import { NCarousel } from 'naive-ui';
import { defineProps, PropType } from 'vue';
defineProps({
  images: {
    type: Array as PropType<Array<string>>,
    required: true,
  },
  alt: {
    type: String,
    default: 'image',
  },
  styles: {
    type: Object as PropType<{ [key: string]: string }>,
    default: () => ({
      'width': '100%',
      'height': 'auto',
    }),
  },
});
</script>

<style scoped lang="scss"></style>
