<template>
  <div class="order-form">
    <UIText tag="NH2">Please, fill the form</UIText>
    <NForm ref="form" size="large" :rules="rules">
      <NFormItem label="Name" path="name">
        <NInput :value="nickName" @update:value="nickName = $event" placeholder="Name" />
      </NFormItem>
      <NFormItem label="Email" path="email">
        <NInput :value="email" @update:value="email = $event" placeholder="Email" />
      </NFormItem>
      <NFormItem label="Address" path="address">
        <NInput :value="address" @update:value="address = $event" placeholder="Address" />
      </NFormItem>
    </NForm>
    <div class="action-button">
      <NButton :disabled="!isFieldsFilled" size="large" type="primary" @click="send">
        CONFIRM
      </NButton>
    </div>
    <NModal class="modal" v-model:show="showModal" :mask-closable="false">
      <div class="modal-content">
        <UIText>SUCCESS! Your order has been placed!</UIText>
        <img class="modal-image" src="@/assets/images/cats.gif" alt="cats" />
        <NButton @click="close" class="modal-button" size="large" type="info">GO TO HOME</NButton>
      </div>
    </NModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderForm',
});
</script>

<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton, NModal } from 'naive-ui';
import UIText from '@/components/ui/UIText.vue';

import { useProductCartStore } from '@/stores/product-cart.store';

import { computed, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { PageName } from '@/helpers/enums/_pages.enum';

const store = useProductCartStore();
const router = useRouter();

const showModal: Ref<boolean> = ref(false);

const nickName: Ref<string> = computed({
  get() {
    return store.orderData.userNickname;
  },
  set(val: string) {
    store.orderData.userNickname = val;
  },
});

const email: Ref<string> = computed({
  get() {
    return store.orderData.email;
  },
  set(val: string) {
    store.orderData.email = val;
  },
});

const address: Ref<string> = computed({
  get() {
    return store.orderData.address;
  },
  set(val: string) {
    store.orderData.address = val;
  },
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

const send = (): void => {
  store.sendOrder();
  showModal.value = true;
};

const close = (): void => {
  showModal.value = false;
  router.push({ name: PageName.main });
};

const isFieldsFilled: Ref<boolean> = computed(
  () => !!(nickName.value && email.value && address.value),
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

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    margin: 0 12px;
    background-color: #e1e0e0;
    border-radius: 24px;
    border: 3px solid #ff69b4;
    padding: 24px;

    .modal-image {
      border-radius: 24px;
      width: 90%;
    }

    .modal-button {
      margin-top: 24px;
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

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: #e1e0e0;
    border-radius: 24px;
    border: 3px solid #ff69b4;
    padding: 24px;

    .modal-image {
      border-radius: 24px;
      width: 80%;
    }

    .modal-button {
      margin-top: 24px;
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
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    background-color: #e1e0e0;
    border-radius: 24px;
    border: 3px solid #ff69b4;
    padding: 24px;

    .modal-image {
      border-radius: 24px;
      width: 80%;
    }

    .modal-button {
      margin-top: 24px;
    }
  }
}
</style>
