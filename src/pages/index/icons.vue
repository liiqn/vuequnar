<template>
  <swiper class="icons index-icons" :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index" class="icons-page">
      <div class="icons-list">
        <div v-for="item in page" :key="item.id" class="icons-item">
          <img :src="item.imgUrl" class="icons-img">
          <p class="icons-title">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .icons >>> .swiper-pagination-bullet
    background: $bgColor
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 3.4rem
    .icons-list
      display: flex
      flex-wrap: wrap
      .icons-item
        width: 25%
        padding-top: .3rem
        text-align: center
        .icons-img
          width: .66rem
          height: .66rem
          margin: 0 auto
        .icons-title
          margin-top: .16rem
          font-size: .28rem
          color: #333
</style>