<template>
  <div id="index-list">
    <list-item v-for="a in list" :key=a></list-item>
  </div>
</template>

<script>
import listItem from './index-item.vue'

export default {
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  },
  components: {
    'list-item': listItem
  }
}
</script>

<style>
#index-list {
  display: inline;
  margin-left: 45%;
}
</style>
