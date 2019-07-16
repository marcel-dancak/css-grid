import Vue from 'vue'
import Select from 'buefy/dist/components/select'
import Checkbox from 'buefy/dist/components/checkbox'

import App from './App.vue'

Vue.use(Select)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
