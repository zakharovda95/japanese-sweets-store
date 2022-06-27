<template>
  <NCard hoverable>
    <div class="cover" :style="cover" />
    <div class="title">
      <UIText class="title" tag="NH6">{{ product.title }}</UIText>
    </div>
    <div class="cost">
      <UIText v-if="typeof cost === 'string'" class="full-price" type="primary" tag="NH4">
        {{ cost }}
      </UIText>
      <div class="with-sale" v-if="typeof cost === 'object'">
        <UIText strike class="full-price" type="error" tag="NH4"> {{ cost.fullPrice }}</UIText>
        <UIText class="full-price" type="primary" tag="NH4"> {{ cost.afterSale }}</UIText>
      </div>
    </div>
  </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductItem',
});
</script>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import { computed, defineProps, PropType } from 'vue';
import UIText from '@/components/ui/UIText.vue';
import { Product } from '@/helpers/types/stores-types/_products-page-store.type';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    default: () => ({}),
  },
});
const cover = computed<{ [key: string]: string }>(() => {
  return {
    'background-image': `url(${props.product.image})`,
    'background-size': 'cover',
    'background-position': 'center',
  };
});
const cost = computed<string | { [key: string]: string }>(() => {
  if (props.product.sale) {
    const priceAfterSale = (
      props.product.cost -
      props.product.cost * (props.product.sale / 100)
    ).toFixed(2);
    return {
      fullPrice: `$ ${props.product.sale}`,
      afterSale: `$ ${priceAfterSale}`,
    };
  }
  return `$ ${props.product.cost}`;
});
</script>

<style scoped lang="scss">
//@media (max-width: 389px) {
//  .n-card {
//    width: 100vw;
//    height: 100vw;
//    cursor: pointer;
//  }
//}
@media (max-width: 599px) {
  .n-card {
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    width: 85vw;
    height: 50vh;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      margin-top: 30px;
      width: 100%;
      height: 25%;
    }
    .cost {
      margin-top: -15px;
      height: 10%;
      flex-grow: 1;
      .with-sale {
        display: flex;
        justify-content: space-around;
        width: 100px;
        margin: 0 auto;
        align-self: center;
      }
    }
  }
}
@media (min-width: 600px) and (max-width: 799px) {
  .n-card {
    display: flex;
    cursor: pointer;
    width: 260px;
    height: 320px;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100%;
      height: 25%;
    }
    .cost {
      margin-top: 8px;
      height: 10%;
      flex-grow: 1;
      .with-sale {
        display: flex;
        justify-content: space-around;
        width: 100px;
        margin: 0 auto;
        align-self: center;
      }
    }
  }
}
@media (min-width: 800px) and (max-width: 1119px) {
  .n-card {
    display: flex;
    cursor: pointer;
    width: 250px;
    height: 320px;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100%;
      height: 25%;
    }
    .cost {
      margin-top: 8px;
      height: 10%;
      flex-grow: 1;
      .with-sale {
        display: flex;
        justify-content: space-around;
        width: 100px;
        margin: 0 auto;
        align-self: center;
      }
    }
  }
}
@media (min-width: 1120px) and (max-width: 1399px) {
  .n-card {
    display: flex;
    cursor: pointer;
    width: 230px;
    height: 300px;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100%;
      height: 25%;
    }
    .cost {
      margin-top: 8px;
      height: 10%;
      flex-grow: 1;
      .with-sale {
        display: flex;
        justify-content: space-around;
        width: 100px;
        margin: 0 auto;
        align-self: center;
      }
    }
  }
}
@media (min-width: 1400px) {
  .n-card {
    display: flex;
    cursor: pointer;
    width: 250px;
    height: 310px;
    .cover {
      width: 100%;
      height: 65%;
      background-size: cover;
      background-position: center;
    }
    .title {
      width: 100%;
      height: 25%;
    }
    .cost {
      height: 10%;
      flex-grow: 1;
      margin-top: 10px;
      .with-sale {
        display: flex;
        justify-content: space-around;
        width: 100px;
        margin: 0 auto;
        align-self: center;
      }
    }
  }
}
</style>
