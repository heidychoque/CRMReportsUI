<template>
  <div class="Quotes" >
    <v-row>
    <h1 class="mx-auto mt-10">Quotes Reports</h1>
    </v-row>
    <QuotesReport/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import QuotesReport from '../components/QuotesReport.vue'


export default Vue.extend({
  components: {

   QuotesReport
  }
})
</script>