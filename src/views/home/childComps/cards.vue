<template>
  <div class="cards">
    <div class="cards-content">
      <div class="card-box-content" v-for="(item, index) in cards" :key="index">
        <div class="pic-card">
          <div class="pic" :style="{backgroundImage: 'url(' + item.img + ')', backgroundPositionY: (-200 * index) + 'px'}">
          </div>
          <div style="padding: 10px 20px">
            <div class="pic-title">{{item.header}}</div>
            <div class="pic-detail">
              <span>ClassRoom</span>
              <span style="margin-left: 50px">华为云</span>
              <span
                style="margin-left: 130px; border: 1px solid #ccc; border-radius: 8px; padding: 1px 3px"
              >6小时</span>
            </div>
            <div class="pic-text" :title="item.des">{{item.des}}</div>
            <div
              style="margin-top: 10px;border-top: 1px solid rgb(242, 243, 245); padding: 12px 0px 8px;"
            >
              <span
                style="margin-left: 270px; margin-top: 25px; font-size: 14px; border: 1px solid rgba(228,31,43,.1);color:#e41f2b; background-color: rgba(228,31,43,.1); border-radius: 5px; padding: 3px 6px"
              >限时免费</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:block;text-align: center; height:100px">
      <button class="btn-primary" @click="seeMore">查看更多 ></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cards",
  components: {},
  props: {
    cards: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    seeMore() {
      alert('更多>>>>')
    }
  }
};
</script>
<style>
.cards-content {
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1250px;
  margin: 0 auto;
}
.pic-card {
  width: 380px;
  margin: 0 30px 30px 0;
  /* border: 1px solid #f7f8fa; */
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  display: inline-block;
  cursor: pointer;
}
.pic {
  border-radius: 12px 12px 0 0;
  height: 200px;
  width: 100%;
}
.pic-title {
  width: 100%;
  font-size: 16px;
  color: #293040;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
}
.pic-detail {
  margin-top: 8px;
  color: #959eb2;
  font-size: 12px;
}
.pic-text {
  margin-top: 10px;
  height: 48px;
  line-height: 24px;
  width: 100%;
  font-size: 14px;
  color: #5e6678;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.5px;
  word-break: break-all;
}
.btn-primary {
  padding:4px 20px;
  height: 40px;
  font-size: 14px !important;
  color: #293040 !important;
  line-height: 24px;
  outline:none;
  cursor: pointer;
  background: #fafafa !important;
  border: 1px solid #e3e5e9 !important;
  border-radius: 20px !important;
  font-family: PingFang SC,PingFangSC-Regular,Helvetica Neue,Microsoft YaHei Regular,Microsoft YaHei,宋体,"sans-serif";
}
.btn-primary:hover{
  border: 1px solid #9ab0dd !important;
}
</style>
