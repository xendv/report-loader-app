<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      persistent
      max-width="900px"
    >
      <v-card>
        <v-card-title>Данные из загруженного файла</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        
        <v-card-actions>

          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>

        </v-card-actions>
        
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
    methods: {
        openDialog(){
            this.dialog = true;
        },
    },
    created: function(){
        this.$parent.$on('showUploadedDataTableDialog', this.openDialog);
    }
  }
</script>