<template>
  <div>
    <banner :bannerImg="bannerImg" :imgList="imgList"></banner>
  </div>
</template>

<script>
  import Banner from './banner.vue'
  import axios from 'axios'
  export default {
    name: 'detail',
    components: {
      Banner
    },
    props: {
      sightId: [Number, String]
    },
    data () {
      return {
        bannerImg: '',
        imgList: ''
      }
    },
    created () {
      this.getDetaInfo()
    },
    watch: {
      sightId () {
        if (this.sightId) {
          this.getDetaInfo()
        }
      }
    },
    methods: {
      getDetaInfo () {
        axios.get('/api/detail.json', {
          params: {
            id: this.sightId
          }
        })
        .then(this.handleGetDatailSucc.bind(this))
        .catch(this.handleGetDatailErr.bind(this))
      },
      handleGetDatailSucc (res) {
        res && (res = res.data)
        if (res && res.ret && res.data) {
          this.bannerImg = res.data.bannerImg
          this.imgList = res.data.imgList
        } else {
          this.handleGetDatailErr()
        }
      },
      handleGetDatailErr () {
        console.log('error')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>