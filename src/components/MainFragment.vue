<template>
  <v-container >
    <v-row class="text-center">
      <v-col cols="12">
        <!--<v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />-->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Добро пожаловать в Report Loader
        </h1>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <div class="input_wrapper" id="input_wrapper" >
            <label for="file_selector">Загрузить файл
            <input

            color="accent"
            elevation="2"
            id="file"
            ref="file"
            v-on:change="onChangeFileUpload()"
            
            name="file_selector"
            accept=".csv, .dbf"
            class="v-btn input file_selector"
            type="file"
            multiple
            
            />
            </label>
          </div>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      <v-row>
        <Card/>
        
        </v-row>
        <v-row justify="center">
          <!--<a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>-->
          
        </v-row>
        <UploadedDataDialog/>
        <CompanyDataDialog/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import Card from './Card';
  import UploadedDataDialog from './UploadedDataDialog';
  import CompanyDataDialog from './CompanyDataDialog';

  export default {
    name: 'MainFragment',
    components: {
      Card,
      UploadedDataDialog,
      CompanyDataDialog
    },

    data: () => ({
      file: '',
      ecosystem: [
      ],
      importantLinks: [
        
      ],
      whatsNext: [

      ],

    }),

    methods: {
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
        this.ext=''; 
        let parts = this.$refs.file.files[0].name.split('.');
        if (parts.length > 1) this.ext = parts.pop();
        this.sendFileToServerByAxios();
      },

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
          self.$emit('showCompanyDataTableDialog')
        })
            .catch(function (error) {
              console.log('FAILURE IN INDEXES QUERY!! ', error);
            });
      },

      sendFileToServerByAxios(){
        let formData = new FormData();
        formData.append('file', this.file);
        //formData.append('action', 'sendFileContent');
        //formData.append('type', this.ext);
        let self=this;
        this.axios.post( 'http://localhost:3333/report-loader/rest/api/upload',
            formData,
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(data){
          console.log("Got data from file");
          console.log("DATA ",data);
          console.log("DATA.DATA ",data.data);
          self.$store.state.temp_data=data.data;//JSON.parse(data.data);
          let temp_headers=[];
          for (let header_name of Object.keys(self.$store.state.temp_data[0])){
            temp_headers.push({text: header_name, value: header_name, sortable: false,} );
          }
          console.log("TEMP HEADERS ",temp_headers);
          self.$store.state.temp_data_headers=temp_headers;
          console.log("TEMP DATA ",self.$store.state.temp_data);
          self.$emit('showUploadedDataTableDialog');
        })
        .catch(function(error){
          console.log('FAILURE!! ',error);
        });
      },

      onSubmit(){ev =>{ev.preventDefault()}},

    },
    created: function(){
    }
  }
</script>
