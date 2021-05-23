<template>
  <v-card
    class="mx-auto"
    max-width="800"
    min-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="headline mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      <div class="overline mb-4 pa-4 v-sheet theme--light rounded"><MainTable/></div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
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
    };
</script>