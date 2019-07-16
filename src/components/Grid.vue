<template>
  <div class="grid">
    <div class="a" :style="aStyle">A</div>
    <div class="b">B</div>
    <div class="c" :style="cStyle">C</div>

    <collapse-transition class="d">
      <template v-if="d">
        <div v-if="dComp === 'd1'" key="d1">
          <h2>D1</h2>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
        <div v-else-if="dComp === 'd2'" key="d2">
          <p>D2</p>
          <small>Note</small>
        </div>
      </template>
    </collapse-transition>

    <div class="e" v-if="e">E</div>
    <div class="f">F</div>
    <div class="g">G</div>
    <div class="h">H</div>
    <div class="i">I</div>
  </div>
</template>

<script>
import CollapseTransition from './CollapseTransition'
import '@/transitions.scss'

export default {
  name: 'Grid',
  components: { CollapseTransition },
  data () {
    return {
      a: true,
      c: true,
      d: true,
      e: true,
      dComp: 'd1'
    }
  },
  computed: {
    aStyle () {
      return {
        width: this.a ? '220px' : '0'
      }
    },
    cStyle () {
      return {
        width: this.c ? '250px' : '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr minmax(0, auto);
  grid-template-rows: 1fr minmax(0, auto) minmax(0, auto);
  transition: all 0.5s ease;
  grid-gap: 2px;
  margin: 4px;

  > div {
    font-size: 20px;
    box-sizing: border-box;
    border: 1px solid #777;
    background-color: #eee;
    transition: all 0.5s ease;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    background-color: rgb(143, 179, 110);
  }
  .b {
    background-color: rgb(73, 73, 230);
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .c {
    background-color: rgb(223, 223, 146);
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  .d {
    background-color: rgb(228, 161, 122);
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    z-index: 1;
    align-self: end;
  }

  .f, .g, .h, .i {
    background-color: #333;
    color: #fff;
    z-index: 2;
    margin: 2px;
  }

  .e {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    // opacity: 0.5;
    z-index: 0;
  }
  .f {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: start;
    width: 3em;
    height: 3em;
  }
  .g {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    width: 1.25em;
    height: 3em;
  }
  .h {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: end;
    width: 6em;
    height: 1.5em;
  }
  .i {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 2em;
    height: 5em;
    align-self: end;
    justify-self: end;
  }
}
</style>
