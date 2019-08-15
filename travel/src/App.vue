<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="stylus">
@import './common/stylus/reset.styl'
</style>
