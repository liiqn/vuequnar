<template>
  <div class="box">
    <div v-for="item of list">
      <div class="letter">{{item.letter}}</div>
      <p class="city" v-for="city of item.cityList">{{city.city}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-whole-city',
  props: {
    list: Array
  },
  created () {
    this.$bus.$on('letter', this.handleLetter)
  },
  methods: {
    handleLetter (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .letter
    height: .5rem
    line-height: .5rem
    text-indent: .3rem
    color: #555555
    background: $bgCityColor
    border-bottom: 1px solid $boderColor
  .city
    height: .7rem
    line-height: .7rem
    text-indent: .3rem
    color: #1a1a1a
    border-bottom: 1px solid #e0e0e0
</style>
