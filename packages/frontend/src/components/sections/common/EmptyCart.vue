<template>
  <div class="empty-cart">
    <UIMessage
      :cardWidth="widthX >= 1020 ? '60vw' : '90vw'"
      title="Ooops... Your cart is empty!"
      size="huge"
    >
      <router-link style="text-decoration: none" :to="{ name: PageName.goods }">
        <UIText justify="flex-start">&#10094;Start shopping</UIText>
      </router-link>
    </UIMessage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmptyCart',
});
</script>

<script setup lang="ts">
import UIMessage from '@/components/ui/UIMessage.vue';
import UIText from '@/components/ui/UIText.vue';
import { PageName } from '@/helpers/enums/_pages.enum';
import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';
const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss"></style>
