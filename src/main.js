// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  loading: require('./common/image/default.png')
})
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
