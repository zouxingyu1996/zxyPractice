<template>
  <div id="t_tab">
    <a href="javascript:0;"><img src="./image/nav_item01.png"></a>
    <a href="javascript:0;"><img src="./image/nav_item02.png"></a>
    <a href="javascript:0;"><span>+</span></a>
    <a href="javascript:0;"><img src="./image/nav_item03.png"></a>
    <a href="javascript:0;"><img src="./image/nav_item04.png"></a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
#t_tab
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  display: flex
  flex-direction: row
  text-align: center
  align-items: center
  background: rgba(255, 255, 255, .9)
  border-top: 1px solid #eee
  a
    height: 1rem
    flex: 1
    display: flex
    align-items: center
    justify-items: center
    img
      width: .5rem
      margin: 0 auto
    span
      margin: 0 auto
      display: inline-block
      width: 1rem
      line-height: 1rem
      border-radius: 50%
      background: #5680fa
      color: #fff
      font-size: .5rem
      margin-top: -.8rem
</style>
