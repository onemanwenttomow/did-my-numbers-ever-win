<template>
    <div class="main-container">
      <Card @userNumbers="checkForWinningResults" @numbersLeft="decrementNumber"/>
      <NumbersLeft :numbersLeft=numbersLeft />
    </div>
</template>

<script>
import Card from '~/components/Card.vue';
import NumbersLeft from '~/components/NumbersLeft.vue'


export default {
  components: {
    Card,
    NumbersLeft
  },
  data() {
    return {
      lottoResults: [],
      numbersLeft: 6
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  methods: {
    decrementNumber: function(num) {
      console.log("num:", num);
      this.numbersLeft = num;
    },
    checkForWinningResults: function(userNumbers) {
      const winningNumbers = this.lottoResults.filter(el => {
        if (el.winningNumbers
        .sort((a, b) => a - b)
        .toString() === 
        userNumbers
        .sort((a, b) => a - b)
        .toString()) {
          return el 
        }
      });
      console.log(winningNumbers, userNumbers)
      if (winningNumbers.length > 0) {
        console.log("winner!!!", winningNumbers[0].jackpot)
      } else {
        console.log("no winner!")
      }
    },
  },
}
</script>

<style>

.main-container {
  width: 500px;
  margin: 0 auto;
}

</style>
