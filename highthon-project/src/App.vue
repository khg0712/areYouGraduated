<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');
body, table, div, p {font-family:'Nanum Gothic';}

html, body {
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: top;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
ul, ol, dl {
  list-style: none;
}
img, video {
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #000;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input, select {
  vertical-align: middle;
}

#app {
  height: 100%;
  width: 100%;
}

</style>
