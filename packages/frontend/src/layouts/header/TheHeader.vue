<template>
  <div class="header">
    <TheLogo class="logo" />
    <div class="links-wrapper">
      <UILinksGroup v-if="widthX > 1019" color="white" class="links" :links="links" />
      <div class="icon-links">
        <IconHeader v-if="widthX <= 1019" />
      </div>
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
import { authorizedUserHeaderLinks, publicHeaderLinks } from '@/helpers/services/_links.service';
import { AuthorizedUserHeaderLinks, PublicHeaderLinks } from '@/helpers/types/_links.type';
import IconHeader from '@/layouts/header/IconHeader.vue';
import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';

const isUserAuthorized = ref<boolean>(false);

const links = computed<AuthorizedUserHeaderLinks | PublicHeaderLinks>(() => {
  return isUserAuthorized.value ? authorizedUserHeaderLinks : publicHeaderLinks;
});

const { widthX } = useWindowWidthWatcher();
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .header {
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      background: $PINK;
      .icon-links {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 5px;
      }
    }
  }
}
@media (min-width: 1020px) {
  .header {
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
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      background: $PINK;
      .links {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
