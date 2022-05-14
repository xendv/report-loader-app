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
         <UploadedDataTable/>
        </v-card-text>
        <v-divider></v-divider>
        
        <v-card-actions>

          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false, clearTempData()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false, saveDataToDB()"
          >
            Save
          </v-btn>

        </v-card-actions>
        
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import UploadedDataTable from './UploadedDataTable';

  export default {
    components: {
      UploadedDataTable,
    },
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
        saveDataToDB(){
          //this.$emit('fillData');
          //this.$emit('saveDataToDB');
          let formData = new FormData();
          let self = this
          formData.append('data_to_save', JSON.stringify(self.$store.state.temp_data));
          console.log("self.$store.state.temp_data: ",self.$store.state.temp_data);
          console.log("self.$store.state.temp_data JSON: ",JSON.stringify(self.$store.state.temp_data));

          this.axios.post('http://localhost:3333/report-loader/rest/api/upload/save',
              JSON.stringify(self.$store.state.temp_data),
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, post, get'
                }
              }
          ).then(function(){
              console.log("Data sent successfully");
              //console.log(response.data);
              //console.log(JSON.stringify(response.data));
              console.log("self.$store.state.temp_data: ",self.$store.state.temp_data);
              self.upd();
              /*let new_data=[];
              for (let arr of self.$store.state.temp_data){
                let new_obj=new Object();
                new_obj["name"]=arr["name"];
                new_obj["okpo"]=arr["okpo"];
                //console.log("---",arr,"---");
                new_data.push(new_obj);
              }
              //added new data to store
              console.log(new_data);
              self.$store.state.main_info_data.push(new_data);
              console.log(self.$store.state.main_info_data);*/
              //self.$store.state.temp_data=[];
              //console.log(self.$store.state.temp_data);

              //console.log(data.headers);
              //self.indexes=response.data;
              
            })
            .catch(function(error){
              console.log('FAILURE IN SEND DATA QUERY!! ', error);
            });
        },
        clearTempData(){
          this.$emit('clearTempData');
          this.$store.state.temp_data=[];
        },
        upd(){
          let self = this
          this.$store.state.temp_data.forEach(function(item) {
            var okpo = item["okpo"];
            var name = item["name"];
            var result = self.$store.state.main_info_data.find(obj => {  return obj["okpo"] === okpo;})
            if (result === undefined) {
              self.$store.state.main_info_data.push(item)
            }
            else if (result["name"] === undefined && name !== undefined) {
              result["name"] = name//медленно обновляется??
            }
          });
          this.clearTempData();
        }
    },
    created: function(){
        this.$parent.$on('showUploadedDataTableDialog', this.openDialog);
    }
  }
</script>