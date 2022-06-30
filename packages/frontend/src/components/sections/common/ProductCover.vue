<template>
  <div class="product-cover" :style="cover" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCover',
});
</script>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
});

const cover = computed<{ [key: string]: string }>(() => {
  return {
    'background-image': `url(${props.image})`,
    'background-size': 'cover',
    'background-position': 'center',
  };
});
</script>

<style scoped lang="scss"></style>
