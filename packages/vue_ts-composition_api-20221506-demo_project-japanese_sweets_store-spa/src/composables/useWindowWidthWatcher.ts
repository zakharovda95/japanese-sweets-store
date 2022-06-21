/** Вотчер на изменение ширины экрана (нужен в некоторых компонентах) **/

import { onBeforeUnmount, ref, onMounted, Ref } from 'vue';

export function useWindowWidthWatcher(): { widthX: Ref<number> } {
  const widthX: Ref<number> = ref(0);

  const watchSize = (): number => (widthX.value = window.innerWidth);

  onMounted((): void => {
    window.addEventListener('resize', watchSize);
  });

  onBeforeUnmount((): void => {
    window.removeEventListener('resize', watchSize);
  });
  return { widthX };
}
