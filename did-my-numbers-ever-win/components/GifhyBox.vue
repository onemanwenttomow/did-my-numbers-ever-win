<template>
    <div>
        <img class="giphy" :src="imgUrl" alt="">
    </div>
</template>

<script>

export default {
  props: ['searchTerm', 'query'],
  data() {
    return {
      imgUrl: ''
    }
  },

  mounted: function() {
    console.log("GIPHY mounted!", this.query);
    
    fetch('/api/get-giphy/' + this.query).then(data => {
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
    width: 250px;
}

</style>
