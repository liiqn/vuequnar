<template>
  <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img :src="item.imgUrl" class="banner-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'slider',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .index-banner >>> .swiper-pagination-bullet
    background: #fff
  .banner
    width: 100%
    overflow hidden
    height: 0
    padding-bottom: 31.25%
    .banner-img
      width: 100%
</style>