<template>
  <div class="product-cart-view">
    <UIText>Your cart</UIText>
    <EmptyCart class="empty-cart" v-if="!userCart || !userCart.length" />
    <ProductCartList v-if="userCart && userCart.length" />
    <div class="order" v-if="userCart && userCart.length">
      <NButton class="order-button" color="#ff69b4" size="large" @click="showModal = true">
        ORDER
      </NButton>
    </div>
    <NModal v-model:show="showModal">
      <ModalCard />
    </NModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartView',
});
</script>

<script setup lang="ts">
import ProductCartList from '@/components/sections/common/ProductCartList.vue';
import UIText from '@/components/ui/UIText.vue';
import EmptyCart from '@/components/sections/product-cart-page/EmptyCart.vue';
import ModalCard from '@/components/sections/product-cart-page/ModalCard.vue';
import { NButton, NModal } from 'naive-ui';

import { useProductCartStore } from '@/stores/product-cart.store';

import { computed, ref, Ref } from 'vue';

const store = useProductCartStore();

const userCart = computed(() => store.data.userCart);

const showModal: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
.product-cart-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  margin: 36px 0;
  .empty-cart {
    margin-bottom: 34px;
  }
  .order {
    display: flex;
    margin: 24px 0;
    justify-content: center;
  }
}
</style>
