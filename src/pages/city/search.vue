<template>
	<div class="box">
		<div class="search">
	  	<input type="text" class="search-text" 
	  	  :placeholder="hint" 
		  	v-model="inputValue" 
		  	:class="{input: indent}"
		  	@focus="handleInputFocus" 
		  	@blur="handleInputBlur">
	  </div>
	  <ul class="list-city" v-if="searchFlag">
		  <li class="city" v-for="(item,index) in getSearchData" :key="index">{{item.city}}</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'index-search',
  props: {
    city: Array
  },
  data () {
    return {
      hint: '输入城市名或拼音',
      inputValue: '',
      indent: false,
      searchFlag: false,
      list: [],
      listcity: []
    }
  },
  watch: {
    inputValue () {
      if (this.inputValue) {
        this.searchFlag = true
        this.$emit('cacher')
      } else {
        this.searchFlag = false
        this.$emit('affichage')
      }
    }
  },
  computed: {
    getSearchData () {
      const SearchData = []
      this.city.forEach((value, index) => {
        value.cityList.forEach((value, index) => {
          let reg = new RegExp(this.inputValue, 'g')
          if (reg.test(value.pinyin)) {
            SearchData.push(value)
          }
        })
      })
      return SearchData
    }
  },
  methods: {
    handleInputFocus () {
      this.hint = ''
      if (!this.indent) {
        this.indent = !this.indent
      }
    },
    handleInputBlur () {
      if (!this.hint) {
        this.hint = '输入城市或拼音'
      }
      this.indent = !this.indent
    }
  }
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.box
		margin-top: .88rem	
		.search
			height: .7rem
			padding: .1rem .2rem
			background: $bgColor
			.search-text
				width: 99%
				height: 0.6rem
				outline: none
				border: none
				text-align: center
				padding-left: 1%
				border-radius: .1rem
			.input
				text-align: left
		.list-city
			width: 100%
			background: white
			.city
				height: .7rem
				line-height: .7rem
				text-indent: .3rem
				color: #1a1a1a
				border-bottom: .01rem solid #e0e0e0
			
</style>
