import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

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
