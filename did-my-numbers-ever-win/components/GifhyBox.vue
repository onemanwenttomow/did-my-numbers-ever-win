<template>
    <div>
        <h2>GIFHY!!</h2>
    </div>
</template>

<script>

export default {
  props: ['searchTerm'],

  mounted: function() {
    console.log("GIPHY mounted!", );
    fetch('/api/get-giphy')
      
  }
}
</script>

<style>

</style>
