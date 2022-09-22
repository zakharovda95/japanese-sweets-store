<template>
  <div class="project-suspension-message">
    <UIText :tag="widthX > 480 ? HeaderSize.h1 : HeaderSize.h2">
      Извините... Эта страница в разработке :)
    </UIText>
    <UIText :tag="widthX > 480 ? HeaderSize.h1 : HeaderSize.h2">
      Спасибо, что проявили интерес к моему проекту!
    </UIText>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectSuspensionMessage',
});
</script>

<script setup lang="ts">
import UIText from '@/components/ui/UIText.vue';

import { useWindowWidthWatcher } from '@/composables/useWindowWidthWatcher';
import { HeaderSize } from '@/helpers/enums/_text-styles.enum';

const { widthX } = useWindowWidthWatcher();
</script>

<style scoped lang="scss">
.project-suspension-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  margin-top: 34px;
  background: white;
  margin-bottom: 34px;
}
</style>
