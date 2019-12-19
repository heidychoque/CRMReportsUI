<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Quotes Reports</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text 
      v-on:click="whichReports('soldQuotes')">Sold</v-btn>
      <v-btn text
      v-on:click="whichReports('pendingQuotes')">Pending</v-btn>

    </v-toolbar>
  </div>  
</template>

<script>

export default {
    methods: {
        whichReports(option){
          this.$store.dispatch('requestData',option) 
        }
    }
}
   
</script>
  