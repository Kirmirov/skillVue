<template>
	<main class="content container">
		<div class="content__top">
			<ul class="breadcrumbs">
				<li class="breadcrumbs__item">
					<router-link class="breadcrumbs__link" :to="{name: 'main'}">
						Каталог
					</router-link>
				</li>
				<li class="breadcrumbs__item">
					<a class="breadcrumbs__link">
						Корзина
					</a>
				</li>
			</ul>

			<h1 class="content__title">
				Корзина
			</h1>
			<span class="content__info">
				{{productCount}} {{countName}}
			</span>
		</div>

		<section class="cart">
			<form class="cart__form form" action="#" method="POST">
				<div class="cart__field">
					<ul class="cart__list">
						<CartItem v-for="item in products" :key="item.productId" :item="item"/>
					</ul>
				</div>

				<div class="cart__block">
					<p class="cart__desc">
						Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
					</p>
					<p class="cart__price">
						Итого: <span>{{totalPrice | numberFormat}} ₽</span>
					</p>

					<button class="cart__button button button--primery" type="submit">
						Оформить заказ
					</button>
				</div>
			</form>
    	</section>
  	</main>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import {mapGetters} from 'vuex';
import CartItem from '@/components/CartItem';

export default {
	components: {CartItem},
	filters: {
		numberFormat
	},
	computed: {
		...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', productCount: 'cartTotalProduct'}),
		countName(){
			if (this.productCount == 11 || this.productCount == 12 || this.productCount == 13 || this.productCount == 14)
				return 'товаров';
			else if (this.productCount % 10 == 1)
				return 'товар';
			else if (this.productCount % 10 == 2 || this.productCount % 10 == 3 || this.productCount % 10 == 4)
				return 'товара';
			else
				return 'товаров';
		}
	},
}
</script>