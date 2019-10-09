import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules';

Vue.config.productionTip = false

// Add a rule.
extend('required', {
  ...required,
  message: 'This field is required'
});



Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env.VUE_APP_NUTRITIONIX_API_KEY);