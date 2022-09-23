<template>
  <div class="ui-text">
    <component :is="size">
      <NText
        :underline="underline"
        id="text"
        :style="{
          'color': textColor,
          'text-decoration': strike ? 'line-through' : '',
        }"
        v-bind="$attrs"
        :type="type"
        ><slot
      /></NText>
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

import { HeaderSize } from '@/helpers/enums/_text-styles.enum';

import { defineProps, computed } from 'vue';

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
  underline: {
    type: Boolean,
    default: false,
  },
  strike: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'center',
  },
  justify: {
    type: String,
    default: 'center',
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
  justify-content: v-bind(justify);
  text-align: v-bind(align);
  vertical-align: v-bind(align);
  align-items: v-bind(align);
}
</style>
