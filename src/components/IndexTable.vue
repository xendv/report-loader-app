<template>
  <v-data-table
    :headers="headers"
    :items="indexes"
    hide-default-footer
    class="elevation-1"

    
  >

  </v-data-table>
  
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Чистая прибыль', value: 'profit', sortable: false, },
          { text: 'Выручка', value: 'revenue', sortable: false, },
          { text: 'Средняя заработная плата', value: 'salary', sortable: false, },
          { text: 'Средняя численность работников', value: 'people', sortable: false, },
          { text: 'Кредиторская задолженность', value: 'payable', sortable: false, },
          { text: 'Дебиторская задолженность', value: 'receivable', sortable: false, },
        ],
        okpo:'',
        indexes: [
          {
            /*profit: '1',
            revenue: '12134335',
            salary: '1',
            people: '12134335',
            payable: '"Квадратные штаны"',
            recievable: '"Квадратные штаны"',*/
          },
         
        ],
      }

    },
    methods: {
      getIndexes() {
        let expanded_okpo=this.$store.state.last_expanded;
        let formData = new FormData();
        let self = this
          formData.append('action', 'getDBIndContent');
          formData.append('okpo', expanded_okpo);
          this.axios.post('http://localhost/report-loader-app-server/api.php',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log("Got indexes from DB for okpo=",expanded_okpo);
              console.log(data.data);
              console.log(JSON.stringify(data.data));

              //console.log(data.headers);
              self.indexes=data.data;
              
            })
            .catch(function(error){
              console.log('FAILURE IN INDEXES QUERY!! ',error);
            });
          //this.$store.state.main_info_data=data;
        
        },
          
    },
    created: function(){
      this.$parent.$on('getExpanded', this.getIndexes());
    },
    mounted: function(){
      //console.log(this.$parent.last_expanded);
      
    }
    /*watch: {
      addElement() {
         console.log(`We have ${this.$store.main_info} fruits now, yay!`)
      }
    }*/
  }
</script>