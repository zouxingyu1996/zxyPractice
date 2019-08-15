<template>
  <div class="home_ipt" @click="href_s(hrefz)">
    <img src="./image/index_icon01.png">
    <input type="text" placeholder="搜索目的地..." :readonly="i_type">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    hrefz: String,
    i_type: Boolean
  },
  created () {
    // this._alert()
  },
  methods: {
    href_s (hrefz) {
      if (hrefz) {
        this.$router.push({
          name: hrefz
        })
      }
    }
  }
}
</script>

<style lang="stylus">
  .home_ipt
    position: resolve
    display: flex
    align-items: center
    margin: 0 .3rem
    input
      width: 100%
      height: 1.1rem
      border: 1px solid #eee
      border-radius: .5rem
      font-size: .34rem
      box-sizing: border-box
      padding-left: 1rem
      outline:none
      box-shadow: 0 .1rem .2rem #eee;
    img
      position: absolute
      width: .5rem
      left: .6rem
</style>
