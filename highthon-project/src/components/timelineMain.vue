<template>
  <div id="timeline-wrap">
    <div id="timeline-left">
      <img id="timeline-logo" src="../assets/Logo.png" alt="">
      <img @click="titleModalChk=true" class="kind-title" src="../assets/Add Timeline.png" alt="">
    </div><div id="timeline-right">
      <timeline-list></timeline-list>
      <title-modal v-if="titleModalChk" @close="titleModalChk = false"></title-modal>
      <edit-modal  v-if="editModalChk" @close="editModalChk = false"></edit-modal>
      <date-modal  v-if="dateModalChk" @close="dateModalChk = false"></date-modal>
    </div>
  </div>
</template>

<script>
import timelineList from './timelineList.vue'
import titleModal from './timelineTitleModal.vue'
import editModal from './timelineEditModal.vue'
import dateModal from './timelineDateModal.vue'
export default {
  components: {
    'timeline-list': timelineList,
    'title-modal': titleModal,
    'edit-modal': editModal,
    'date-modal': dateModal
  },
  data () {
    return {
      titleModalChk: false,
      editModalChk: false,
      dateModalChk: false
    }
  }
}
</script>

<style>
#timeline-wrap {
  height: 100%;
}

#timeline-left {
  display: inline-block;
  width:20%;
  height: 100%;
}

#timeline-logo {
  width: 70%;
}

.kind-title {
  width: 70%;
}

#timeline-right {
  display: inline-block;
  width: 80%;
  height: 100%;
  background-color: #000;
  padding-left: 40px;
  box-sizing: border-box;
}
</style>
