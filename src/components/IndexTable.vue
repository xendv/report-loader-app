<template>
  <v-data-table
      :headers="headers"
      :items="this.$store.state.ind_data"
      hide-default-footer
      class="elevation-1"
  >

  </v-data-table>

</template>
<script>
export default {
  data() {
    return {
      headers: [
        {text: 'Чистая прибыль', value: 'profit', sortable: false,},
        {text: 'Выручка', value: 'revenue', sortable: false,},
        {text: 'Средняя заработная плата', value: 'salary', sortable: false,},
        {text: 'Средняя численность работников', value: 'people', sortable: false,},
        {text: 'Кредиторская задолженность', value: 'payable', sortable: false,},
        {text: 'Дебиторская задолженность', value: 'receivable', sortable: false,},
      ],
      //okpo: '',
      indexes: [
        /*{
          /*ofit: '1',
          revenue: '12134335',
          salary: '1',
          people: '12134335',
          payable: '"Квадратные штаны"',
          recievable: '"Квадратные штаны"',
          },*/

      ],
    }

  },
  methods: {
    getIndexes() {
      let expanded_okpo = this.$store.state.last_expanded;
      let self = this
      this.axios.get('http://localhost:3333/report-loader/rest/api/company-info/' + expanded_okpo,//'http://localhost/report-loader-app-server/api.php',
          {
          }
      ).then(function (data) {
        console.log("Got indexes from DB for okpo=", expanded_okpo);
        console.log(data.data);
        self.$store.state.ind_data = data.data;
        console.log(self.$store.state.ind_data);
        self.$parent.openDialog()
        //self.$emit('showCompanyDataTableDialog')
      })
          .catch(function (error) {
            console.log('FAILURE IN INDEXES QUERY!! ', error);
          });
    },
    clearIndexes() {
      //this.indexes = []
      this.$store.state.ind_data = []
    },
    /*upd(){
      let self = this
      this.$store.state.temp_ind_data.forEach(function(item) {
        self.$store.state.ind_data.push(item)
      });
      this.clearTempData();
    }*/
  },
  created: function () {
  },
  mounted: function () {
  }
  /*watch: {
    addElement() {
       console.log(`We have ${this.$store.main_info} fruits now, yay!`)
    }
  }*/
}
</script>