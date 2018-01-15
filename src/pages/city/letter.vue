<template>
  <div class="letter-box"  @click="handleLetterClick">
    <div v-for="(item, index) of letter"  class="letter">{{item.letter}}</div>
  </div>
</template>

<script>
export default {
  name: 'index-letter',
  props: {
    letter: Array
  },
  methods: {
    handleLetterClick (e) {
      if (e.target.nodeName.toLowerCase() === 'div') {
        this.$bus.$emit('letter', e.target.innerHTML)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .letter-box
    position: fixed
    top: 25%
    right: 0
    .letter
      width: 0.35rem
      height: 0.35rem
      text-align: center
      line-height: 0.35rem
      color: $bgColor
</style>
