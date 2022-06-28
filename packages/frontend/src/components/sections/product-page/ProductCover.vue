<template>
  <div class="product-cover" />
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
  productImage: {
    type: String,
    default: '',
  },
});

const bgImage = computed(() => `url(${props.productImage})`);
</script>

<style scoped lang="scss">
.product-cover {
  width: 100%;
  height: auto;
  display: flex;
  background-size: cover;
  background-position: center;
  background-image: v-bind(bgImage);
}
</style>
