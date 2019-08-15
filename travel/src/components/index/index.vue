<template>
  <div class="home">
    <h1>说走就走的旅行</h1>
    <input-box v-bind="post"></input-box>
    <div class="home_banner">
      <a href="javascript:0" @click="shade_hide()"><img src="../../common/image/index_img01.jpg"></a>
      <a href="javascript:0"><img src="../../common/image/index_img02.jpg"></a>
      <a href="javascript:0"><img src="../../common/image/index_img03.jpg"></a>
      <a href="javascript:0"><img src="../../common/image/index_img04.jpg"></a>
    </div>
    <div class="home_box">
      <div class="home_box_header">
        <h3>受欢迎的旅游景点</h3>
        <a href="javascript:0">查看所有></a>
      </div>
      <div class="home_box_item">
        <img src="../../common/image/index_img05.png">
        <div class="home_box_itemx">
          <h3>旧金山</h3>
          <span>18,015家酒店</span>
          <div class="home_box_itemz">
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><span>+8</span></div>
            <span class="home_box_itemt">参观了这座城市</span>
          </div>
        </div>
        <span>8.9</span>
      </div>
      <div class="home_box_item">
        <img src="../../common/image/index_img05.png">
        <div class="home_box_itemx">
          <h3>旧金山</h3>
          <span>18,015家酒店</span>
          <div class="home_box_itemz">
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><span>+8</span></div>
            <span class="home_box_itemt">参观了这座城市</span>
          </div>
        </div>
        <span>8.9</span>
      </div>
      <div class="home_box_item">
        <img src="../../common/image/index_img05.png">
        <div class="home_box_itemx">
          <h3>旧金山</h3>
          <span>18,015家酒店</span>
          <div class="home_box_itemz">
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><img src="../../common/image/indec_icon01.png"></div>
            <div><span>+8</span></div>
            <span class="home_box_itemt">参观了这座城市</span>
          </div>
        </div>
        <span>8.9</span>
      </div>
    </div>
    <div class="home_shade" @click="shade_hide()" v-if="shade"></div>
    <div class="home_shade_box animated fadeInUp" v-if="shade">
      <div class="home_shade_boxh">
        <img src="../../common/image/index_img06.jpg">
        <h3>拉斯维加斯酒店</h3>
        <span>20,084酒店可用</span>
      </div>
      <div class="home_shade_boxb">
        <div><img src="../../common/image/indec_icon01.png"></div>
        <div><img src="../../common/image/indec_icon01.png"></div>
        <div><span>+8</span></div>
        <span class="home_shade_boxt">参观了这座城市</span>
      </div>
      <div class="home_shade_boxi">
        <img src="../../common/image/index_img07.png">
        <img src="../../common/image/index_img08.png">
        <img src="../../common/image/index_img09.png">
      </div>
      <div class="home_shade_boxbtn">
        <a href="javascript:0;">酒店列表</a>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from 'components/inputbox/inputbox'
export default {
  data () {
    return {
      shade: false,
      post: {
        i_type: true,
        hrefz: 'Search'
      }
    }
  },
  methods: {
    shade_hide () {
      this.shade = !this.shade
    }
  },
  components: {
    InputBox
  }
}
</script>

<style scoped lang="stylus">
  .home
    h1
      color: #203152
      font-size: .6rem
      margin: .6rem .3rem
    .home_banner
      margin-top: .6rem
      margin-left: .3rem
      white-space:nowrap
      overflow-x: scroll
      font-size: 0
      a
        display: inline-block
        margin-right: .3rem
        img
          width: 2.6rem
          border-radius: .2rem
    .home_box
      margin: .5rem .3rem 1.5rem .3rem
      font-size: .34rem
      .home_box_header
        line-height: 1rem
        overflow: hidden
        h3
          font-size: .4rem
          float: left
        a
          float: right
          color: #4a90e2
    .home_box_item
      position: relative
      width: 100%
      height: 4.2rem
      margin: .3rem 0
      >img
        width: 100%
        height: 4.2rem
      >span
        position: absolute
        right: .5rem
        top: .3rem
        background: #fa607d
        color: #fff
        padding: .2rem .3rem
        border-radius: .3rem
      .home_box_itemx
        position: absolute
        left: -.2rem
        bottom: .5rem
        width: 4.4rem
        height: 2.3rem
        background: rgba(255, 255, 255, .8)
        border-radius: .1rem
        padding-left: .4rem
        h3
          font-size: .38rem
          margin: .2rem 0
        >span
          font-size: .3rem
          color: #7c8698
        .home_box_itemz
          overflow: hidden
          div
            width: .7rem
            height: .7rem
            float: left
            margin-left: -.1rem
            margin-top: .3rem
            &:nth-child(1)
              margin-left: 0
            img
              width: 100%
            span
              display: inline-block
              width: .7rem
              line-height: .7rem
              background: #5680fa
              border-radius: 50%
              text-align: center
              color: #fff
              font-size: .3rem
          .home_box_itemt
            color: #7c8698
            font-size: .3rem
            display: inline-block
            margin-top: .3rem
            margin-left: .2rem
            line-height: .7rem
    .home_shade
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: rgba(0, 0, 0, .5)
      z-index: 99
    .home_shade_box
      position: fixed
      top: 3rem
      left: 0
      right: 0
      bottom: 0
      background: #fff
      z-index: 109
      border-top-left-radius: .5rem
      border-top-right-radius: .5rem
      .home_shade_boxh
        text-align: center
        font-size: 0
        img
          width: 4rem
          margin: .5rem auto
          border-radius: .2rem
        h3
          font-size: .4rem
        span
          font-size: .3rem
          color: #7c8698
          display: inline-block
          padding: .2rem 0
      .home_shade_boxb
          overflow: hidden
          font-size: 0
          display: flex
          align-items: center
          justify-content: center
          position: relative
          &:before
            position: absolute
            content: ''
            width: 3.5rem
            height: 1px
            background: #eee
            top: .1rem
          div
            width: .7rem
            height: .7rem
            display: inline-block
            margin-left: -.1rem
            margin-top: .3rem
            &:nth-child(1)
              margin-left: 0
            img
              width: 100%
            span
              display: inline-block
              width: .7rem
              line-height: .7rem
              background: #5680fa
              border-radius: 50%
              text-align: center
              color: #fff
              font-size: .3rem
          .home_shade_boxt
            color: #7c8698
            font-size: .3rem
            display: inline-block
            margin-top: .3rem
            margin-left: .2rem
            line-height: .7rem
        .home_shade_boxi
          margin: .4rem .3rem
          display: flex
          img
            flex: 1
            margin: 0 .1rem
        .home_shade_boxbtn
          margin: 0 .3rem
          a
            display: inline-block
            width: 100%
            line-height: 1rem
            background: #5680fa
            color: #fff
            font-size: .36rem
            text-align: center
            border-radius: .5rem
</style>
