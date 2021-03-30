import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 在main.js中引入store，然后全局注入一下，这样就可以在任何一个组件里面使用它了：
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
