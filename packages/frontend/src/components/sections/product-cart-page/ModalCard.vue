<template>
  <div class="modal-card">
    <NCard size="huge" class="card">
      <UIText tag="NH2">Do you have an account?</UIText>
      <div class="links">
        <router-link class="link" :to="{ name: PageName.signin }">
          <UIText type="primary" tag="NH3">Sign In</UIText>
        </router-link>
        <router-link class="link" :to="{ name: PageName.signup }">
          <UIText type="primary" tag="NH3">Sign Up</UIText>
        </router-link>
        <router-link class="link" to="/">
          <UIText type="primary" tag="NH3">Order without authorization</UIText>
        </router-link>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalCard',
});
</script>

<script setup lang="ts">
import UIText from '@/components/ui/UIText.vue';
import { NCard } from 'naive-ui';

import { PageName } from '@/helpers/enums/_pages.enum';
</script>

<style scoped lang="scss">
.modal-card {
  display: flex;
  flex-direction: column;
  .links {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .link {
      text-decoration: none;
    }
  }
}
</style>
