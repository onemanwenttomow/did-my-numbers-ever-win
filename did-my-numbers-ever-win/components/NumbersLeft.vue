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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}

.numbers-left {
  font-weight: bolder;
}

</style>
