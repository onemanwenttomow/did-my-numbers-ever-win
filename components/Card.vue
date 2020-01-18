<template>
    <div class="container">
        <div 
            :key="num" 
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
  props: ['resetUsersNumbers'],

  mounted: function() {
    console.log("card mounted!");
    this.resetUsersNumbers = false;
  },

  watch: {
    resetUsersNumbers: function () {
      console.log("watch running!!! this.resetUsersNumbers", this.resetUsersNumbers)
      this.usersNumbers = [];
    }
  },
 
  methods: {
    updateSelectedNumber: function(clickedNum) {
      if (this.usersNumbers.length >= 6 || this.usersNumbers.includes(clickedNum)) {
        return;
      }
      this.usersNumbers.push(clickedNum);
      this.$emit('numbersLeft', 6 - this.usersNumbers.length)
      if (this.usersNumbers.length === 6) {
          this.$emit('userNumbers', this.usersNumbers)
      }
    }
  },
}
</script>

<style>

.container {
  width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;
  background-color: #F8E7E7;
  grid-column: 1/ -1;
  grid-row: 2 / 3;
}

.mainNumber {
  position: relative;
  font-family: 'Kanit', sans-serif;
  color: #aa2d27;
  margin: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

.num {
  font-weight: 700;
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
