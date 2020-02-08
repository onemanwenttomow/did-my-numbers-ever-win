<template>
  <div class="home-page-container">
    <a href="/national-lottery">
      <img src="/the-national-lottery-uk.svg" alt="national-lottery-united-kingdom">
    </a>
    <p>More lotteries coming soon...</p>
  </div>
</template>

<script>

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

.home-page-container {
  grid-row: 2 / 3;
  grid-column: 1 / -1;

  display: grid;
  grid-gap: 5vh;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 320px) and (max-width: 667px) {
    .home-page-container {
      width: 100vw;
    }

}



</style>