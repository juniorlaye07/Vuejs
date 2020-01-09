import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
// C'est ici qu'on importe Materialize
import "materialize-css/dist/css/materialize.min.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
