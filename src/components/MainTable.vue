<template>
  <v-data-table
    :headers="headers"
    :items="this.$store.state.main_info_data"
    :items-per-page="5"
    item-key="okpo"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'

    }"
    
  >
  <!--<template v-slot:top>
    <v-toolbar flat>
      <v-btn
        outlined
        rounded
        text
        
        
      >
        Добавить стандартный элемент
      </v-btn>
       <v-dialog
          
          max-width="500px"
          
        >
       <template v-slot:activator="{ on, attrs }">
        <v-btn
        outlined у v-dialog : v-model="dialog"
        rounded  v-bind="attrs"
            v-on="on"
        text
        v-bind="attrs"
        v-on="on"
      >
        Button
      </v-btn>
      </template>
      </v-dialog>
    </v-toolbar>
  </template>-->
  </v-data-table>
  
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'id',
            align: 'start',
            value: 'id',
          },
          { text: 'ОКПО', value: 'okpo' },
          { text: 'Название предприятия', value: 'name' },
        ],
        /*data:{
          main_info: []
        },*/
        
        main_info: [
          {
            id: '1',
            okpo: '12134335',
            name: '"Квадратные штаны"',
          },
          /*{
            id: '2',
            okpo: '57692312',
            name: '"Ломай-убирай"',
          },
          {
            id: '3',
            okpo: '24547869',
            name: '"Всё в шоколаде"',
          },
        */
        ],
      }

    },
    methods: {
          addElement: function() {
            this.$store.commit('addNewCompanyData', {id: '1',
            okpo: '12134335',
            name: '"Квадратные штаны"'}, {});
            this.consoleShowEditedItem();
          },
          consoleShowEditedItem() {
            console.log(this.$store.state.main_info_data);
            //this.main_info = this.$store.main_info_data;
            }
    },
    created: function(){
      
      let formData = new FormData();
      let self = this
        formData.append('action', 'getDBMainContent');
        this.axios.post('http://localhost/report-loader-app-server/api.php',
              formData,
              {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function(data){
            console.log("Got main_info from DB");
             console.log(data.data);
            console.log(JSON.stringify(data.data));

            //console.log(data.headers);
            self.$store.state.main_info_data=data.data;
            
          })
          .catch(function(error){
            console.log('FAILURE IN QUERY!! ',error);
          });
        //this.$store.state.main_info_data=data;
      
    }
    /*watch: {
      addElement() {
         console.log(`We have ${this.$store.main_info} fruits now, yay!`)
      }
    }*/
  }
</script>