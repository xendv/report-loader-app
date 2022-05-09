import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    main_info_data: [],
    ind_data: [],
    files: [],
    temp_main_info_data: [],
    //temp_ind_data: [],
    temp_data: [],
    temp_data_headers: [],
    last_expanded: null,
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
    addNewCompanyData () {
      /*state.main_info_data.push(company_main_data);
      state.ind_data.push(company_ind_data);
      
      let new_data=[];
      for (let arr of self.$store.state.temp_data){
        let new_obj=new Object();
        new_obj["name"]=arr["name"];
        new_obj["okpo"]=arr["okpo"];
        //console.log("---",arr,"---");
        new_data.push(new_obj);
      }
      //added new data to store
      console.log(new_data);
      state.main_info_data.push(new_data);
      console.log(self.$store.state.main_info_data);*/
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
