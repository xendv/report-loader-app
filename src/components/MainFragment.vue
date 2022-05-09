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

       <!--<v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <v-btn
          color="accent"
          elevation="2"
          >Показать все предприятия</v-btn>
        </v-row>
      </v-col>-->
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
            <!--<button v-on:click="sendFileToServerByAxios()">Upload</button>
            <progress min="0" max="100" value="0">0% complete</progress>-->
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

  /*document.getElementById('input_wrapper').addEventListener('submit', function(ev){
    ev.preventDefault()
      });*/
  import Card from './Card';
  import UploadedDataDialog from './UploadedDataDialog';
  import CompanyDataDialog from './CompanyDataDialog';
  //import upload from '../scripts/upload.php';
  //import dataBaseManager from '../scripts/classes/dataBaseManager.php';


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
        /*const options={
          method: 'POST',
          headers: { 'content-type': 'application/form-data' },
          data: formData,
          url: 'api.php',
        }*/

        this.axios.post( 'http://localhost:3333/report-loader/rest/api/upload',//,'http://localhost/report-loader-app-server/api.php'
            formData,
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(data){
          console.log("Got data from file");
          console.log("DATA ",data);
          //console.log("PARSE DATA.DATA ",JSON.parse(data.data));
          //self.$store.temp_main_info_data=data.;
          //self.$store.temp_ind_data: [],
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

      /*uploadDataClick: function(){
        console.log("Сработал uploadDataClick");

        const fileSelector = document.getElementById('file_selector');
        fileSelector.addEventListener('change', (event) => {
          const fileList = event.target.files;
          console.log(fileList);
          this.uploadFiles(fileList);
        });
        var file = document.getElementById('file_selector').files[0];//this.file_selector.files[0]; 
        if (file) { 
          console.log("Успешно");//upload(file);
        }
        else console.log("Файл не выбран");
      },

      uploadFiles: function(fileList) {
        console.log("Сработал uploadFiles");
        var file=fileList[0]//document.getElementById('file_selector').files[0];
        if (file) { 
          console.log("Есть файл для загрузки");//upload(file);
          var xhr = new XMLHttpRequest(); // обработчик для закачки 
          xhr.upload.onprogress = function(event) { 
            console.log(event.loaded + ' / ' + event.total);
          } // обработчики успеха и ошибки // если status == 200, то это успех, иначе ошибка 
          xhr.onload = xhr.onerror = function() { 
            if (this.status == 200) { console.log("success"); } 
            else { console.log("error " + this.status); }
          }; 
          //console.log(this.$route);
          var upload_dir="upload";
          console.log("Директория для загрузки: ",upload_dir);
          xhr.open("POST", upload_dir, true); 

          var progressBar = document.querySelector('progress');
          xhr.upload.onprogress = function(e) { // <<<
            if (e.lengthComputable) {
              progressBar.value = (e.loaded / e.total) * 100;
              progressBar.textContent = progressBar.value; // Если браузер не поддерживает элемент progress
            }
          };
          xhr.onload = function() {
            if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
              alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
            } else { // если всё прошло гладко, выводим результат
              alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера

            }
          };
          //xhr.send(file); 
          var formData = new FormData(); 
          formData.append("file", file,); 
          xhr.send(formData);
        }
        else console.log("Файлa нет");
    
      }*/
    },
    created: function(){
      //this.$$children.UploadedDataDialog.$on('saveDataToDB');
    }
  }
</script>
