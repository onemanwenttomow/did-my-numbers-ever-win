<template>
    <fragment>
      <Card @userNumbers="checkForWinningResults" @numbersLeft="decrementNumber"/>
      <NumbersLeft :numbersLeft=numbersLeft :showStartMessage=showStartMessage />
      <CheckButton v-if="checkButtonIsVisible" @userClicked="startChecking" :numbersLeft=numbersLeft :key=numbersLeft />
      <GifhyBox v-if="showGiphyBox" :query=gipyhQuery :key="gipyhQuery" @giphyLoaded="giphyLoaded = true"/>
      <div>
        <Spinner v-if="showSpinner"/>
      </div>
      <OutcomeBox v-if="!showSpinner && showGiphyBox" :isWinningNumbers=didNumbersWin :winningAmount=winningAmount :giphyLoaded=giphyLoaded />
    </fragment>
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
    updated: function() {
    console.log(this.numbersLeft, this.numbersLeft !== 0)
  },
  data() {
    return {
      showStartMessage: true,
      lottoResults: [],
      numbersLeft: 6,
      checkButtonIsVisible: true,
      showGiphyBox: false, 
      giphyLoaded: false,
      gipyhQuery: '',
      didNumbersWin: false,
      showSpinner: false,
      winningAmount: 0
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  methods: {
    startChecking: function() {
      this.showGiphyBox = true;
      this.giphyLoaded = false;
      this.checkButtonIsVisible = false;
      this.showStartMessage = false;
      this.gipyhQuery = 'nervous';
      this.showSpinner = true;
      setTimeout(() => {
        this.giphyLoaded = false;
        this.showSpinner = false;
        this.didNumbersWin ? 
          this.gipyhQuery = 'awkward' :
          this.gipyhQuery = 'relief'
      }, 5000);
    },
    decrementNumber: function(num) {
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
      if (winningNumbers.length > 0) {
        console.log("winner!!!", Number(winningNumbers[0].jackpot))
        this.winningAmount = Number(winningNumbers[0].jackpot).toLocaleString('en-UK', { style: 'currency', currency: 'GBP' }).replace(".00", "");
        this.didNumbersWin = true;
      } else {
        console.log("no winner!")
      }
    },
  },
}
</script>

<style>

* {
  box-sizing: border-box;
}

body {
    color: #aa2d27;
    font-family: 'Kanit', sans-serif;
    color: #aa2d27;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  margin: 0 auto;
}

</style>
