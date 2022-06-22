<template>
  <div class="ribbon-menu">
    <NCard hoverable bordered>
      <div class="content">
        <UILinksGroup
          class="menu"
          hovered
          rounded
          padding="8px"
          margin="10px"
          size="large"
          :links="Categories"
        />
      </div>
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
  .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    min-height: 30px;
    .menu {
      display: flex;
      align-self: center;
      width: 100%;
    }
  }
}
</style>
