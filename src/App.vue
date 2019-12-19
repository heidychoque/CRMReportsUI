<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <QuotesView/>
      
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Toolbar from '@/components/Toolbar.vue'
import QuotesView from '@/views/QuotesView.vue'

export default Vue.extend({
  name: 'App',

  components: {Toolbar,QuotesView},

  data: () => ({
  }),
});
</script>
