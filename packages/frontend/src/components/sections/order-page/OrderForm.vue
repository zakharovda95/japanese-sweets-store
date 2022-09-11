<template>
  <div class="order-form">
    <UIText tag="NH2">Please, fill the form</UIText>
    <NForm ref="form" size="large" :model="formModel" :rules="rules">
      <NFormItem label="Name" path="name">
        <NInput v-model:value="formModel.name" placeholder="Name" />
      </NFormItem>
      <NFormItem label="Email" path="email">
        <NInput v-model:value="formModel.email" placeholder="Email" />
      </NFormItem>
      <NFormItem label="Address" path="address">
        <NInput v-model:value="formModel.address" placeholder="Address" />
      </NFormItem>
    </NForm>
    <div class="action-button">
      <NButton :disabled="!isFieldsFilled" size="large" type="primary" @click="send">
        CONFIRM
      </NButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'OrderForm',
});
</script>

<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';
import UIText from '@/components/ui/UIText.vue';

import { computed, ref, Ref } from 'vue';

const formModel = ref({
  name: '',
  email: '',
  address: '',
});

const rules = ref({
  name: {
    required: true,
    message: 'Please, input your name',
    trigger: ['blur', 'input'],
  },
  email: {
    required: true,
    message: 'Please, input your email',
    trigger: ['blur', 'input'],
  },
  address: {
    required: true,
    message: 'Please, input your address',
    trigger: ['blur', 'input'],
  },
});

const message = useMessage();

const send = (): void => {
  message.success('SUCCESS!!!');
};

const isFieldsFilled: Ref<boolean> = computed(
  () => !!(formModel.value.name && formModel.value.email && formModel.value.address),
);
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .order-form {
    background: white;
    margin: 0 auto;
    width: 90%;
    .action-button {
      display: flex;
      justify-content: center;
      margin: 24px;
    }
  }
}
@media (min-width: 800px) and (max-width: 1019px) {
  .order-form {
    background: white;
    margin: 0 auto;
    width: 80%;
    .action-button {
      display: flex;
      justify-content: center;
      margin: 24px;
    }
  }
}
@media (min-width: 1020px) {
  .order-form {
    background: white;
    margin: 0 auto;
    width: 60%;
    .action-button {
      display: flex;
      justify-content: center;
      margin: 24px;
    }
  }
}
</style>
