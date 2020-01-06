<template>
  <div class="container">
    <div v-bind:key="num" v-for="num in mainNumbers" class="mainNumber">
      [<span class="num">{{num}}</span>]
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      lottoResults: [],
      mainNumbers: [...Array(59).keys()].map(num => num+1)
    }
  },
  async asyncData ({ $axios }) {
    const lottoResultsFromApi = await $axios.$get('/api/get-all-national-lottery-jackpots');
    return { lottoResults: lottoResultsFromApi }
  },
  mounted: function() {
    console.log(this.mainNumbers)
    const winningData = this.checkForWinningResults(['03','13','14','34','50','51']);
    console.log("winningData: ", winningData.length)
  },
  methods: {
    checkForWinningResults: function(userNumbers) {
      return this.lottoResults.filter(el => {
        return el.winningNumbers
        .sort((a, b) => a - b)
        .map(el => el.trim())
        .toString() === 
        userNumbers
        .sort((a, b) => a - b)
        .toString()
      });
    },
  },
}
</script>

<style>

.container {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;
  background-color: #F8E7E7;

}
.mainNumber {
  font-family: 'Kanit', sans-serif;
  color: #aa2d27;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;

}
.num {
  font-weight: bolder;
  width: 24px;
  display: inline-block;
  text-align: center;
}

</style>
