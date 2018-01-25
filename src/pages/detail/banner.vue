<template>
  <div class="banner">
    <img class="banner-image" 
      src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
  </div>
</template>

<script>
  export default {
    name: 'detail-banners',
    props: {
      bannerImg: Object,
      imgList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-image
      width: 100%
</style>