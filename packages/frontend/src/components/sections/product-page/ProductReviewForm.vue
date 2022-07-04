<template>
  <div class="product-review-form">
    <NForm>
      <NFormItem label="Rate">
        <NRate size="large" :value="rate" @update:value="rate = $event" />
      </NFormItem>
      <NFormItem label="Nickname">
        <NInput
          placeholder="Nickname"
          :value="userNickname"
          @update:value="userNickname = $event"
          maxlength="15"
          show-count
        />
      </NFormItem>
      <NFormItem label="Review">
        <NInput
          type="textarea"
          :value="review"
          @update:value="review = $event"
          rows="5"
          placeholder="Review"
          maxlength="500"
          show-count
        />
      </NFormItem>
      <NFormItem>
        <NButton :disabled="!rate" type="primary" size="small" @click="send"> SEND </NButton>
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
import { NForm, NFormItem, NRate, NInput, NButton, useMessage } from 'naive-ui';
import { computed } from 'vue';
import { useProductPageStore } from '@/stores/product-page.store';
const store = useProductPageStore();
if (store.data?.id) {
  store.reviewData.product = store.data.id;
}

const message = useMessage();
const rate = computed<number>({
  get() {
    return store.reviewData.rate;
  },
  set(val: number) {
    store.reviewData.rate = val;
  },
});
const userNickname = computed<string>({
  get() {
    return store.reviewData.userNickname;
  },
  set(val: string) {
    store.reviewData.userNickname = val;
  },
});
const review = computed<string>({
  get() {
    return store.reviewData.review;
  },
  set(val: string) {
    store.reviewData.review = val;
  },
});
const send = (): void => {
  store.sendReview();
  message.success('Thanks! ^.^', { duration: 6000 });
};
</script>

<style scoped lang="scss"></style>
