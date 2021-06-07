<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
         <span class="mr-2 shrink mt-1 hidden-sm-and-down">Report Loader Vue app</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Загрузить данные</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <MainFragment/>
    </v-main>
  </v-app>
</template>

<script>
import MainFragment from './components/MainFragment';

export default {
  name: 'App',

  components: {
    MainFragment,
  },

  data: () => ({
    //

  }),
};
</script>
