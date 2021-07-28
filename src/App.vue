/* eslint-disable no-const-assign */
/* eslint-disable vue/return-in-computed-property */
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
						:item-color.sync="filterItemColor"/>
      <section class="catalog">
        <ProductList :products="products" />
        <BasePagination v-model="page" :count="countProducts" :per-page="productPerPage" />
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  components: { ProductList, BasePagination, ProductFilter },
  name: 'App',
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryID: 0,
	  filterItemColor: "",
      page: 1,
      productPerPage: 6,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryID > 0) {
        filteredProducts = filteredProducts.filter((product) => product.categoryID === this.filterCategoryID);
      }
	  
	  if (this.filterItemColor != "") {
		filteredProducts = filteredProducts.filter((product) => product.color === this.filterItemColor);
	  }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      const limit = offset + this.productPerPage;
      return this.filteredProducts.slice(offset, limit);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
