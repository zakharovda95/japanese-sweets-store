<template>
  <div class="icon-header">
    <router-link :to="{ name: LinkRouteNames.main }">
      <NIcon size="34" color="white"><HomeOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: LinkRouteNames.goods }">
      <NIcon size="34" color="white"><ShoppingBagOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: LinkRouteNames.cart }">
      <NIcon size="34" color="white"><ShoppingCartOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: LinkRouteNames.signIn }">
      <NIcon size="34" color="white"><LogInOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: LinkRouteNames.signUp }">
      <NIcon size="34" color="white"><AppRegistrationFilled /></NIcon>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconHeader',
});
</script>

<script setup lang="ts">
import { NIcon } from 'naive-ui';
import {
  HomeOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  LogInOutlined,
  AppRegistrationFilled,
} from '@vicons/material';
import { LinkRouteNames } from '@/helpers/enums/links/_links-titles.enum';
</script>

<style scoped lang="scss">
.icon-header {
  display: flex;
  align-items: center;
}
</style>
