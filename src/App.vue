<template>
  <grid/>
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'app',
  components: {
    Grid
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  display: flex;
  height: 100%;
  margin: 0;
}
</style>
