<template>
  <div id="header">
    <div class="nav-left"></div>
    <div class="nav-center">
      <tab-bar>
        <tab-bar-item v-for="(item, index) in menuList" :key="index" :link="item.link">
          <div slot="text">{{item.des}}</div>
        </tab-bar-item>
      </tab-bar>
    </div>
    <div class="nav-right">
      <button class="btn-primary">教学平台</button>
      <span style="margin-left:60px; font-size: 15px">
        <a href="#">登录</a>
        &nbsp;&nbsp; |&nbsp;&nbsp;
        <a ref="#">注册</a>
      </span>
    </div>
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "hwy-header",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      menuList: [
        { des: "首页", link: "/home" },
        { des: "鲲鹏教育中心", link: "/kunpeng" },
        { des: "MOOC课程", link: "/cloudclassroom" },
        { des: "培训认证", link: "/microauthentication" },
        { des: "在线实验", link: "/cloudlab" },
        { des: "教学市场", link: "/teachingmarket" },
        { des: "新工科实验班", link: "/experimentalclass" },
        { des: "学术交流", link: "/academic-exchange" }
      ]
    };
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  z-index: 100;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
}

.nav-left {
  padding-left: 50px;
  width: 120px;
  height: 40px;
  background-image: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/logo.451780fa3b1dcc60e811.svg");
  background-size: 100% 100%;
}
.btn-primary {
  color: #293040 !important;
  background: #fafafa !important;
  border: 1px solid #e3e5e9 !important;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05) !important;
  outline: none;
}

.btn-primary:hover {
  border-color: #5e7ce0;
}
.nav-center {
  margin-top: 15px;
  flex: 1;
}

.nav-right {
  width: 300px;
  padding-right: 30px;
}
</style>
