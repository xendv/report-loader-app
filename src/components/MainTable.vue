<template>
  <v-data-table
      :headers="headers"
      :items="this.$store.state.main_info_data"
      :key="main_data_table"

      :items-per-page="5"
      item-key="okpo"
      class="elevation-1"

      focusable
      :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'

    }"
      :body="{

    }"
      min-width="1200"


  >
<!--    <template v-slot:item="props">
      <tr @click="showCompanyData(key, props.item[key])">
        <td v-for="(prop, key) in props.item" :key="key" >
          {{ props.item[key] }}
        </td>
      </tr>
    </template>-->
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">
        <p></p>
        <IndexTable/>
        <p></p>

      </td>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          class="mr-2"
          @click="showCompanyData(item)"
          aria-hidden="false"
      >
        mdi-chevron-down
      </v-icon>
    </template>
  </v-data-table>

</template>
<script>
import IndexTable from './IndexTable';

export default {
  components: {
    IndexTable
  },
  data() {
    return {
      main_data_table: 0,
      headers: [
        /*          {
                    text: 'id',
                    align: 'start',
                    value: 'id',
                  },*/
        {text: 'ОКПО', value: 'okpo'},
        {text: 'Название предприятия', value: 'name'},
        {text: 'Подробнее', value: 'actions', sortable: false}
      ],
      parentFragment: this.$parent.$parent.$parent.$parent
/*      expanded: [],
      singleExpand: false,*/
      /*data:{
        main_info: []
      },*/

      /*        main_info: [
                {
                  id: '1',
                  okpo: '12134335',
                  name: '"Квадратные штаны"',
                },*/
      /*{
        id: '2',
        okpo: '57692312',
        name: '"Ломай-убирай"',
      },
      {
        id: '3',
        okpo: '24547869',
        name: '"Всё в шоколаде"',
      },

    ],*/
    }

  },
  methods: {
    addElement: function () {
      /*this.$store.commit('addNewCompanyData', {id: '1',
      okpo: '12134335',
      name: '"Квадратные штаны"'}, {});
      this.consoleShowEditedItem();
      */
      //this.$store.commit('addNewCompanyData');

    },
    consoleShowEditedItem() {
      console.log(this.$store.state.main_info_data);
      //this.main_info = this.$store.main_info_data;
    },
    setLastExpanded({item}) {
      this.$store.state.last_expanded = item.okpo;
      this.$emit('getExpanded');
    },
    showCompanyData(item) {
      var pickedIndex = this.$store.state.main_info_data.indexOf(item)
      var pickedItem = Object.assign({}, item)
      console.log("Picked company to show with id " + pickedIndex + " and okpo " + pickedItem["okpo"])
      this.$store.state.last_expanded = pickedItem["okpo"]
      //this.parentFragment.$emit('showCompanyDataTableDialog')
      this.parentFragment.getIndexes()
    },

  },
  created: function () {
    let self = this
    this.axios.get('http://localhost:3333/report-loader/rest/api/main-info',//'http://localhost/report-loader-app-server/api.php',
        //formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    ).then(function (data) {
      console.log("Got main_info from DB");
      console.log(data.data);

      console.log(self.headers);
      self.$store.state.main_info_data = data.data;

    })
        .catch(function (error) {
          console.log('FAILURE IN QUERY!! ', error);
        });
    //console.log(this.headers);
    //this.$store.state.main_info_data=data;

  }

  /*watch: {
    addElement() {
       console.log(`We have ${this.$store.main_info} fruits now, yay!`)
    }
  }*/
}
</script>