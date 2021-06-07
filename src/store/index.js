import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    main_info_data: [],
    ind_data: [],
    files: [],
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
    },
    files (state) {
      return state.files
    },
  },
  mutations: {
    addNewCompanyData (state, company_main_data, company_ind_data) {
      state.main_info_data.push(company_main_data);
      state.ind_data.push(company_ind_data);
    },
    /*getDataFromDatabase(){
      let formData = new FormData();
      formData.append('action', 'getDBContent');
      this.axios.post('http://localhost/report-loader-app-server/api.php',
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(data){
          console.log(data.data);
          this.state.main_info_data=data.data;
        })
        .catch(function(error){
          console.log('FAILURE IN QUERY!! ',error);
        });
    }*/
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
