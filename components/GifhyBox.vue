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
    fetch('/api/get-giphy/' + this.query).then(data => {
        return data.json();
    }).then((myJson) => {
        this.$emit('giphyLoaded');
        this.imgUrl = myJson.imgUrl
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

</style>
