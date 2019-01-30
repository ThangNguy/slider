// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAii2mWgm46qCqQC2VmgkBIkueuqMAG2eQ",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


