<template>
  <div class="main">
    <city-header></city-header>
    <search :list="list"></search>
    <list class="list" :list="list" :hotcity="hotcity" ref="list"></list>
    <sidebar :list="list" @changeLetter="handleLetterChange"></sidebar>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './header'
  import Search from './search'
  import List from './list'
  import Sidebar from './sidebar'
  export default {
    name: 'index',
    data () {
      return {
        list: [],
        hotcity: []
      }
    },
    components: {
      CityHeader,
      Search,
      List,
      Sidebar
    },
    created () {
      this.getListInfo()
    },
    methods: {
      getListInfo () {
        axios.get('/api/city.json')
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          res.data.list && (this.list = res.data.list)
          res.data.hotCity && (this.hotcity = res.data.hotCity)
        } else {
          this.handleGetListErr()
        }
      },
      handleGetListErr () {
        console.log('请求发送失败')
      },
      handleLetterChange (item) {
        this.$refs.list.scrollToIndex(item)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .list
      overflow: hidden
      flex: 1
</style>