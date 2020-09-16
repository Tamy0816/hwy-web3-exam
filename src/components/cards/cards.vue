<template>
  <div class="cards">
    <div class="cards-content">
      <div class="card-box-content" v-for="(item, index) in cards" :key="index">
        <div class="pic-card">
          <div
            class="pic"
            :style="{backgroundPositionY: (-200 * item.image) + 'px'}"
          ></div>
          <div style="padding: 10px 20px">
            <div class="pic-title">{{item.name}}</div>
            <div class="pic-detail">
              <span>尚硅谷</span>
              <span style="margin-left: 50px">华为云</span>
            </div>
          </div>
        </div>
      </div>
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
};
</script>
<style>
.cards-content {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 1300px;
}
.pic-card {
  width: 284px;
  margin: 0 30px 30px 0;
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  display: inline-block;
  cursor: pointer;
}
.pic {
  border-radius: 12px 12px 0 0;
  height: 200px;
  width: 100%;
  background-image: url('https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/index-hot-active.0b3ddb3790f61a4cad71.jpg');
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
</style>
