<template>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.logBootTime()
    })
  },

  methods: {
    logBootTime () {
      const requestStart = window.performance.timing.requestStart
      const domInteractive = window.performance.timing.domInteractive

      console.log('The page loading took ' + (domInteractive - requestStart) + 'ms')
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/app';
</style>
