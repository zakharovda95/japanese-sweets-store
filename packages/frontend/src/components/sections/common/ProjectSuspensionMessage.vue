<template>
  <div class="project-suspension-message">
    <UIText color="#ff69b4" :tag="widthX > 480 ? HeaderSize.h1 : HeaderSize.h2">
      Извините... Эта страница будет доступна во второй части проекта!
    </UIText>
    <UIText :tag="widthX > 480 ? HeaderSize.h2 : HeaderSize.h3">
      В данный момент все свое свободное время я уделяю участию в стартап-проекте, в котором мы
      реанимируем популярную ранее браузерную игру "CastleWars"
    </UIText>
    <UIText type="error" :tag="widthX > 480 ? HeaderSize.h2 : HeaderSize.h3">
      (Вы можете перейти по <a href="#">ссылке</a> и посмотреть текущую задеплоиную версию нашего
      проекта.)
    </UIText>
    <UIText :tag="widthX > 480 ? HeaderSize.h2 : HeaderSize.h3">
      Но как только появится возможность я продолжу разработку этого демо-проекта и реализую все что
      планировал, но не успел, а именно: <br />
      1) Авторизацию и аутенитификацию со Strapi;<br />
      2) Личный кабинет, с возможностью настройки профиля;<br />
      3) История закзов, история отзывов;<br />
      4) Количество товаров "на складе", которое будет высчитываться исходя из сделанных заказов, с
      переодическим автообновлением;<br />
      5) Отчеты о сделанных заказах на вашу почту;<br />
      6) Систему отзывов (будут отзывы "покупателей", пока что доступен только средний рейтинг товара);<br />
      7) Админка со Strapi;<br />
    </UIText>
    <UIText color="#ff69b4" :tag="widthX > 480 ? HeaderSize.h1 : HeaderSize.h2">
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
