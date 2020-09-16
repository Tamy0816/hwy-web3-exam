<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div
        class="act-img"
        :style="{backgroundImage: 'url(' + item.img + ')', backgroundPositionY: (-96 * index) + 'px'}"
      ></div>
      <div class="act-title">
        {{item.title}}
        <br />
        <br />
         <br />
        <span style="font-size: 14px; color: rgb(158, 154, 154)">Classroom | 2020/03/31</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  components: {},
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    seeMore() {
      alert("更多>>>>");
    }
  }
};
</script>
<style>
.list {
  text-align: left;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 1400px;
  margin: 0 auto;
}
.list-item {
  cursor: pointer;
  padding: 0px 0px 20px 0px;
  margin-top: 30px;
  overflow: hidden;
  height: 96px;
  border-bottom: 1px solid #e3e5e9;
  width: 1200px;
}
.act-img {
  width: 160px;
  height: 100%;
  float: left;
  font-size: 19px;
  margin-left: 30px;
  text-align: left;
}
.act-title {
  padding-left:220px;
}
</style>
