<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
#app{

  // // background-color: #f3f3f3;
  // // background-color: rgba(64, 64, 64, 0.5);
  // background-image: url(../static/pumpkin.png);
}
</style>
