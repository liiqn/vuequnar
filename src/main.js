// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from 'store'
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://cdn.instantshift.com/wp-content/uploads/2016/01/free-gif-preloaders-psds-20.gif',
  loading: 'http://img.zcool.cn/community/011b3258a43dbca801219c77052250.gif',
  attempt: 1
})

const bus = new Vue()
Vue.prototype.$bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
