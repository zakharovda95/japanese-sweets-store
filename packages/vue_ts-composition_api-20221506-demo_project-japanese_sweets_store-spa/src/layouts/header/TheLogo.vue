<template>
  <div class="container">
    <img id="logo" src="@/assets/images/logo.svg" alt="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheLogo',
});
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.container {
  display: flex;
  justify-content: center;
  height: 100%;

  #logo {
    display: flex;
    align-self: center;
    min-width: 260px;
    width: 14vw;
  }
}
</style>
