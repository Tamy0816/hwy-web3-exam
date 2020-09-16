<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "TabBarItem",
    props: {
			link: {
				type: String,
        required: true
      }
    },
    computed: {
			isActive() {
				return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
				return this.isActive ? {'color': '#5e7ce0'} : {}
      }
    },
    methods: {
			itemClick() {
				this.$router.push(this.link)
      }
    }
	}
</script>

<style scoped>
  #tab-bar-item {
   justify-content:start;
   margin-left:50px;
   cursor: pointer;
  }
  #tab-bar-item:hover {
    color: #5e7ce0
  }
  .item-text {
    font-size: 1vw;
    margin-top: 3px;
  }

</style>
