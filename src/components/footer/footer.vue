<template>
  <div class="footer">
    <div style="width: 1000px;">
      <div>版权所有 © 华为软件技术有限公司 2020保留一切权利苏ICP备17040376号-32苏B2-20130048号代理域名注册服务机构：新网</div>
      <br />
      <div>
        <span class="goverment-logo-a7"></span>
        <span class="goverment-logo-a6"></span>
        苏公网安备 32011402010008号
      </div>
    </div>
    <div style="width:200px;">
      <span>法律声明 | 隐私政策</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HwyFooter",
  components: {},
  data() {
    return {};
  }
};
</script>
<style>
.footer {
  margin-top: 100px;
  height: 70px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
  font-size: 14px;
  color: rgb(90, 88, 88);
}
.goverment-logo-a7 {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-size: cover;
  vertical-align: middle;
  background-image: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/a7.c2800a6578a54f86c8f8.png");
}
.goverment-logo-a6 {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-size: cover;
  vertical-align: middle;
  background-image: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/a6.1cf5ba6e283d484abfa7.png");
}
</style>
