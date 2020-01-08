<template>
    <div v-if="numbersLeft">
        <h2 v-if="numbersLeft > 1">Please select {{numbersLeft}} more numbers</h2>
        <h2 v-if="numbersLeft === 1">Please select {{numbersLeft}} more number</h2>
    </div>
</template>

<script>

export default {
  props: ['numbersLeft'],
}
</script>

<style>

</style>
