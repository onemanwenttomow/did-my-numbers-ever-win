<template>
  <div class="container">
    <Card @userNumbers="checkForWinningResults"/>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      lottoResults: [],
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  methods: {
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

.container {
  width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;
  background-color: #F8E7E7;

}

</style>
