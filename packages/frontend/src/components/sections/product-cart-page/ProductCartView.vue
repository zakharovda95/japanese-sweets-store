<template>
  <div class="product-cart-view">
    {{ userCart }}
    <UIText>Your cart</UIText>
    <div class="error" v-if="!userCart || !userCart.length">Your cart empty!</div>
    <ProductCartList v-if="userCart && userCart.length" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartView',
});
</script>

<script setup lang="ts">
import { useProductCartStore } from '@/stores/product-cart.store';
import { computed } from 'vue';
import ProductCartList from '@/components/sections/product-cart-page/ProductCartList.vue';
import UIText from '@/components/ui/UIText.vue';

const store = useProductCartStore();
const userCart = computed(() => store.userCart);
</script>

<style scoped lang="scss"></style>
