<template>
	<li class="cart__item product">
		<div class="product__pic">
			<img :src="item.product.img" width="120" height="120" :alt="item.product.name">
		</div>
		<h3 class="product__title">
			{{item.product.name}}
		</h3>
		<span class="product__code">
			{{item.product.id + '0' + item.product.categoryID + '0' + item.product.colorID}}
		</span>

		<CounterH :addFrame="true" :counterStart.sync="amount"/>

		<b class="product__price">
			{{item.amount * item.product.price | numberFormat}} ₽
		</b>

		<button @click="deleteProduct(item.productId)" class="product__del button-del" type="button" aria-label="Удалить товар из корзины">
			<svg width="20" height="20" fill="currentColor">
				<use xlink:href="#icon-close"></use>
			</svg>
		</button>
	</li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import CounterH from '@/chips/CounterH';
import { mapMutations } from 'vuex';

export default {
  components: { CounterH },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  filters: {
    numberFormat,
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    ...mapMutations({ deleteProduct: 'deleteProductFromCart' }),
  },
};
</script>

<style scoped>
button {
	cursor: pointer;
}
</style>
