<template>
  <div id="pgList">
    <div class="progressPoint" v-for="a in list" :key="a"></div>
  </div>
</template>

<script>
export default {
  props: ['degree'],
  mounted () {
    if (this.degree % 10 !== 0) {
      document.getElementById('pgList').getElementsByTagName('div')[parseInt(this.degree / 10)].style.backgroundColor = '#fff'
      document.getElementById('pgList').getElementsByTagName('div')[parseInt(this.degree / 10)].style.opacity = (this.degree % 10) / 10
    }
    this.balls = parseInt(this.degree / 10)
    var i = 0
    while (this.balls > 0) {
      document.getElementById('pgList').getElementsByTagName('div')[i].style.backgroundColor = '#fff'
      this.balls--
      i++
    }
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      balls: 0
    }
  }
}

</script>

<style>
  .progressPoint {
      margin-top: 10px;
      margin-right: 15px;
      display: inline-block;
      border-radius: 20px;
      width: 20px;
      height: 20px;
      border: 6px solid #1D1D1D;
  }
</style>
