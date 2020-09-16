<template>
  <div id="cloud-class-room">
    <!-- <hwy-header></!-->
    -->
    <hwy-banner :bannerInfo="bannerInfo"></hwy-banner>
    <div class="content">
      <div class="tab-content">
        <tab-control :tabs="tabs" @itemClick="tabClick"></tab-control>
      </div>

    </div>
    <div class="tab-item">
        <cards :cards="showCards"></cards>
      </div>
  </div>
</template>

<script>
import HwyHeader from "../components/Header";
import HwyBanner from "../components/banner/banner";
import TabControl from "../components/tabControl/TabControl";
import Cards from "../components/cards/cards";

export default {
  name: "CloudClassroom",
  components: {
    HwyHeader,
    HwyBanner,
    TabControl,
    Cards
  },
  data() {
    return {
      bannerInfo: {
        img:
          "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/course-bg.c21684352de65d13ddec.png",
        title: "MOOC 课程",
        des: "面向师生提供丰富的自学开放课程，轻松实现自我提升。"
      },
      tabs: [
        {
          type: "热门课程",
          name: "hotCourse"
        },
        {
          type: "热门课活动",
          name: "hotActive"
        },
        {
          type: "云课程",
          name: "baseCourse"
        },
        {
          type: "角色系列课程",
          name: "characterCourse"
        }
      ],
      tabCards: {},
      showCards: []
    };
  },
  mounted() {
    this.$http
      .get("../../static/cloudCourse.json")
      .then(res => {
        this.tabCards = res.data;
        this.showCards = this.tabCards['hotCourse']
      })
      .catch(err => console.log(err));
  },
  methods: {
    tabClick(name) {
      this.showCards = this.tabCards[name];
    }
  }
};
</script>

<style>
#cloud-class-room {
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.tab-content {
  width: 1300px;
  border-bottom: 1px solid #e3e5e9;
}
.tab-item{
  margin-top:30px;
  display: flex;
  justify-content: center;
}
</style>
