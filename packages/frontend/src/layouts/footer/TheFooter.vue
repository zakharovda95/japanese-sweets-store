<template>
  <div class="footer">
    <NText type="info">{{ Inscriptions.footerLogo }}</NText>
    <NText type="info">{{ Inscriptions.footerDate }}</NText>
    <UILinksGroup tag="a" :size="FontSizeTitle.small" :links="footerLinks" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TheFooter',
});
</script>
<script setup lang="ts">
import { NText } from 'naive-ui';
import { Inscriptions } from '@/helpers/enums/_inscriptions.enum.ts';
import UILinksGroup from '@/components/ui/UILinksGroup.vue';
import { footerLinks } from '@/helpers/services/_links.service';
import { FontSizeTitle } from '@/helpers/enums/links/_link-styles.enum';
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.footer {
  display: flex;
  justify-content: space-around;
  padding: 12px;
  min-height: 20px;
  background: $LIGHT_BG_SET;
}
</style>
