import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './plugins/router'
import store from './store'
import maskFilters from '@/plugins/mask/maskFilters.js'

Vue.config.productionTip = false

// Create Masks
maskFilters.noSpecialCharacters()
maskFilters.setFilters()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
