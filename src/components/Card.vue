<template>
  <v-card
    class="mx-auto"
    max-width="1100"
    min-width="900"
    isHidden=true
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">
          OVERLINE
        </div> -->
        <v-list-item-title class="headline mb-1">
          Предприятия
        </v-list-item-title>
        <!-- overline ... <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
      <div class=" mb-4 pa-4 v-sheet theme--light rounded"><MainTable/></div>
      </v-list-item-content>
    </v-list-item>

    <!--<v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>-->
  </v-card>
</template>

<script>
    import MainTable from './MainTable';

    export default {
        name: 'Card',

        components: {
            MainTable,
        },

        data: () => ({
            //
        }),
        methods: {
          forceRerender() {
            this.main_data_table+=1;
          },
        }
    };
</script>