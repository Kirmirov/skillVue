<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{ name: 'product', params: {id: item.id}}">
      <img :src="item.img" :alt="item.name" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ item.name }}
      </a>
    </h3>

    <span class="catalog__price"> {{ item.price | numberFormat}} ₽ </span>

    <ColorPagination :isShortType="true" :colorStart.sync="colorStart"/>

  </li>
</template>

<script>

import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import ColorPagination from "@/chips/ColorPagination";


export default {
	data() {
		return {
			colorStart: 1
		}
	},
	components: {ColorPagination},
	props: {
		item: {
			type: Object,
			require: false,
		},
	},
	methods: {
		gotoPage,
	},
	filters: {
		numberFormat
	}
};
</script>

<style scoped></style>
