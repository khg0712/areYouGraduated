<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
                <p id="work-title">Add Work</p>
                <p id="work-warn">" 자신을 속이지 말자 "</p>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <select id="work-kind">
                    <option value="">국어</option>
                    <option value="">수학</option>
                    <option value="">사회</option>
                </select>

                <input type="text"><span>hour</span>
                <input type="text"><span>min.</span>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <div id="modal-save" class="modal-btn">
                  <img src="../assets/Button_Save_Black.png" alt="">
              </div>
              <div id="modal-cancel" class="modal-btn" @click="$emit('close')">
                  <img src="../assets/Button_Cancel_Black.png" alt="">
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  height: 180px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

#work-title {
  font-size: 30px;
  font-weight: bold;
}

#work-warn {
  font-size: 20px;
}

.modal-body {
  margin: 20px 0;
  position: relative;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-body select {
    border-bottom: 2px solid #000;
    width: 150px;
    height: 30px;
    font-size: 20px;
    background-color: transparent;
    -webkit-appearance: none; /* 화살표 없애기 for chrome*/
    -moz-appearance: none;    /* 화살표 없애기 for firefox*/
    appearance: none;
    background: url('../assets/modalSelect.png') no-repeat 100% 50%;
    background-size: 35px 30px;
}

.modal-body input {
  border-bottom: 2px solid #000;
  width: 80px;
  height: 30px;
  margin: 0 25px;
  font-size: 20px;
}

.modal-btn {
  display: inline-block;
  width: 100px;
  right: 20px;
  margin-bottom: 20px;
}

#modal-save {
  margin-left: 280px;
}
</style>
