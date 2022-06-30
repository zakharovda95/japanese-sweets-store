<template>
  <div class="add-to-cart">
    <NButton class="add" size="large" color="#ff69b4">ADD TO CART</NButton>
    <NInputNumber
      :min="1"
      :max="10"
      v-model:value="count"
      :default-value="1"
      bordered
      class="count"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddToCart',
});
</script>

<script setup lang="ts">
import { NButton, NInputNumber } from 'naive-ui';
import { ref, defineEmits } from 'vue';
defineEmits(['custom:changeAmount']);
const count = ref<number>(1);
</script>

<style scoped lang="scss">
.add-to-cart {
  display: flex;
  .add {
    margin-right: 8px;
  }
  .count {
    width: 80px;
    margin-top: 3px;
  }
}
</style>
