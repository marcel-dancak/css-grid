<template>
  <div class="page">
    <grid/>
    <controls/>
  </div>
</template>

<script>
import Grid from './components/Grid.vue'
import Controls from './components/Controls.vue'

export default {
  name: 'app',
  components: {
    Grid, Controls
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$primary: #3c4352;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
body {
  display: flex;
  height: 100%;
  margin: 0;

  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .controls {
      position: absolute;
      background-color: #eee;
      border-radius: 4px;
      border: 1px solid #333;
      margin: 8px;
      padding: 4px;
      opacity: 0.9;
      z-index: 100;
    }
  }
}
</style>
