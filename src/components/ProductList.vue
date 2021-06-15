<template>
  <ul class="catalog__list">
    <ProductItem v-for="(product, index) in products" :key="index" :item="product"></ProductItem>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  components: { ProductItem },
  props: {
    products: {
      type: Array
    }
  }
};
</script>

<style scoped></style>
