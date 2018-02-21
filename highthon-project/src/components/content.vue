<template>
  <div class="content" @click="changeView('work')">
    <h1 class="work-title">work name</h1>
    <span class="work-dscrt">work's loooong</span>
    <p class="">of graduation</p>
    <p class="day-text">During {{day}} days</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      day: 1
    }
  },
  methods: {
    changeView: function (view) {
      this.$router.push(view)
    }
  }
}
</script>
<style>
.content {
  display: inline-block;
  width: 80%;
  height: 70%;
  margin: 0 auto;
  background: linear-gradient(to right, #3D3D3D , #141414);
}
</style>
