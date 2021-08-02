/* eslint-disable no-const-assign */
/* eslint-disable vue/return-in-computed-property */
<template>
	<component :is="currentPageComponent" :page-params="currentPageParams"></component>
</template>

<script>
	import MainPage from '@/pages/MainPage';
	import ProductPage from '@/pages/ProductPage';
	import NotFoundPage from '@/pages/NotFoundPage';
	import eventBus from '@/eventBus';
	
	const routes = {
		main: 'MainPage',
		product: 'ProductPage',

	}

export default {
	components: {
		MainPage,
		ProductPage,
		NotFoundPage,
	},
	data() {
		return {
			currentPage: 'main',
			currentPageParams: {

			}
		};
	},
	methods: {
		gotoPage (pageName, pageParams) {
			this.currentPage = pageName;
			this.currentPageParams = pageParams || {};
		}
	},
	computed: {
		currentPageComponent() {
			return routes[this.currentPage] || 'NotFoundPage';
		}
	},
	created() {
		eventBus.$on('gotoPage', (pageName, pageParams) => { this.gotoPage(pageName, pageParams)})
	}
};
</script>
