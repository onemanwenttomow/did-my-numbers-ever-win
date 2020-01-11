<template>
    <div class="outcome-container">
        <h2>{{outComeText}} <span v-if="winningAmount">{{winningAmount}}</span></h2>
    </div>
</template>

<script>

export default {
    props: ['isWinningNumbers', 'winningAmount'],
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

</style>