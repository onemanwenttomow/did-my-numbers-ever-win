<template>
    <div class="numbers-left-container" v-if=showStartMessage>
        <h2 v-if="numbersLeft > 1">Please select <span class="numbers-left">{{numbersLeft}}</span> more numbers</h2>
        <h2 v-if="numbersLeft === 1">Please select <span class="numbers-left">{{numbersLeft}}</span> more number</h2>
        <h2 v-if="numbersLeft === 0">Do you dare to check?</h2>
    </div>
</template>

<script>

export default {
  props: ['numbersLeft', 'showStartMessage'],
}
</script>

<style>

.numbers-left-container {
  background-color: #F8E7E7;
  height: 200px;
  width: 250px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
}

.numbers-left-container h2 {
  font-weight: 600;
}

.numbers-left-container span {
  font-weight: 700;
}

.numbers-left {
  font-weight: bolder;
}

@media screen and (min-width: 320px) and (max-width: 667px) {
    .numbers-left-container {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
      width: 100vw;
      height: auto;
      font-size: 15px;

    }

}

</style>
