export default {
  getBootTime () {
    const requestStart = window.performance.timing.requestStart
    const domInteractive = window.performance.timing.domInteractive

    return domInteractive - requestStart;
  }
}
