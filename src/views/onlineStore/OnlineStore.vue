<template>
  <div class="paddingTop">
    <Header
      :headTitle="title"
      :goBack="goBack"
    ></Header>
    <form class="search-form">
      <el-input size="mini" placeholder="搜索" class="search-input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </form>
    <div slot="content">
      <div class="split"></div>
      <div class="view-wrapper">
        <div class="index-list-wrapper">
          <index-list ref="lal" :cityList="cityList" :title="title" @select="selectItem" @title-click="clickTitle"></index-list>
        </div>
      </div>
    </div>
<!--
    <div class="contacts">
      <ul>
        <li class="title">A</li>
        <li class="content">郑州和静店（郑州三维大厦西侧)</li>
        <li class="content">郑州和静店（郑州三维大厦西侧)</li>
      </ul>
    </div>
    <div class="linkContacts">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Header from '../../components/header/Header'
import IndexList from '../../components/index-list/index-list.vue'
import cityData from '../../data/index-list.json'

export default {
  data () {
    return {
      title: '服务网店',
      goBack: true,
      cityData: cityData
    }
  },
  mounted () {},
  components: {
    Header,
    IndexList
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
    },
    clickTitle (title) {
      console.log(title)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.search-form {
  z-index: 11;
  background-color: #efeff4;;
  display: flex;
  .search-input {
    z-index: 11;
    margin: .4rem .2rem;
    flex: 4;
    line-height: 1.22rem;
    @include sc(0.65rem, #828285);
    border-radius: 0.22rem;
  }
}
.contacts {
  li {
    line-height: 1.57rem;
    font-size: .61rem;
  }
  .title {
    padding-left: .74rem;
    background: #FAF8F9;
    border-top: .04rem solid #EFEEEF;
    border-bottom: .04rem solid #EFEEEF;
  }
  .content {
    height: 1.57rem;
    padding-left: .48rem;
    border-bottom: .04rem dotted #EFEEEF;
  }
}
.linkContacts {
  position: absolute;
  top: 5.4rem;
  right: 0rem;
  transform-origin: 0% 0%;
  -webkit-transform-origin: 0% 0%;
  transform: scale(0.6);
  -webkit-transform: scale(0.6);
}
.linkContacts li {
  font-size: .8rem;
  color: #2B93FE;
  text-align: center;
}

.split {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 10px;
  margin-top: -10px;
  background: #efeff4;
}

.view-wrapper {
  position: fixed;
  top: 81px;
  left: 0;
  bottom: 0;
  width: 100%;
  .index-list-wrapper {
    height: 100%;
    width: 95%;
    margin: 0 auto;
  }
}
</style>
