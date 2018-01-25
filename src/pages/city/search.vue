<template>
  <div class="search">
    <input class="search-input" type="text" 
      placeholder="请输入城市名活拼音" 
      @input="handleInputChange">
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item border-bottom" v-for="item in filterResult">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'city-search',
    props: {
      list: Array
    },
    data () {
      return {
        showList: false,
        filterResult: []
      }
    },
    computed: {
      result () {
        const result = []
        this.list.forEach((value, index) => {
          value.cityList.forEach((value) => {
            result.push({
              spell: value.pinyin,
              name: value.city
            })
          })
        })
        return result
      }
    },
    watch: {
      filterResult () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleInputChange (e) {
        const value = e.target.value.toLowerCase()
        if (value) {
          this.showList = true
          this.filterResult = this.result.filter((item) => {
            if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
              return true
            }
          })
        } else {
          this.showList = false
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.list)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .search
    height: .74rem
    background: $bgColor
    padding: 0 0.4rem
    box-sizing: border-box
    .search-input
      line-height: .62rem
      width: 100%
      margin-top: .06rem
      padding: 0 .2rem
      border: none
      border-radius: .1rem
      text-align: center
      font-size: .24rem
      color: #666
      box-sizing: border-box
    .search-list
      z-index: 1
      overflow: hidden
      position: absolute
      top: 1.62rem
      left: 0
      right: 0
      bottom: 0
      background: #f5f5f5
      .search-item
        padding-left: .3rem
        line-height: .6rem
        background: #fff
        color: #333
</style>
  