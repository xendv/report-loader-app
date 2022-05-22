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
        {text: 'Отчетный год', value: 'reporting_year', sortable: true,},
        {text: 'Чистая прибыль', value: 'profit', sortable: true, default: '-'},
        {text: 'Выручка', value: 'revenue', sortable: true,},
        {text: 'Средняя заработная плата', value: 'salary', sortable: true,},
        {text: 'Средняя численность работников', value: 'people', sortable: true,},
        {text: 'Кредиторская задолженность', value: 'payable', sortable: true,},
        {text: 'Дебиторская задолженность', value: 'receivable', sortable: true,},
      ],
      indexes: [
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
      })
          .catch(function (error) {
            console.log('FAILURE IN INDEXES QUERY!! ', error);
          });
    },
    clearIndexes() {
      this.$store.state.ind_data = []
    },
  },
  created: function () {
  },
  mounted: function () {
  }
}
</script>