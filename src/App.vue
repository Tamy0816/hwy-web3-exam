<template>
  <div id="app">
     <hwy-header></hwy-header>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Home from "./views/home/Home";
import HwyHeader from "./components/Header";

export default {
  name: "app",
  components: {
    HwyHeader
  //  Home
  }
};
</script>

<style>
/* @import "assets/css/base.css"; */

#app {
  position: relative;
  font-family: PingFang SC, PingFangSC-Regular, Helvetica Neue,
    Microsoft YaHei Regular, Microsoft YaHei, 宋体, "sans-serif";
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
