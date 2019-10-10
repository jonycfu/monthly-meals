import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules';


import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faShoppingBasket,
  faChartLine,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Font Awesome 5 */
library.add(
  faShoppingBasket,
  faChartLine,
  faCog
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Veelidate */
// Define Validation rules
extend('required', {
  ...required,
  message: 'This field is required'
});

/* production flag - warning message */
Vue.config.productionTip = false


Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
