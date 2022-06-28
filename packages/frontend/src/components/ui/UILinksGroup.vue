<template>
  <div class="ui-link-group" v-for="link in links" :key="link.title">
    <a
      class="link"
      :class="[styleClasses, { 'hovered': hovered }]"
      :href="link.path"
      v-if="tag === 'a'"
      v-bind="$attrs"
    >
      <div class="title">{{ link.title }}</div>
    </a>
    <router-link
      class="link"
      :class="[styleClasses, { 'hovered': hovered }]"
      v-else
      :to="{ name: link.path }"
      v-bind="$attrs"
    >
      <div class="title">{{ link.title }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UILinksGroup',
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue';
import {
  BorderRadius,
  ColorTypes,
  ColorValues,
  FontSize,
  FontSizeTitle,
} from '@/helpers/enums/links/_link-styles.enum';
import {
  AuthorizedUserHeaderLinks,
  FooterLinks,
  MainPageProfileEntranceLinks,
  ProductCategoryType,
  PublicHeaderLinks,
} from '@/helpers/types/_links.type';
const props = defineProps({
  links: {
    type: Array as unknown as
      | PropType<PublicHeaderLinks>
      | PropType<AuthorizedUserHeaderLinks>
      | PropType<FooterLinks>
      | PropType<MainPageProfileEntranceLinks>
      | PropType<ProductCategoryType>,
    required: true,
  },
  tag: {
    type: String,
    default: 'router-link',
  },
  color: {
    type: String,
    default: ColorTypes.info,
  },
  size: {
    type: String,
    default: FontSizeTitle.medium,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  border: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
  hovered: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: String,
    default: '0px',
  },
  margin: {
    type: String,
    default: '0px',
  },
});
const color = computed<string>(() => {
  switch (props.color) {
    case ColorTypes.info:
      return ColorValues.info;
    case ColorTypes.success:
      return ColorValues.success;
    case ColorTypes.error:
      return ColorValues.error;
    case ColorTypes.warning:
      return ColorValues.warning;
    case ColorTypes.default:
      return ColorValues.default;
    default:
      return props.color;
  }
});
const borderColor = computed<string>(() => {
  switch (props.border) {
    case ColorTypes.info:
      return ColorValues.info;
    case ColorTypes.success:
      return ColorValues.success;
    case ColorTypes.error:
      return ColorValues.error;
    case ColorTypes.warning:
      return ColorValues.warning;
    case ColorTypes.default:
      return ColorValues.default;
    default:
      return props.border;
  }
});
const fontSize = computed<string>(() => {
  switch (props.size) {
    case FontSizeTitle.small:
      return FontSize.small;
    case FontSizeTitle.large:
      return FontSize.large;
    default:
      return FontSize.medium;
  }
});
const styleClasses = computed<{ [key: string]: string }>(() => {
  return {
    'bordered': props.border,
    'background': props.background,
  };
});
const borderRadius = computed<string>(() => {
  return props.rounded ? BorderRadius.rounded : BorderRadius.default;
});
const background = computed<string>(() => {
  switch (props.background) {
    case ColorTypes.info:
      return ColorValues.info;
    case ColorTypes.success:
      return ColorValues.success;
    case ColorTypes.error:
      return ColorValues.error;
    case ColorTypes.warning:
      return ColorValues.warning;
    case ColorTypes.default:
      return ColorValues.default;
    default:
      return props.background;
  }
});
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/styles/_constants.scss';
.ui-link-group {
  display: flex;
  .link {
    font-family: $FONT_FAMILY;
    text-decoration: none;
    color: v-bind(color);
    font-size: v-bind(fontSize);
    border-radius: v-bind(borderRadius);
    padding: v-bind(padding);
    margin: v-bind(margin);
  }
  .hovered:hover {
    background: #f8c2d8;
  }
  .bordered {
    border: 2px solid v-bind(borderColor);
  }
  .background {
    background-color: v-bind(background);
  }
}
//.router-link-active {
//  border-bottom: 2px solid white;
//}
</style>
