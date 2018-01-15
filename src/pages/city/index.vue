<template>
  <div>
    <index-header></index-header>
    <index-search :city="wholecity" 
      @cacher="handleCacher" 
      @affichage="handleAffichage">
    </index-search>
    <index-hot-city :list="hotcity" :class="{show: cityshow}"></index-hot-city>
    <index-whole-city :list="wholecity" :class="{show: cityshow}"></index-whole-city>
    <index-letter :letter="wholecity" :class="{show: cityshow}"></index-letter>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSearch from './search'
  import IndexHotCity from './hotcity'
  import IndexWholeCity from './wholecity'
  import IndexLetter from './letter'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSearch,
      IndexHotCity,
      IndexWholeCity,
      IndexLetter
    },
    data () {
      return {
        cityshow: false,
        hotcity: [],
        wholecity: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/city.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data
        this.hotcity = data.data.hotCity
        this.wholecity = data.data.wholeCity
      },
      handleGetDataErr () {
        console.log('error')
      },
      handleCacher () {
        this.cityshow = true
      },
      handleAffichage () {
        this.cityshow = false
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .show
    display: none
</style>