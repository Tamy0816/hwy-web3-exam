<template>
  <div class="tab-control">
    <div class="tab-control-item"
         :class="{active: currentIndex === index}"
         @click="itemClick(index, tab.name)"
         v-for="(tab, index) in tabs" :key="index">
      <span>{{tab.type}}</span>
    </div>

  </div>
</template>

<script>
	export default {
		name: "TabControl",
    props: {
		  tabs: {
		    type: Array,
        default() {
		      return [

          ]
        }
      }
    },
    data: function () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick: function (index, name) {
        // 1.改变currentIndex
        this.currentIndex = index;

        // 2.发出事件
        this.$emit('itemClick', name)
      }
    }
	}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tab-control-item {
    /* flex: 1; */
    width:100px;
    cursor: pointer;
  }

  .tab-control-item span {
    padding: 9px 0px;
  }

  .active {
    color: #5e7ce0;
  }

  .active span {
    border-bottom: 2px solid #5e7ce0;
  }
</style>
