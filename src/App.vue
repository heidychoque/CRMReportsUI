<template>
  <v-app>
    <v-content>
      <NavBar/>
      <QuotesView/>
      
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue'
import QuotesView from '@/views/QuotesView.vue'

export default Vue.extend({
  name: 'App',

  components: {
    NavBar,
    QuotesView
  },

  data: () => ({
  }),
});
</script>
