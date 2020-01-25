<template>
    <fragment>
      <Card 
        @userNumbers="checkForWinningResults" 
        @numbersLeft="decrementNumber" 
        :resetUsersNumbers=resetUsersNumbers
      />
      <NumbersLeft :numbersLeft=numbersLeft :showStartMessage=showStartMessage />
      <CheckButton v-if="checkButtonIsVisible" @userClicked="startChecking" :numbersLeft=numbersLeft :key=numbersLeft />
      <GifhyBox v-if="showGiphyBox" :query=gipyhQuery :key="gipyhQuery" @giphyLoaded="giphyLoaded = true"/>
      <div>
        <Spinner v-if="showSpinner"/>
      </div>
      <OutcomeBox 
        v-if="!showSpinner && showGiphyBox" 
        :isWinningNumbers=didNumbersWin 
        :winningAmount=winningAmount 
        :giphyLoaded=giphyLoaded 
        @restart=restart
      />
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
      winningAmount: 0, 
      resetUsersNumbers: false
    }
  },
  async asyncData ({ $axios }) {
    
    const lottoResultsCsv = await $axios.get(
        "http://lottery.merseyworld.com/cgi-bin/lottery?days=2&Machine=Z&Ballset=0&order=0&show=1&year=0&display=CSV"
    );
    const lottoResults = lottoResultsCsv.data
        .replace(
            `<HTML>
<HEAD>
<TITLE> UK National Lotto Winning Numbers</TITLE>
<BODY>
<PRE> UK National Lotto Winning Numbers

No., Day,DD,MMM,YYYY, N1,N2,N3,N4,N5,N6,BN,   Jackpot, Wins,   Machine  ,Set`,
            ""
        )
        .replace(
            `<HR><B>All lotteries below have exceeded the 180 days expiry date</B><HR>No., Day,DD,MMM,YYYY, N1,N2,N3,N4,N5,N6,BN,   Jackpot, Wins,   Machine  ,Set
`,
            ""
        )
        .split("\n")
        .map(row => {
            const splitRow = row.split(",");
            if (splitRow.length > 0) {
                return {
                    jackpot: splitRow[12],
                    winningNumbers: splitRow.filter((num, i) => i >= 5 && i <= 10).map(num => Number(num)),
                    date: splitRow.filter((num, i) => i >= 1 && i <= 4).join(" ")
                };
            }
        });
    lottoResults.shift();
    return { lottoResults }
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
    restart: function() {
      this.resetUsersNumbers = true;
      this.showStartMessage = true;
      this.lottoResults = [];
      this.numbersLeft= 6;
      this.checkButtonIsVisible = true;
      this.showGiphyBox = false;
      this.giphyLoaded =false;
      this.gipyhQuery = '';
      this.didNumbersWin = false;
      this.showSpinner - false;
      this.winningAmount = 0;
      setTimeout(() => this.resetUsersNumbers = false,500);
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

</style>

