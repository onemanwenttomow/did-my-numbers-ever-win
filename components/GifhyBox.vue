<template>
    <div class="giphy-container">
        <Spinner v-if="!imgUrl" />
        <img v-else class="giphy" :src="imgUrl" alt="">
    </div>
</template>

<script>

import Spinner from '~/components/Spinner.vue';


export default {
   components: {
    Spinner
  },
  props: ['searchTerm', 'query'],
  data() {
    return {
      imgUrl: ''
    }
  },

  mounted: function() {    
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=B5li4fz5Gx5JzooYv6kXAFCLGQ78Bqaj&q=${this.query}&limit=20&offset=0&rating=G&lang=en`).then(data => {
        return data.json();
    }).then((myJson) => {
        this.$emit('giphyLoaded');
        this.imgUrl = myJson.data[Math.floor(Math.random() * 20)].images.downsized_large.url
    });
      
  }
}
</script>

<style>

.giphy-container {
  background-color: #F8E7E7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.giphy {
    width: 250px;
    height: 200px;
    background-size: cover;
    border: solid 10px #F8E7E7;

}

@media screen and (min-width: 320px) and (max-width: 667px) {
    .giphy {
      width: 100vw;
      height: auto;
    }

    .giphy-container {
      grid-row: 2 / 3;

    }

}

</style>
