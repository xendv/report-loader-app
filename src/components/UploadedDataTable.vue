<template>
  <v-data-table
    :headers="this.$store.state.temp_data_headers"
    :items="this.$store.state.temp_data"
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
          /*{ text: 'Чистая прибыль', value: 'profit', sortable: false, },
          { text: 'Выручка', value: 'revenue', sortable: false, },
          { text: 'Средняя заработная плата', value: 'salary', sortable: false, },
          { text: 'Средняя численность работников', value: 'people', sortable: false, },
          { text: 'Кредиторская задолженность', value: 'payable', sortable: false, },
          { text: 'Дебиторская задолженность', value: 'receivable', sortable: false, },
          */
        ],
        itemsFromFile: [
          /*{
            profit: '1',
            revenue: '12134335',
            salary: '1',
            people: '12134335',
            payable: '"Квадратные штаны"',
            recievable: '"Квадратные штаны"',
          },
         */
        ],
      }

    },
    methods: {
        fillUploadedData() {
          //this.itemsFromFile=this.$store.state.temp_data;
          //this.headers=this.$store.state.temp_data_headers;

          //console.log(Object.keys(this.itemsFromFile[0]));
          /*for (let header_name of Object.keys(this.itemsFromFile[0])){
            this.headers.push({text: header_name, value: header_name, sortable: false,} );
          }*/
          
          //console.log("HEADERS   ",this.headers, "  HEADERS");
          //this.$store.state.temp_data_headers=this.headers;
          
            //this.$store.state.main_info_data=data;
        
        },
        /*clearTempData(){
          this.headers=[];
          this.itemsFromFile=[];
          this.$store.temp_data=[];
        }*/
          
    },
    created: function(){
      //this.$parent.$on('fillData', this.fillUploadedData());
      //this.$parent.$on('clearTempData', this.clearTempData());
      //console.log("ХЭДЕРЫ   ",this.headers, "  ХЭДЕРЫ");
      //this.headers=[];
      
      //this.fillUploadedData();
      
      //this.$parent.$on('fillUploadedDataTable', this.fillUploadedData);
    },
    mounted: function(){
      //console.log(this.$parent.last_expanded);
      //this.headers=[];
      
      //this.fillUploadedData();
    }
    /*watch: {
      addElement() {
         console.log(`We have ${this.$store.main_info} fruits now, yay!`)
      }
    }*/
  }
</script>