<template>
  <div class="d-flex justify-center mb-6" >
    <v-alert
        class="text-center"
        :value="!!alert['message']"
        type="error"
        dismissible
        outlined
        border="left"
        @input="closeAlert"
        name="errorAlert"
        width=600px
    >{{ alert['message'] }}
    </v-alert
    >
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Alert.vue",
  computed: {
    ...mapState(["alert"])
  },

  methods: {
    closeAlert() {
      this.$store.state.alert['message'] = null
    },
    openAlert() {
      //this.isShown = true
      console.log(this.$parent)
    },
  }
}
</script>

<style scoped>

</style>