<template>
  <div class="banner" :style="{backgroundImage: 'url(' + bannerInfo.img + ')', backgroundPositionY: '0px'}">
    <div style="padding:30px 0px 40px 300px">
       <h2>{{bannerInfo.title}}</h2>
       <h4>{{bannerInfo.des}}</h4>
      </div>

  </div>
</template>
<script>
export default {
  name: "HwyBanner",
  components: {},
   props: {
    bannerInfo: {
      type: Object,
      default: {
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style>
.banner{
  height: 180px;
  margin-top: 35px;
  color: #252b3a;
  font-family: PingFang SC,PingFangSC-Regular,Helvetica Neue,Microsoft YaHei Regular,Microsoft YaHei,宋体,"sans-serif";
}
</style>
