<template>
    <div v-if="numbersLeft">
        <h2>Please select {{numbersLeft}} more numbers</h2>
    </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: ['numbersLeft'],
  methods: {
    
  },
}
</script>

<style>

</style>
