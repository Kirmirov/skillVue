import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_BASE_URL } from '../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      // productId: this.product.id, amount: this.productAmount
    ],
    userAccessKey: null,
    catrProductsData: [],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) item.amount += amount;
      else {
        state.cartProducts.push({
          productId,
          amount,
        });
      }
    },
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) item.amount = amount;
    },
    deleteProductFromCart(state, productId) {
      state.cartProducts.forEach((item, i, arr) => {
        if (item.productId === productId) arr.splice(i, 1);
      });
    },
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.catrProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.catrProductsData.map((item) => ({
        productId: item.product.id,
        amount: item.quantity,
      }));
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const { product } = state.catrProductsData.find((p) => p.product.id === item.productId);

        return {
          ...item,
          product:
					{
					  ...product,
					  image: product.image.file.url,
					},
        };
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    cartTotalProduct(state) {
      return state.cartProducts.length;
    },
  },
  actions: {
    loadCart(context) {
      axios
        .get(`${API_BASE_URL}/api/baskets`, {

          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey);
            context.commit('updateUserAccessKey', response.data.user.accessKey);
          }

          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        });
    },
  },
});
