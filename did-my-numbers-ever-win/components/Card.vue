<template>
    <div class="container">
        <div 
            v-bind:key="num" 
            v-for="num in mainNumbers" 
            class="mainNumber"
            @click="updateSelectedNumber(num)"
        >
            <div v-if="usersNumbers.includes(num)" class="struck-through"></div>
            [<span class="num">{{num}}</span>]
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      mainNumbers: [...Array(59).keys()].map(num => num+1),
      usersNumbers: []
    }
  },
  methods: {
    updateSelectedNumber: function(clickedNum) {
      if (this.usersNumbers.length >= 6 || this.usersNumbers.includes(clickedNum)) {
        return;
      }
      this.usersNumbers.push(clickedNum);
      if (this.usersNumbers.length === 6) {
          this.$emit('userNumbers', this.usersNumbers)
      }
    }
  },
}
</script>

<style>

.mainNumber {
  position: relative;
  font-family: 'Kanit', sans-serif;
  color: #aa2d27;
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.num {
  font-weight: bolder;
  width: 24px;
  display: inline-block;
  text-align: center;
}

.struck-through {
  position: absolute;
    width: 0px;
    height: 5px;
    background-color: black;
    top: 14px;
    left: 2px;
    animation: strikeout 0.3s forwards;
}

@keyframes strikeout {
  from {
    width: 0px;
  }

  to {
    width: 34px;
  }
}

</style>
