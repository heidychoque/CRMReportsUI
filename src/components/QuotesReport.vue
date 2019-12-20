<template>
    <div class="quotesReportDiv gray" v-if="showContent">
        <v-row>
            <h1 class="mx-auto my-3">{{ quotesType }}</h1>
        </v-row>
        <v-card class="primaryCard cyan accent-2">
            <v-card-title>Quotings</v-card-title>
            <v-data-table class="generalTable"
            v-model="quoteSelected"
            :headers="primaryHeaders"
            :items="currentItems.length>0?currentItems:quotesData"
            :single-select= true
            show-select
            :search="primarySearch"
            ></v-data-table>
        </v-card>

        <v-card class="secondCard teal accent-2">
            <v-card-title>Products</v-card-title>
            <v-data-table class="secondTable "
            :headers="secondHeaders"
            :items="quoteSelected.length>0?quoteSelected[0].quoteListItems:[]"
            :sort-by="['price', 'quantity']"
            :sort-desc="[false, true]"
            ></v-data-table>
        </v-card>
    </div>
</template>

<script>
import tableHeaders from '../tableHeaders.js'
export default {
    mounted(){
    },
    computed : {
        quotesData: function () {
            return this.$store.getters.getQuotes
        },
        quotesType: function () {
            return this.$store.getters.getType
        },
        showContent: function(){
            return this.$store.getters.getShow
        }
    },
    data:() => ({
        primarySearch: '',
        quoteSelected:[],
        currentItems:[],
        primaryHeaders: tableHeaders.quotingHeaders,
        primaryItems: [],
        auxiliar:[],
        secondHeaders: tableHeaders.productHeaders
    })
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
