<template>
  <div class="icon-header">
    <router-link :to="{ name: PageName.main }">
      <NIcon size="34" color="white"><HomeOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: PageName.goods }">
      <NIcon size="34" color="white"><ShoppingBagOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: PageName.cart }">
      <NIcon size="34" color="white"><ShoppingCartOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: PageName.signin }">
      <NIcon size="34" color="white"><LogInOutlined /></NIcon>
    </router-link>
  </div>
  <div class="public-icon-header">
    <router-link :to="{ name: PageName.signup }">
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
import { PageName } from '@/helpers/enums/_pages.enum';
</script>

<style scoped lang="scss">
.icon-header {
  display: flex;
  align-items: center;
}
</style>
