import Vue from 'vue' //cerca nel node_modules
import App from './App.vue'

import {doThis} from './test' //con ./ cerca a partire dalla directory di questo file

Vue.config.productionTip = false

 doThis();

new Vue({
  render: h => h(App),
}).$mount('#app')
