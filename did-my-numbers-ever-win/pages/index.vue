<template>
    <div class="main-container">
      <Card @userNumbers="checkForWinningResults" @numbersLeft="decrementNumber"/>
      <NumbersLeft :numbersLeft=numbersLeft />
      <CheckButton v-if="checkButtonIsVisible" @userClicked="startChecking"/>
      <GifhyBox v-if="showGiphyBox" :query=gipyhQuery :key="gipyhQuery"/>
      <Spinner v-if="showSpinner"/>
      <OutcomeBox v-if="!showSpinner && showGiphyBox" :isWinningNumbers=didNumbersWin />
    </div>
</template>

<script>
import Card from '~/components/Card.vue';
import NumbersLeft from '~/components/NumbersLeft.vue'
import CheckButton from '~/components/CheckButton.vue'
import GifhyBox from '~/components/GifhyBox.vue'
import Spinner from '~/components/Spinner.vue'
import OutcomeBox from '~/components/OutcomeBox.vue'

export default {
  components: {
    Card,
    NumbersLeft,
    CheckButton,
    GifhyBox, 
    Spinner, 
    OutcomeBox
  },
  data() {
    return {
      lottoResults: [],
      numbersLeft: 6,
      checkButtonIsVisible: false,
      showGiphyBox: false, 
      gipyhQuery: '',
      didNumbersWin: false,
      showSpinner: false
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  methods: {
    startChecking: function() {
      this.showGiphyBox = true;
      this.checkButtonIsVisible = false;
      this.gipyhQuery = 'nervous';
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        this.didNumbersWin ? 
          this.gipyhQuery = 'awkward' :
          this.gipyhQuery = 'relief'
      }, 5000);
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
        this.didNumbersWin = true;
      } else {
        console.log("no winner!")
      }
    },
  },
}
</script>

<style>

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  margin: 0 auto;
}

</style>
