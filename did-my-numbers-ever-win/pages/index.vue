<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        did-my-numbers-ever-win
      </h1>
      <h2 class="subtitle">
        My geometric Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData ({ $axios }) {
    const lottoResultsCsv = await $axios.$get('http://lottery.merseyworld.com/cgi-bin/lottery?days=2&Machine=Z&Ballset=0&order=0&show=1&year=0&display=CSV');
    const lottoResults = lottoResultsCsv
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
                winningNumbers: splitRow.filter((num, i) => i >= 5 && i <= 11),
                date: splitRow.filter((num, i) => i >= 1 && i <= 4).join(" ")
            };
        }
    });
    lottoResults.shift();
    console.log(
      "lottoResults: ", lottoResults
                  
    );
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
