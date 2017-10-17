<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" type="text/css">
html,body,p,div,ul,li,a {
  padding: 0;
  margin:0;
}
$link-color: #F90;
/* body {
  background:$link-color;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  min-height: 100%;
  /* background:$link-color; */
}
</style>
