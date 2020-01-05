const express   = require('express');
const axios     = require('axios');
const app = exports.app = express();

app.get('/get-all-national-lottery-jackpots', async (req, res) => {
    const lottoResultsCsv = await axios.get('http://lottery.merseyworld.com/cgi-bin/lottery?days=2&Machine=Z&Ballset=0&order=0&show=1&year=0&display=CSV');
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
                winningNumbers: splitRow.filter((num, i) => i >= 5 && i <= 11),
                date: splitRow.filter((num, i) => i >= 1 && i <= 4).join(" ")
            };
        }
    });
    lottoResults.shift();
    res.json(lottoResults);
});

module.exports = {
    path: '/api',
    handler: app
};