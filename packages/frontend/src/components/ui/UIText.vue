<template>
  <div class="ui-text">
    <component :is="size">
      <NText id="text" :style="{ 'color': textColor }" v-bind="$attrs" :type="type"><slot /></NText>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIText',
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { NH1, NH2, NH3, NH4, NH5, NH6, NText } from 'naive-ui';
import { defineProps, computed } from 'vue';
import { HeaderSize } from '@/helpers/enums/_text-styles.enum';
const props = defineProps({
  tag: {
    type: String,
    default: HeaderSize.h1,
  },
  type: {
    type: String,
    default: 'info',
  },
  color: {
    type: [String, Boolean],
    default: false,
  },
});
const textColor = computed<string | boolean>(() => (props.color ? props.color : false));
const size = computed<unknown>(() => {
  switch (props.tag) {
    case HeaderSize.h1:
      return NH1;
    case HeaderSize.h2:
      return NH2;
    case HeaderSize.h3:
      return NH3;
    case HeaderSize.h4:
      return NH4;
    case HeaderSize.h5:
      return NH5;
    case HeaderSize.h6:
      return NH6;
    default:
      return false;
  }
});
</script>

<style scoped lang="scss">
.ui-text {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
}
</style>
