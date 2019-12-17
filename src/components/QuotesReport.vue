<template>
    <div class="quotesReportDiv gray">

        <p v-for="item in this.primaryItems" :key="item.quoteName">{{ item.quoteName}}</p>
        

        <v-card class="primaryCard purple ">
            <v-card-title>Quotings</v-card-title>
            <v-data-table class="generalTable"
            v-model="quoteSelected"
            :headers="primaryHeaders"
            :items="currentItems.length>0?currentItems:this.primaryItems"
            :single-select= true
            show-select
            :search="primarySearch"
            ></v-data-table>
        </v-card>

        <v-card class="secondCard blue">
            <v-card-title>Products</v-card-title>
            <v-data-table class="secondTable "
            :headers="secondHeaders"
            :items="quoteSelected.length>0?quoteSelected[0].quoteListItems:[]"
            :sort-by="['price', 'quantity']"
            :sort-desc="[false, true]"
            ></v-data-table>
        </v-card>

        <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    </div>
</template>

<script>


export default {
    mounted(){
        this.$store.dispatch('requestData',this.$route.name)
         /*if (this.$route.name === 'pendingQuotes') {
        
        this.loadData(Urls.pendingQuotesUrl) 
      }
      else{
          
          this.loadData(Urls.soldQuotesUrl) 
      }*/
    },
    computed : {
        /*quotes_data: function () {
            return this.$store.getters.getQuotes
        }*/
    },
    data:() => ({
        timeout: 2000,
     primarySearch: '',
     quoteSelected:[],
     currentItems:[],
     primaryHeaders: [
          {
            text: 'Quote Code',
            align: 'left',
            sortable: false,
            value: 'quoteName',
          },
          { text: 'Client', value: 'client.lastName' },
          { text: 'N.I.T.', value: 'client.ci' },
          { text: 'Date', value: 'date' },
          
        ],

      primaryItems: [],
      auxiliar:[],
      secondHeaders: [
          { text: 'Name', value: 'product' },
          { text: 'Price', value: 'price' },
          { text: 'Quantity', value: 'quantity' },
      ]

    })
    /* methods: {
        loadData(url) {
            quoteServices.getRequest(url)
            .then(response => {
                this.primaryItems = response.data
                console.log(response)
            })
            .catch(error => {
                console.log(error) 
            })
        }
     }*/
}
</script>

<style scoped>

    .generalTable{
        position: absolute;
        top: 8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }

    .secondTable{
        position:absolute;
        top:8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }

    .pendingSaleButton{
        position: absolute;
        top:80vh;
        left:30vw;
    }
    .soldButton{
        position: absolute;
        top:80vh;
        left:60vw;
    }

    .primaryCard{
        position: absolute;
        top:10vh;
        left: 5vw;
        height: 52vh;
        width: 45vw;
    }
    .secondCard{
        position: absolute;
        top:10vh;
        left: 52vw;
        height: 52vh;
        width: 45vw;
    }
    .quotesReportDiv{
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>
