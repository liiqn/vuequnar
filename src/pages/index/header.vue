<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <div class="search-content">
        <span class="iconfont">&#xe632;</span>
        请输入搜索信息
        </div>
    </div>
    <router-link to="/city">
      <div class="city">
        {{city}}
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index-header',
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    display: flex
    flex-wrap: nowrap
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .8rem
      line-height: .88rem
      text-align: center
      font-size: .44rem
      font-weight: bold
    .search
      flex: 1
      height: .6rem
      margin: .14rem .2rem
      background: #fff
      border-radius: .1rem
      .search-content
        width: 100%
        height: .4rem
        line-height: .4rem
        margin-top: .1rem
        background: #fff
        color: #ccc
        text-indent: .2rem
    .city
    overflow hidden
      position: relative
      max-width: 1.6rem
      line-height: .88rem
      padding: 0 .46rem 0 .22rem
      font-size: .28rem
      color: white
      white-space: nowrap
      text-overflow: ellipsis
      &::before
        position: absolute
        right: .15rem
        top: .34rem
        content: '\0020'
        width: 0
        height: 0
        border-left: .13rem solid transparent
        border-right: .13rem solid transparent
        border-top: .13rem solid white
</style>
