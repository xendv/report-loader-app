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
          <IndexTable/>
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
import IndexTable from './IndexTable';

export default {
  components: {
    IndexTable,
  },
  data() {
    return {
      dialogm1: '',
      dialog: false,
    }
  },
  methods: {
    openDialog() {
      this.$emit('fillCompanyDataTable');
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.$emit('clearCompanyDataTable');
    },
    loadDialog() {
      //this.dialog = false;
      this.$emit('fillCompanyDataTable');
    },
  },
  created: function () {
    this.$parent.$on('loadCompanyDataTableDialog', this.loadDialog);
    this.$parent.$on('showCompanyDataTableDialog', this.openDialog);
    //this.$children.pop().$on('showCompanyDataTableDialog', this.openDialog)
    //this.$on('showCompanyDataTableDialog', this.openDialog);
  }
}
</script>