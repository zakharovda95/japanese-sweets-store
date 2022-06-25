<template>
  <div class="filters-panel">
    <NCard class="card" hoverable>
      <div class="sort-by-price-wrap">
        <UIText tag="NH5">{{ ProductsFiltersTitles.sortBy }}</UIText>
        <NSelect
          class="sort-by-price"
          placeholder="By price"
          v-model:value="filters.sortByPrice"
          :options="sortingByPriceOptions"
        />
      </div>
      <div class="price-range-wrap">
        <UIText tag="NH5">{{ ProductsFiltersTitles.priceRange }}</UIText>
        <NSlider
          class="price-range"
          :min="range.min"
          :max="range.max"
          range
          v-model:value="filters.priceRange"
        />
      </div>
      <div class="filter-by-brand-wrap">
        <UIText tag="NH5">{{ ProductsFiltersTitles.brands }}</UIText>
        <NSelect
          class="filter-by-brand"
          placeholder="By brand"
          v-model:value="filters.filterByBrand"
          :options="brandsOptions"
        />
      </div>
      <div class="on-sale-only-wrap">
        <UIText tag="NH5">{{ ProductsFiltersTitles.goodPrice }}</UIText>
        <NCheckbox v-model:checked="filters.onlySaleProducts" size="large">
          Discount only
        </NCheckbox>
      </div>
      <NButton @click="filter" class="button" type="primary">Apply</NButton>
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
import { NCard, NSelect, NSlider, NCheckbox, NButton } from 'naive-ui';
import { computed, ref, defineEmits } from 'vue';
import { filtersSchema, sortingByPriceOptions } from '@/helpers/services/_product-filters.service';
import { useProductsPageStore } from '@/stores/products-page.store';
import UIText from '@/components/ui/UIText.vue';
import {
  createOptionsForFilteringByBrand,
  getPriceRangeValues,
} from '@/helpers/methods/_products-filters.methods';
import { FiltersType, SelectOptionType } from '@/helpers/types/_products-filters.type';

import { ProductsFiltersTitles } from '@/helpers/enums/_product-filters.enum';
import { cloneDeep } from 'lodash';

const emits = defineEmits(['custom:closeModal']);

const products = computed(() => store.data);
const store = useProductsPageStore();
const filters = ref<FiltersType>(cloneDeep(filtersSchema));
const range: { [key: string]: number } = {};
let brandsOptions: null | Array<SelectOptionType> = null;

const filter = (): void => {
  store.filterProducts(filters.value);
  emits('custom:closeModal');
};

if (products.value) {
  brandsOptions = createOptionsForFilteringByBrand(products.value);
  filters.value.priceRange = getPriceRangeValues(products.value);
  range.min = filters.value.priceRange[0];
  range.max = filters.value.priceRange[1];
}
</script>

<style scoped lang="scss">
@media (max-width: 700px) {
  .filters-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80vw;
    .sort-by-price {
      width: 60vw;
    }
    .price-range {
      width: 60vw;
    }
    .filter-by-brand {
      width: 60vw;
    }
    .price-range-wrap,
    .on-sale-only-wrap,
    .filter-by-brand-wrap {
      margin-top: 34px;
    }
    .button {
      margin-top: 24px;
      margin-left: 12vw;
    }
  }
}
@media (max-width: 1020px) {
  .filters-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 60vw;
    .sort-by-price {
      width: 30vw;
    }
    .price-range {
      width: 30vw;
    }
    .filter-by-brand {
      width: 30vw;
    }
    .price-range-wrap,
    .on-sale-only-wrap,
    .filter-by-brand-wrap {
      margin-top: 34px;
    }
    .button {
      margin-top: 24px;
      margin-left: 12vw;
    }
  }
}
@media (min-width: 1020px) {
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
    .button {
      margin-top: 24px;
      margin-left: 45px;
    }
  }
}
</style>
