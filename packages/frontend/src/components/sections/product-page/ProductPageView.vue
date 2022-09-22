<template>
  <div class="product-view">
    <div class="content">
      <ProductCover class="cover" :image="product.image" />
      <div class="description-wrap">
        <UIText align="left" class="title">{{ product.title }}</UIText>
        <div class="rating-wrap">
          <NRate class="rate" :value="rate" @update:value="rate = $event" />
          <UIText align="left" class="rating" type="success" tag="NH3">
            Rating: {{ averageRating }}
          </UIText>
        </div>
        <UIText align="left" tag="NH3" type="#ffff" class="description">
          {{ product.description }}
        </UIText>
        <ProductCost font-size="NH1" class="price" :cost="product.cost" :sale="product.sale" />
        <AddToCart :product="product" class="add" />
      </div>
    </div>
    <ProductTabPane :details="product.details" class="tab-pane" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProductPageView',
});
</script>

<script setup lang="ts">
import ProductCover from '@/components/sections/common/ProductCover.vue';
import UIText from '@/components/ui/UIText.vue';
import ProductCost from '@/components/sections/common/ProductCost.vue';
import AddToCart from '@/components/sections/product-page/AddToCart.vue';
import ProductTabPane from '@/components/sections/product-page/ProductTabPane.vue';
import { NRate } from 'naive-ui';

import { Product } from '@/helpers/types/stores-types/_products-page-store.type';
import { useProductPageStore } from '@/stores/product-page.store';

import { computed } from 'vue';

const store = useProductPageStore();
const product = computed<Product | null>(() => store.data);

const rate = computed<number>({
  get() {
    return store.reviewData.rate;
  },
  set(val: number) {
    store.reviewData.rate = val;
  },
});

const rates = computed(() => {
  if (product.value) {
    return product.value?.reviews?.map(review => review.rate);
  } else {
    return null;
  }
});

const averageRating = computed<number | string>(() => {
  if (rates.value?.length) {
    return rates.value.reduce((a, b) => {
      if (rates.value) {
        return Math.round(a + b / rates.value.length || 1);
      }
    }, 0);
  } else {
    return 'No rating:( be first!';
  }
});
</script>

<style scoped lang="scss">
@media (max-width: 499px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .cover {
        display: flex;
        width: 80vw;
        height: 80vw;
        margin-bottom: 34px;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .rating-wrap {
          display: flex;
          justify-content: space-around;
          .rate {
            margin-top: 3px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
@media (min-width: 500px) and (max-width: 799px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      flex-direction: column;
      .cover {
        display: flex;
        width: 50vw;
        height: 50vw;
        margin: 0 auto;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        .title {
          text-align: center;
        }
        .rating-wrap {
          display: flex;
          justify-content: space-around;
          .rate {
            margin-top: 3px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
@media (min-width: 800px) and (max-width: 1019px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      justify-content: space-around;
      .cover {
        width: 32vw;
        height: 32vw;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        .rating-wrap {
          display: flex;
          justify-content: space-around;
          .rate {
            margin-top: 3px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
@media (min-width: 1020px) and (max-width: 1399px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      justify-content: space-around;
      .cover {
        width: 30vw;
        height: 30vw;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        .rating-wrap {
          display: flex;
          justify-content: space-around;
          .rate {
            margin-top: 3px;
          }
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
@media (min-width: 1400px) {
  .product-view {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 34px;
    background: #ffffff;
    padding: 24px;
    margin-bottom: 24px;
    .content {
      display: flex;
      margin-top: 34px;
      justify-content: space-around;
      .cover {
        width: 25vw;
        height: 25vw;
      }
      .description-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        .rating-wrap {
          display: flex;
          justify-content: space-around;
          .rate {
            margin-top: 3px;
          }
        }
      }
    }
  }
  .tab-pane {
    margin: 24px;
  }
}
</style>
