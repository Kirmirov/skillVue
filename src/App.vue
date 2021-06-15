<template>
  <section class="catalog">
    <ProductList :products="products"/>
    <BasePagination v-model="page" :count="countProducts" :per-page="productPerPage"/>
  </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';

export default {
  components: { ProductList, BasePagination },
  name: 'App',
  data() {
    return {
      page: 1,
      productPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      const limit = offset + this.productPerPage;
      return products.slice(offset, limit);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
