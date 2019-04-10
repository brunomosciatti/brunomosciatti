import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
//import Vue2Filters from 'vue2-filters'
//Vue.use(Vue2Filters)

window.axios = axios;

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
  //mixins: [Vue2Filters.mixin],
})
