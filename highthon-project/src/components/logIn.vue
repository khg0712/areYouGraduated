<template>
<div id="login-wrap">
  <div id="left">
    <h1 id="title">LOG IN</h1>
    <input class="name-input" type="text" placeholder="Username">
    <input class="pw-input" type="text" placeholder="Password">

    <div id="submit">
      GO!
    </div>
  </div><div id="right">
    <img id="login-logo" src="../assets/loginLogo.png" alt="">
  </div>
</div>

</template>
<script>
</script>

<style>
#login-wrap {
    height: 100%;
}

#left {
    border: 0;
    display: inline-block;
    width: 40%;
    position: relative;
}

#title {
    margin-top: 120px;
    text-align: center;
    font-size: 50px;
}

#left input {
    border-bottom: 2px solid #000;
    display: block;
    width: 300px;
    font-size: 30px;
    margin: 0 auto;
    margin-top: 50px;
}

.name-input {

}

.pw-input {

}

#submit {
  margin-top: 100px;
  width: 190px;
  height: 50px;
  border: 3px solid #000;
  border-radius: 25px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  left: 33%;
  line-height: 40px;
}

#right {
    height: 100%;
    border: 0;
    background-color: #000;
    display: inline-block;
    width: 60%;
    padding: 60px;
    box-sizing: border-box;
}

#login-logo {
    height: 100%;
}

</style>
