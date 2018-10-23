<template>
  <div class="paddingTop">
    <Header
      :headTitle="title"
      :goBack="goBack"
    ></Header>
    <Banner></Banner>
    <div class="contentWrap introduce bg-color">
      <p class="title">车享家</p>
      <p class="content">专业服务、正品保障、全国1500家门店，优质服务一站式体验</p>
    </div>
    <div class="contentWrap">
      <ul class="server-infor">
        <li>
          <span class="title">服务项目</span>
          <span class="content">安全检测</span>
        </li>
        <li>
          <span class="title">联系人</span>
          <span class="content">王晓对</span>
        </li>
        <li>
          <span class="title">联系电话</span>
          <span class="content">123123123</span>
        </li>
        <li>
          <span class="title">预约网店</span>
          <span class="content"><input type="text" name="onlineStore" placeholder="请选择服务网店" @click="toSelectOnlineStore"></span>
        </li>
      </ul>
    </div>
    <form class="apply_form" v-on:submit.prevent>
      <div>
        <input type="submit" name="submit" class="apply_submit input_style" value="立即申请" @click="toMyService">
      </div>
    </form>
    <div class="introduce contentWrap warn">
      <p class="title">安全检测</p>
      <p class="content">
        <span>车辆外观、轮胎、油液、空调等26项检测</span><br/>
        <span>更多服务方便快捷，让您安心用车</span>
      </p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/Header'
import Banner from './components/Banner'
export default {
  data () {
    return {
      title: '安全检测',
      goBack: true
    }
  },
  mounted () {},
  components: {
    Header,
    Banner
  },
  computed: {},
  methods: {
    toSelectOnlineStore: function () {
      this.$router.push('/toSelectOnlineStore')
    },
    toMyService: function () {
      this.$router.push('/myService')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.introduce.bg-color {
  background-color: #F4F4F4;
}

.server-infor {
  font-size: .61rem;
  color: #101010;
}

.server-infor li {
  padding: .48rem 1.06rem;
  border-bottom: 1px solid #E6E6E6;
}

.server-infor .title {
  display: inline-block;
  width: 2.6rem;
  margin-right: 1.4rem;
}

.server-infor input::-webkit-input-placeholder {
  color: #dadada;
}

.server-infor input:-moz-placeholder {
  color: #dadada;
}

.server-infor input:-ms-input-placeholder {
  color: #dadada;
}

.apply_form {
  background-color: #fff;
  padding-top: 1.3rem;
  div {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .input_style {
      border-radius: .1rem;
      margin-bottom: .4rem;
      @include wh(100%, 1.4rem);
    }
    .apply_submit {
      background-color: $blue;
      @include sc(.65rem, #fff);
    }
  }
}

.warn img {
  @include wh(.74rem, .74rem);
}

</style>
