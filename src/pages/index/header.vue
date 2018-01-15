<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">请输入搜索内容</div>
    <div class="city">乌鲁木齐</div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
	  display: flex
	  height: .88rem
	  line-height: .88rem
	  background: $bgColor
	  color: #fff
	  .back
	  	width: .58rem
	  	text-align: center
	  	font-size: .4rem
	  	font-weight: bold
	  .search
	  	flex: 1
	  	height: .6rem
	  	margin: .14rem .2rem
	  	background: #fff
	  	border-radius: .1rem
	  .city
	  	padding-right: .6rem
</style>
