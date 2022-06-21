<template>
  <div class="ribbon-menu">
    <NCard hoverable>
      <UILinksGroup hovered rounded :links="Categories" />
    </NCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RibbonMenu',
});
</script>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import UILinksGroup from '@/components/ui/UILinksGroup.vue';
import { Categories } from '@/helpers/services/_links.service';
</script>

<style scoped lang="scss">
.ribbon-menu {
  display: flex;
}
</style>
