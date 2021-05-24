import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    main_info_data: [],
    ind_data: [],
  },
  getters: {
    get_main_info_data(state){
        return state.main_info_data
    },
    get_ind_data(state){
      return state.ind_data
    },
    main_info (state) {
      return state.main_info_data
    }
  },
  mutations: {
    addNewCompanyData (state, company_main_data, company_ind_data) {
      state.main_info_data.push(company_main_data);
      state.ind_data.push(company_ind_data);
    }
  },
  watch: {

  },
  actions: {
    /*addCompanyData (state, company_main_data, company_ind_data){
      
    }*/
  },
  modules: {
  }
})
