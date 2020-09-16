<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>
  #tab-bar {
    /* 本身的样式 */
    height: 49px;
    /* 利用flex进行布局 */
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
</style>


