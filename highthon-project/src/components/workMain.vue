<template>
  <div id="info-wrapper">
    <div id="info-left">
      <img id="info-logo" src="../assets/Logo.png" alt="">
      <img @click="showModal = true" class="kind-title" src="../assets/Add Work.png" alt="">
    </div><div id="info-right">
        <select>
            <option value="volvo" selected>오늘</option>
            <option value="saab">지난 3일</option>
            <option value="mercedes">지난 7일</option>
            <option value="audi">지난 14일</option>
            <option value="audi">지난 30일</option>
        </select>
        <span id="act-time">{{hour}}시간 {{minute}}분 활동했습니다</span>
        <vue-chart id="chart" type="doughnut" :data="chartData" height=70></vue-chart>
        <p id="text1">To Graduate</p>
        <p id="text2">{{progressDegree}}%</p>
        <progress-list :degree="progressDegree"></progress-list>
    </div>
    <work-modal v-if="showModal" :showModal="showModal" @close="showModal = false"></work-modal>
  </div>
</template>

<script>
import VueChart from 'vue-chart-js'
import progressList from './progressList.vue'
import workModal from './workModal.vue'

export default {
  components: { VueChart, progressList, workModal },
  data () {
    return {
      hour: 1,
      minute: 2,
      progressDegree: 35,
      showModal: false,
      chartData: {
        labels: ['국어', '수학', '사회', '과학', '영어'],
        datasets: [
          {
            data: [10.5, 40, 10, 15, 35],
            backgroundColor: ['#EA00D9', '#6f1c8f', '#0abdc6', '#EA00D9', '#091833']
          }
        ]
      }
    }
  }
}
</script>

<style>
#info-wrapper {
  height: 100%;
}

#info-left {
  display: inline-block;
  width:20%;
  height: 100%;
}

#info-logo {
  width: 70%;
}

.kind-title {
  width: 70%;
}

.kind-title:hover {
  cursor: pointer;
}

#info-right {
  display: inline-block;
  width: 80%;
  height: 100%;
  background-color: #000;
  padding-left: 40px;
  box-sizing: border-box;
}

#info-right select {
    margin-top: 80px;
    margin-left: 20px;
    display: block;
    font-size: 30px;
    background-color: transparent;
    color: #fff;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none;    /* 화살표 없애기 for firefox*/
    appearance: none;
    background: url('../assets/Button_On.png') no-repeat 100% 50%;
    background-size: 35px 30px;
}

select:hover {
    cursor: pointer;
}

#info-right select option {
  color: #000;
}

#act-time {
    font-size: 35px;
    color: white;
    margin-left: 20px;
}

#chart {
    margin-top: 40px;
}

#text1 {
  color: #fff;
  font-size: 35px;
}

#text2 {
    color: #fff;
    font-size: 45px;
    font-weight: bold;
}
</style>
