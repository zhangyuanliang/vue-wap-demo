<template>
  <div slot="content">
    <div class="split"></div>
    <div class="view-wrapper">
      <div class="index-list-wrapper">
        <index-list ref="lal" :cityList="cityList" :title="title" @select="selectItem" @title-click="clickTitle"></index-list>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import IndexList from '../components/index-list/index-list.vue'
import cityData from '../data/index-list.json'

export default {
  components: {
    IndexList
  },
  data () {
    return {
      title: 'indexList',
      cityData: cityData
    }
  },
  computed: {
    cityList () {
      let ret = []
      this.cityData.forEach((cityGroup) => {
        let group = {}
        group.name = cityGroup.name
        group.items = []
        cityGroup.cities.forEach((city) => {
          let item = {}
          item.name = city.name
          item.value = city.cityid
          group.items.push(item)
        })
        ret.push(group)
      })
      return ret
    }
  },
  methods: {
    selectItem (item) {
      this.$router.back()
      console.log(item)
    },
    clickTitle (title) {
      console.log(title)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .split
    position: relative
    z-index: 10
    width: 100%
    height: 10px
    margin-top: -10px
    background: #efeff4

  .view-wrapper
    position: fixed
    top: 81px
    left: 0
    bottom: 0
    width: 100%
    .index-list-wrapper
      height: 100%
      width: 95%
      margin: 0 auto
</style>
