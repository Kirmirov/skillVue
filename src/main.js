import Vue from 'vue';
import App from './App.vue';
// import {shortString, longString} from './data/stringData.js'
// import showAlert from './data/showAlert.js'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// showAlert(longString)
// showAlert(shortString)
