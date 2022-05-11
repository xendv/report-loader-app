<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        scrollable
        persistent
        max-width="1200px"
    >
      <v-card>
        <v-card-title>Данные предприятия</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <CompanyDataTable/>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
              color="blue darken-1"
              text
              @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CompanyDataTable from './CompanyDataTable';

export default {
  components: {
    CompanyDataTable,
  },
  data() {
    return {
      dialogm1: '',
      dialog: false,
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.clearTempData()
    },
    clearTempData(){
      this.$store.state.ind_data=[];
    },
  },
  created: function () {
    this.$parent.$on('showCompanyDataTableDialog', this.openDialog);
  }
}
</script>