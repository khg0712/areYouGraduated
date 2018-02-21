<template>
  <div class="content-wrap">
    <tiny-slider :mouse-drag="true" :loop="true" items="1" gutter="20">
      <content-item v-for="a in contentList" :key=a.days></content-item>
  </tiny-slider>
  </div>
</template>

<script>
import content from './content.vue'
import tinySlider from 'vue-tiny-slider'

export default {
  props: ['contentList'],
  data () {
    return {
    }
  },
  components: {
    'tiny-slider': tinySlider,
    'content-item': content
  }
}
</script>

<style>
  .content-wrap {
    box-sizing: border-box;
    padding: 5% 15%;
    height: 70%;
    width: 100%;
    position: relative;
    color: #fff;
  }

  .tns-item {
    height: 400px;
  }

  .tns-controls button:nth-child(1) {
  }

  .tns-controls button:nth-child(2) {
    background-image: url('../assets/Main_LeftArrow.png');
  }
</style>
