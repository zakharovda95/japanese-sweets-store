<template>
  <div class="profile-entrance">
    <UIText :tag="widthX > 480 ? HeaderSize.h1 : HeaderSize.h2" type="info">
      {{ Inscriptions.mainPageInviteEntrance }}
    </UIText>
    <div class="links-group">
      <UILinksGroup
        padding="8px"
        margin="8px"
        direction="column"
        color="white"
        background="#ff69b4"
        :size="FontSizeTitle.large"
        :links="mainPageProfileEntranceLinks"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainPageProfileEntrance',
};
</script>

<script setup lang="ts">
import UIText from '@/components/ui/UIText.vue';
import UILinksGroup from '@/components/ui/UILinksGroup.vue';

import { mainPageProfileEntranceLinks } from '@/helpers/services/_links.service';

import { Inscriptions } from '@/helpers/enums/_inscriptions.enum';
import { HeaderSize } from '@/helpers/enums/_text-styles.enum';
import { FontSizeTitle } from '@/helpers/enums/links/_link-styles.enum';

import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';
const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.profile-entrance {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
  background: $LIGHT_BG_SET;
  border-radius: 8px;
  .links-group {
    display: flex;
    justify-content: center;
  }
}
</style>
