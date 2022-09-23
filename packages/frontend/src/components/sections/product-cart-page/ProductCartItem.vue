<template>
  <div class="product-cart-item">
    <div class="title-wrap" @click="goTo">
      <ProductCover class="cover" :image="cloneItem.product.image" />
      <div class="title">
        <UIText align="center" tag="NH2">{{ cloneItem.product.title }}</UIText>
      </div>
    </div>
    <div class="info-wrap">
      <div v-if="noEdit" class="amount">
        <span>{{ cloneItem.amount + ' pcs' }}</span>
      </div>
      <NInputNumber
        :min="0"
        :value="cloneItem.amount"
        @update:value="updateItem"
        bordered
        class="count"
        v-if="!noEdit"
      />
      <NButton
        v-if="!noEdit"
        @click="updateItem(0)"
        class="remove-btn"
        strong
        secondary
        circle
        type="error"
      >
        <template #icon>
          <NIcon><AddCircleOutlineTwotone style="transform: rotate(45deg)" /></NIcon>
        </template>
      </NButton>
      <div class="price">
        <ProductCost
          :cost="item.product.cost"
          :sale="item.product.sale"
          :amount="item.amount"
          font-size="NH3"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCartItem',
});
</script>

<script setup lang="ts">
import ProductCover from '@/components/sections/common/ProductCover.vue';
import UIText from '@/components/ui/UIText.vue';
import ProductCost from '@/components/sections/common/ProductCost.vue';
import { AddCircleOutlineTwotone } from '@vicons/material';
import { NInputNumber, NButton, NIcon } from 'naive-ui';

import { CartProductType } from '@/helpers/types/stores-types/_product-cart-store.type';
import { PageName } from '@/helpers/enums/_pages.enum';

import { cloneDeep } from 'lodash';
import { useRouter } from 'vue-router';
import { PropType, defineProps, computed, defineEmits, Ref } from 'vue';

const router = useRouter();

const emit = defineEmits(['custom:updateItem']);

const props = defineProps({
  item: {
    type: Object as PropType<CartProductType>,
    required: false,
    default: () => ({}),
  },
  noEdit: {
    type: Boolean,
    default: () => false,
  },
});

const cloneItem = computed(() => cloneDeep(props.item));

const updateItem = (e: number): void => {
  cloneItem.value.amount = e;
  emit('custom:updateItem', cloneItem.value);
};

const goTo = (e: Event): void => {
  if (!props.noEdit) {
    router.push({ name: PageName.productById, params: { productId: props.item.product?.id } });
  } else {
    e.preventDefault();
  }
};

const cursor: Ref<string> = computed(() => {
  return props.noEdit ? 'default' : 'pointer';
});
</script>

<style scoped lang="scss">
@media (max-width: 499px) {
  .product-cart-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title-wrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 70%;
      height: 100%;
      cursor: v-bind(cursor);
      .cover {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .title {
        margin-top: 15px;
        margin-right: 20px;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .amount {
        display: flex;
        margin: 0 24px;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          color: #3372e8;
        }
      }
      .remove-btn {
        margin-left: 10px;
        margin-right: 10px;
      }
      .price {
        margin-top: 20px;
      }
    }
  }
  .count {
    width: 80px;
  }
}

@media (min-width: 500px) and (max-width: 799px) {
  .product-cart-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title-wrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 70%;
      height: 100%;
      cursor: v-bind(cursor);
      .cover {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .title {
        margin-top: 15px;
        margin-right: 20px;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .amount {
        display: flex;
        margin: 0 24px;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          color: #3372e8;
        }
      }
      .remove-btn {
        margin-left: 10px;
        margin-right: 10px;
      }
      .price {
        margin-top: 20px;
      }
    }
  }
  .count {
    width: 80px;
  }
}

@media (min-width: 800px) and (max-width: 1019px) {
  .product-cart-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title-wrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 70%;
      height: 100%;
      cursor: v-bind(cursor);
      .cover {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .title {
        margin-top: 15px;
        margin-right: 20px;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .amount {
        display: flex;
        margin: 0 24px;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          color: #3372e8;
        }
      }
      .remove-btn {
        margin-left: 10px;
        margin-right: 10px;
      }
      .price {
        margin-top: 20px;
      }
    }
  }
  .count {
    width: 80px;
  }
}
@media (min-width: 1020px) and (max-width: 1399px) {
  .product-cart-item {
    width: 100%;
    display: flex;
    align-items: center;
    .title-wrap {
      display: flex;
      align-items: center;
      width: 70%;
      height: 100%;
      cursor: v-bind(cursor);
      .cover {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .title {
        margin-top: 15px;
        margin-right: 20px;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .amount {
        display: flex;
        margin: 0 24px;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          color: #3372e8;
        }
      }
      .remove-btn {
        margin-left: 10px;
        margin-right: 10px;
      }
      .price {
        margin-top: 20px;
      }
    }
  }
  .count {
    width: 80px;
  }
}
@media (min-width: 1400px) {
  .product-cart-item {
    width: 100%;
    display: flex;
    align-items: center;
    .title-wrap {
      display: flex;
      align-items: center;
      width: 70%;
      height: 100%;
      cursor: v-bind(cursor);
      .cover {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .title {
        margin-top: 15px;
        margin-right: 20px;
      }
    }
    .info-wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .amount {
        display: flex;
        margin: 0 24px;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          color: #3372e8;
        }
      }
      .remove-btn {
        margin-left: 10px;
        margin-right: 10px;
      }
      .price {
        margin-top: 20px;
      }
    }
  }
  .count {
    width: 80px;
  }
}
</style>
