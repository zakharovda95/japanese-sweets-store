<template>
  <div class="container">
    <TheLogo class="logo" />
    <div class="links-wrapper">
      <UILinksGroup color="white" class="links" :links="links" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TheHeader',
});
</script>
<script setup lang="ts">
import TheLogo from '@/layouts/header/TheLogo.vue';
import UILinksGroup from '@/components/ui/UILinksGroup.vue';
import { computed, ref } from 'vue';

import { authorizedUserHeaderLinks, publicHeaderLinks } from '@/services/_links.service';
import { AuthorizedUserHeaderLinks, PublicHeaderLinks } from '@/types/_links.type';

const isUserAuthorized = ref<boolean>(false);

const links = computed<AuthorizedUserHeaderLinks | PublicHeaderLinks>(() => {
  return isUserAuthorized.value ? authorizedUserHeaderLinks : publicHeaderLinks;
});
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.header-component {
  display: flex;
  flex-direction: column;
  min-height: 120px;
  background: $LIGHT_BG_SET;
  .logo {
    width: 100%;
    margin-bottom: 12px;
    margin-top: 12px;
  }
  .links-wrapper {
    background: $PINK;
    .links {
      flex-wrap: wrap;
    }
  }
}
</style>
