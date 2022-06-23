<template>
  <div class="filters-panel">
    <NCard hoverable>
      <div class="sort-by-price-wrap">
        <UIText tag="NH5">SORT BY</UIText>
        <NSelect
          class="sort-by-price"
          placeholder="By price"
          v-model:value="sortByPriceValue"
          :options="sortingByPriceOptions"
        />
      </div>
      <div class="price-range-wrap">
        <UIText tag="NH5">PRICE RANGE</UIText>
        <NSlider
          class="price-range"
          :min="range.min"
          :max="range.max"
          range
          v-model:value="priceRange"
        />
      </div>
      <div class="filter-by-brand-wrap">
        <UIText tag="NH5">FAVORITE BRANDS</UIText>
        <NSelect
          class="filter-by-brand"
          placeholder="By brand"
          v-model:value="filterByBrandValue"
          :options="sortingByPriceOptions"
        />
      </div>
      <div class="on-sale-only-wrap">
        <UIText tag="NH5">GOOD PRICE</UIText>
        <NCheckbox size="large"> Discount only </NCheckbox>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FiltersPanel',
});
</script>

<script setup lang="ts">
import { NCard, NSelect, NSlider, NCheckbox } from 'naive-ui';
import { computed, ref, watch, Ref } from 'vue';
import { sortingByPriceOptions } from '@/helpers/services/_product-filters.service';
import { useProductsPageStore } from '@/stores/products-page.store';
import UIText from '@/components/ui/UIText.vue';
import { getPriceRangeValues } from '@/helpers/methods/_products-filters.methods';

const products = computed(() => store.data);
const store = useProductsPageStore();
const sortByPriceValue = ref(null);
const filterByBrandValue = ref(null);
const priceRange = ref([1, 2]);
const range: { [key: string]: number } = {};
watch(
  products,
  () => {
    if (products.value) {
      priceRange.value = getPriceRangeValues(products.value);
      range.min = priceRange.value[0];
      range.max = priceRange.value[1];
    }
  },
  { immediate: true, deep: true },
);
</script>

<style scoped lang="scss">
@media (min-width: 1019px) {
  .filters-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    .sort-by-price {
      width: 150px;
    }
    .price-range {
      width: 155px;
    }
    .filter-by-brand {
      width: 150px;
    }
    .price-range-wrap,
    .on-sale-only-wrap,
    .filter-by-brand-wrap {
      margin-top: 34px;
    }
  }
}
</style>
