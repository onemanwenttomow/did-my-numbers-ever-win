<template>
    <div class="outcome-container">
        <Spinner v-if="!giphyLoaded" />
        <h2 v-else>{{outComeText}} <span class="winning-amount" v-if="winningAmount">{{winningAmount}}</span></h2>
        <button v-if="giphyLoaded" class="btn" @click="$emit('restart')">Try Again?</button>
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
    grid-row: 3/4;
    background-color: #F8E7E7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.winning-amount {
    font-size: 40px;
}

@media screen and (min-width: 320px) and (max-width: 667px) {

    .outcome-container {
        grid-column: 1/-1;
        grid-row: 4/5;
    }

}


</style>