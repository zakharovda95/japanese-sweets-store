<template>
  <div class="product-review-form">
    <NForm>
      <NFormItem label="Rate">
        <NRate size="large" />
      </NFormItem>
      <NFormItem label="Nickname">
        <NInput placeholder="Nickname" maxlength="15" show-count />
      </NFormItem>
      <NFormItem label="Review">
        <NInput type="textarea" rows="5" placeholder="Review" maxlength="500" show-count />
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
import { NForm, NFormItem, NRate, NInput } from 'naive-ui';
</script>

<style scoped lang="scss">
.product-review-form {
  .row-1 {
    display: flex;
    flex-direction: column;
  }
}
</style>
