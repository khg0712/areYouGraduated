<template>
<div id="timeline-list-wrap">
  <div class="timeline-box">
    <p class="title">지난 타임라인 </p>
    <p class="content">배그 치킨 뜯기</p>
  </div>
  <div class="timeline-box" id="now-time-line">
    <p class="title">현재 타임라인 </p>
    <p class="content">디자인 열심히 하기<img class="timeline-btn" src="../assets/Button_More.png" alt=""> <img class="timeline-btn" src="../assets/Button_End.png" alt=""></p>
  </div>
  <div class="timeline-box">
    <p class="title">다음 타임라인 </p>
    <p class="content">깔쌈하게 블랙 스쿼드</p>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
#timeline-list-wrap {
  padding: 0 50px;
}

#timeline-list-wrap p{
  color: #fff;
}

#timeline-list-wrap:nth-child(1){
  margin-top: 13%;
}

.timeline-box {
    margin: 30px 0;
}

.title {
    font-size: 25px;
    opacity: 0.5;
}

.content {
    font-size: 40px;
    opacity: 0.5;
}

#now-time-line .title, #now-time-line .content{
    font-size: 35px;
    opacity: 1;
}

#now-time-line .content {
    line-height: 80px;
    font-size: 55px;
}

.timeline-btn {
    width: 130px;
}
</style>
