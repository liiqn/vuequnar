<template>
  <div class="header">
  	<router-link to="/index">
		<div class="back iconfont">&#xe624;</div>
	</router-link>
	<div class="country">
		<div class="domestic">国内</div>
		<div class="overseas">海外</div>
	</div>
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
	  position: fixed
	  top: 0
	  width: 100%
	  height: .88rem
	  line-height: .88rem
	  background: $bgColor
	  .back
	  	float: left
	  	width: .58rem
	  	text-align: center
	  	font-size: .4rem
	  	font-weight: bold
	  	color: #fff
	  .country
	  	display: flex
	  	align-items: center
	  	overflow: hidden
	  	width: 4.15rem
	  	height: .6rem
	  	margin: .1rem 0 0 22%
	  	border-radius: 0.1rem
	  	background: white
			.domestic
	  			float: left
	  			width: 2.05rem
	  			height: 0.5rem
	  			line-height: 0.5rem
	  			text-align: center
	  			color: #00bcd4
	  		.overseas
	  			float: left
	  			width: 2.05rem
	  			height: 0.5rem
	  			line-height: 0.5rem
	  			text-align: center
	  			background: #00bcd4
	  			color: white
</style>
