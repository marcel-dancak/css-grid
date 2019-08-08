<template>
  <div class="grid">
    <transition name="collapse-width">
      <div v-if="a" class="a flex-center" key="a">A</div>
    </transition>
    <div class="b">B</div>
    <transition name="collapse-width">
      <div v-if="c" class="c">
        <span>C</span>
      </div>
    </transition>

    <collapse-transition class="d">
      <template v-if="d">
        <div v-if="dComp === 'D1'" key="d1">
          <h2>D1</h2>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
        <div v-else-if="dComp === 'D2'" key="d2">
          <p>D2</p>
          <small>Note</small>
        </div>
      </template>
    </collapse-transition>

    <div class="e" v-if="e">E</div>
    <div class="f flex-center">F</div>
    <div class="g flex-center">G</div>
    <div class="h flex-center">H</div>
    <div class="i flex-center">I</div>
  </div>
</template>

<script>
import CollapseTransition from './CollapseTransition'
import '@/transitions.scss'

export const GridData = {
  a: true,
  c: true,
  d: true,
  e: true,
  dComp: 'D1'
}
export default {
  name: 'Grid',
  components: { CollapseTransition },
  data () {
    return GridData
  }
}
</script>

<style lang="scss" scoped>
.collapse-width-enter-active, .collapse-width-leave-active {
  transition: all .5s;
}
.collapse-width-enter, .collapse-width-leave-to {
  width: 0!important;
}
.grid {
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr minmax(0, auto);
  grid-template-rows: 1fr minmax(0, auto) minmax(0, auto);
  transition: all 0.5s ease;
  grid-gap: 2px;
  margin: 4px;
  position: relative;
  overflow: hidden;

  > div {
    font-size: 20px;
    box-sizing: border-box;
    border: 1px solid #777;
    background-color: #eee;
    transition: all 0.5s ease;
    overflow: hidden;
    position: relative;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    background-color: rgb(143, 179, 110);
    width: 250px;
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
    width: 300px;
    > * {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
  .d {
    background-color: rgb(228, 161, 122);
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    z-index: 1;
    align-self: end;
    width: 100%;
    display: block;
    > * {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
    p {
      margin: 16px 0;
    }
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
    width: 100%;
    text-align: center;
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
    align-self: end;
    justify-self: end;
    width: 2em;
    height: 5em;
  }
}
</style>
