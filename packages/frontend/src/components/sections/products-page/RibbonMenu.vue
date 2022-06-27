<template>
  <div class="ribbon-menu">
    <NCard hoverable bordered>
      <div class="content fullscreen" v-if="widthX > 1019">
        <UILinksGroup
          class="menu"
          hovered
          rounded
          padding="8px"
          margin="0 10px"
          size="large"
          :links="Categories"
        />
      </div>
      <div class="content small-size" v-if="widthX <= 1019">
        <NCollapse>
          <NCollapseItem title="SELECT FAVORITE CATEGORY">
            <UILinksGroup
              class="menu"
              hovered
              rounded
              padding="8px"
              margin="0 10px"
              size="large"
              :links="Categories"
            />
          </NCollapseItem>
        </NCollapse>
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
import { NCard, NCollapse, NCollapseItem } from 'naive-ui';
import UILinksGroup from '@/components/ui/UILinksGroup.vue';
import { Categories } from '@/helpers/services/_links.service';
import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';
const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
@media (max-width: 1019px) {
  .ribbon-menu {
    display: flex;
    .small-size {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      align-self: center;
      .menu {
        display: flex;
        align-self: center;
        width: 100%;
      }
    }
  }
}
@media (min-width: 1020px) {
  .ribbon-menu {
    display: flex;
    .fullscreen {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      align-self: center;
      .menu {
        display: flex;
        align-self: center;
        width: 100%;
      }
    }
  }
}
</style>
