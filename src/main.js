import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(vuex)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  watch: {
    
  },
  /*computed:{
    main_info () {
      return store.state.main_info_data
    }
  }*/
}).$mount('#app')
