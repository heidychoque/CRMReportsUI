<template>
  <nav>
    <v-app-bar dark flat color="blue">
      <v-toolbar-title>Reports</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text 
      v-on:click="whichReports('soldQuotes')">Sold</v-btn>
      <v-btn text
      v-on:click="whichReports('pendingQuotes')">Pending</v-btn>
    </v-app-bar>
  </nav>  
</template>

<script>
export default {
  methods: {
      whichReports(option){
        this.$store.dispatch('requestData',option) 
        this.$store.dispatch('setType',option)
        this.$store.dispatch('setShow')
      }
  }
}
   
</script>
  