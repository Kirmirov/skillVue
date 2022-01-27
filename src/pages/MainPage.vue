<template>
	<main class="content container">
		<div class="content__top content__top--catalog">
			<h1 class="content__title">
				Каталог
			</h1>
			<span class="content__info">
				152 товара
			</span>
		</div>

		<div class="content__catalog">
			<ProductFilter 	:price-from.sync="filterPriceFrom"
								:price-to.sync="filterPriceTo"
								:category-id.sync="filterCategoryID"
								:item-color-id.sync="filterItemColorID"/>
			<section class="catalog">
				<Loader v-if="productsLoading"/>
				<ProductList v-else :products="products" />
				<div v-if="productsLoadingFailed">
					<h3>Произошла ошибка при загрузке товара</h3>
					<button @click="loadProducts()">Повторить</button>
				</div>
				<BasePagination v-model="page"
								:count="countProducts"
								:per-page="productPerPage" />
			</section>
		</div>
  </main>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import Loader from '@/chips/Loader.vue';
import axios from 'axios';
import { API_BASE_URL } from '@/config';

export default {
  components: {
    ProductList, BasePagination, ProductFilter, Loader,
  },
  name: 'MainPage',
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryID: 0,
      filterItemColorID: 0,
      page: 1,
      productPerPage: 3,
      productsData: null,
      productsLoading: false,
      productsLoadingFailed: false,

    };
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          img: product.image.file.url,
          name: product.title,
        }))
        : [];
    },
    countProducts() {
      return this.productsData
        ? this.productsData.pagination.total
			 	: 0;
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryID() {
      this.loadProducts();
    },
    filterItemColorID() {
      this.loadProducts();
    },
  },
  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productPerPage,
            categoryId: this.filterCategoryID,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
            colorId: this.filterItemColorID,
          },
        })
          .then((response) => this.productsData = response.data)
          .catch(() => this.productsLoadingFailed = true)
          .then(() => this.productsLoading = false);
      }, 1000);
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
