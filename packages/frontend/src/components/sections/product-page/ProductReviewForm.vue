<template>
  <div class="product-review-form">
    <NForm>
      <NFormItem label="Rate">
        <NRate size="large" :value="rate" @update:value="rate = $event" />
      </NFormItem>
      <NFormItem label="Nickname">
        <NInput placeholder="Nickname" maxlength="15" show-count />
      </NFormItem>
      <NFormItem label="Review">
        <NInput type="textarea" rows="5" placeholder="Review" maxlength="500" show-count />
      </NFormItem>
      <NFormItem>
        <NButton type="primary" size="small">SEND</NButton>
      </NFormItem>
    </NForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductReviewForm',
});
</script>

<script setup lang="ts">
import { NForm, NFormItem, NRate, NInput, NButton } from 'naive-ui';
import { computed } from 'vue';
import { useProductPageStore } from '@/stores/product-page.store';
const store = useProductPageStore();
const rate = computed<number>({
  get() {
    return store.reviewData.rate;
  },
  set(val: number) {
    store.reviewData.rate = val;
  },
});
</script>

<style scoped lang="scss"></style>
