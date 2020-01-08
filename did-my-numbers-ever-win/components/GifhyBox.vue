<template>
    <div>
        <img class="giphy" :src="imgUrl" alt="">
    </div>
</template>

<script>

export default {
  props: ['searchTerm'],
  data() {
    return {
      imgUrl: ''
    }
  },

  mounted: function() {
    console.log("GIPHY mounted!", );
    fetch('/api/get-giphy').then(data => {
        return data.json();
    }).then((myJson) => {
        console.log(myJson.imgUrl);
        this.imgUrl = myJson.imgUrl
    });
      
  }
}
</script>

<style>
.giphy {
    width: 500px;
}

</style>
