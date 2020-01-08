<template>
    <div class="main-container">
      <Card @userNumbers="checkForWinningResults" @numbersLeft="decrementNumber"/>
      <NumbersLeft :numbersLeft=numbersLeft />
      <CheckButton v-if="checkButtonIsVisible" @userClicked="startChecking"/>
      <GifhyBox v-if="isChecking"/>
    </div>
</template>

<script>
import Card from '~/components/Card.vue';
import NumbersLeft from '~/components/NumbersLeft.vue'
import CheckButton from '~/components/CheckButton.vue'
import GifhyBox from '~/components/GifhyBox.vue'

export default {
  components: {
    Card,
    NumbersLeft,
    CheckButton,
    GifhyBox
  },
  data() {
    return {
      lottoResults: [],
      numbersLeft: 6,
      checkButtonIsVisible: false,
      isChecking: false
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  methods: {
    startChecking: function() {
      this.isChecking = true;
      this.checkButtonIsVisible = false
    },
    decrementNumber: function(num) {
      this.numbersLeft = num;
      if (num === 0) {
        this.checkButtonIsVisible = true;
      }
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
