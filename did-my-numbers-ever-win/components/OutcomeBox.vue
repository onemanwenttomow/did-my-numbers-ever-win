<template>
    <div class="outcome-container">
        <Spinner v-if="!giphyLoaded" />
        <h2 v-else>{{outComeText}} <span class="winning-amount" v-if="winningAmount">{{winningAmount}}</span></h2>
    </div>
</template>

<script>

import Spinner from '~/components/Spinner.vue';


export default {
    components: {
        Spinner
    },
    props: ['isWinningNumbers', 'winningAmount', 'giphyLoaded'],
    data() {
        return {
            outComeText: ''
        }
    },

    mounted: function() {
        console.log("outcomes box mounted!", this.isWinningNumbers);
        
        this.isWinningNumbers ?
            this.outComeText = 'Well this is awkward... you would have won: ' :
            this.outComeText = 'Phew... your numbers have never won!'
        
    }
}
</script>

<style>

.outcome-container {
    grid-column: 2/3;
    grid-row: 2/3;
    background-color: #F8E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
}

.winning-amount {
    font-size: 45px;
}

</style>