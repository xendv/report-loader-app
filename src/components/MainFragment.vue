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
          <v-btn
          color="accent"
          elevation="2"
          >Показать все предприятия</v-btn>
        </v-row>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <div class="input_wrapper">
            <label for="file_selector">Загрузить файл</label>
            <input

            color="accent"
            elevation="2"
            id="file_selector"
            name="file_selector"
            accept=".csv, .dbf"
            class="v-btn input file_selector"
            type="file"
            @click="uploadDataClick"
            multiple
            
            />
            
          </div>

        </v-row>
      </v-col>
     

      <v-col
        class="mb-5"
        cols="12"
      >
      <v-row>
        <!--<h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>
        
         <div class="regular-page-area content-padding-40" style="margin-bottom: 5rem;">
                  <div class="container">
                      <div class="row">
                          <div class="col-12">
                              <div class="page-content white-bg show-main-block" style="display: none;" id="show-groups-block">
                                  <table id="main_info_tb" class="table">

                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>-->
        <Card/>
        </v-row>
        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import Card from './Card';


  export default {
    name: 'MainFragment',
    components: {
      Card,
    },

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],

    }),

    methods: {
      uploadDataClick: function(){
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
          //this.uploadFiles();
        }
        else console.log("Файл не выбран");
        //this.uploadFiles();
      },
      uploadFiles: function(fileList) {
        console.log("Сработал uploadFiles");
        var file=fileList[0]//document.getElementById('file_selector').files[0];
        if (file) { 
          console.log("Есть файл для загрузки");//upload(file);
          var xhr1 = new XMLHttpRequest(); // обработчик для закачки 
          xhr1.upload.onprogress = function(event) { 
            console.log(event.loaded + ' / ' + event.total);
          } // обработчики успеха и ошибки // если status == 200, то это успех, иначе ошибка 
          xhr1.onload = xhr1.onerror = function() { 
            if (this.status == 200) { console.log("success"); } 
            else { console.log("error " + this.status); }
          }; 
          xhr1.open("POST", "upload", true); 
          xhr1.send(file); 
          var formData = new FormData(); 
          formData.append("myfile", file); 
          xhr1.send(formData);
        }
        else console.log("Файлa нет");
    
      }
    }
  }
</script>
