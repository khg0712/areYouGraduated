<template>
  <div class="hello">
    <div id="top-bar">
      <img class="logo" src="@/assets/Logo.png" alt="">
      <img class="nav_icon" src="@/assets/Home.png" alt="">
      <img class="nav_icon" @click="changeView('login')" src="@/assets/LogIn.png" alt="">
    </div>
    <content-list :content-list="contentList"></content-list>
    <index-list></index-list>
  </div>
</template>

<script>
import indexList from './index-list.vue'
import contentList from './content-list.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      contentList: [
        {
          name: 'work name',
          descrpt: 'work\'s loooosing',
          days: 23
        },
        {
          name: 'work name',
          descrpt: 'work\'s loooosing',
          days: 24
        }
      ]
    }
  },
  methods: {
    changeView: function (view) {
      this.$router.push(view)
    }
  },
  components: {
    'index-list': indexList,
    'content-list': contentList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
  width: 100%;
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#top-bar {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
}

.logo {
  margin-left: 3%;
  width: 130px;
  height: 120px;
  margin-right: 58%;
}

.nav_icon {
  align-self:center;
  width: 170px;
  height: 80px;
  float: right;
}

</style>
