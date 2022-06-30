<template>
  <img :src="productImage" class="product-cover" alt="product-image" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCover',
});
</script>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  productImage: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss">
@media (min-width: 1400px) {
  .product-cover {
    width: 20vw;
    height: 20vw;
    display: flex;
    background-size: cover;
    background-position: center;
  }
}
</style>
