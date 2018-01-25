<template>
  <div ref="wrapper">
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前位置</div>
        <div class="content">
          <div class="button" @click="handleCityClick(city)">
            <div class="button-text button-active">{{city || "北京"}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="content">
          <div class="button" v-for="item of hotcity" @click="handleCityClick(item.city)">
            <div class="button-text"
              :class="{'button-active': item.city === city}">{{item.city}}</div>
          </div>
        </div>
      </div>
      <div class="city-list border-topbottom" v-for="item of list" :ref="item.letter">
        <div class="list-letter">{{item.letter}}</div>
        <div class="list-city" v-for="innerItem of item.cityList" 
             @click="handleCityClick(innerItem.city)">
          {{innerItem.city}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'city-list',
    props: {
      list: Array,
      hotcity: Array
    },
    computed: {
      ...mapState({
        city (state) {
          return state.city || '北京'
        }
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      scrollToIndex (item) {
        this.scroll.scrollToElement(this.$refs[item][0])
      },
      ...mapMutations(['changeCity'])
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    activated () {
      this.scroll && this.scroll.refresh()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .area
    .title
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      &::before, &::after
        border-color: #9e9e9e
    .content
      overflow: hidden
      padding: 0 .4rem 0 .2rem
      .button
        float: left
        width: 33.33%
        .button-text
          line-height: .6rem
          margin: .2rem
          border: .02rem solid #999
          border-radius: .05rem
          text-align: center
        .button-active
          color: $bgColor
          border-color: $bgColor
  .city-list
    .list-letter
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      &::before, &::after
        border-color: #9e9e9e
    .list-city
      line-height: .72rem
      padding-left: .3rem
      border-bottom: .02rem solid $boderColor
      
</style>
