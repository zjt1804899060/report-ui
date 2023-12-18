<template>
  <section class="app-main" :class="[{ 'app-main--p0': $route.path == '/index' }]">
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <keep-alive :include="cacheViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'AppMain',
  computed: {
    ...mapGetters(['cacheViews']),
    key() {      
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  padding: 16px 20px 0;
  height: calc(100vh - 66px);
  position: relative;
  overflow: auto;
  background: #f5f8fa;
  &--p0 {
    padding: 0;
    height: calc(100vh - 50px);
  }
}
</style>
