<template>
  <div>
    <Header
      :headTitle="title"
      :goBack="goBack"
    ></Header>
    <div class="index-body">
      <span>我的订单</span>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
export default {
  data () {
    return {
      title: '我的订单',
      goBack: true
    }
  },
  mounted () {},
  components: {
    Header,
    Footer
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '@/styles/mixin.scss';
  .index-body {
    margin: 3rem 1rem;
  }

  .index-body span{
    font-size: .8rem;
    color:#5376e9;
  }
</style>
