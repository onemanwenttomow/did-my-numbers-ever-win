<template>
    <div>
        <Spinner v-if="!imgUrl" />
        <img class="giphy" :src="imgUrl" alt="">
    </div>
</template>

<script>

import Spinner from '~/components/Spinner.vue'


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
