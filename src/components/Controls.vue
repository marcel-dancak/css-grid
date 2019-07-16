<template>
  <div class="controls">
    <div>
      <b-checkbox v-model="a">A</b-checkbox>
    </div>
    <div>
      <b-checkbox v-model="c">C</b-checkbox>
    </div>
    <div class="row">
      <b-checkbox v-model="d">D</b-checkbox>
      <b-select v-model="dComp">
        <option
          v-for="option in ['D1', 'D2']"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </b-select>
    </div>
    <div>
      <b-checkbox v-model="e">E</b-checkbox>
    </div>
  </div>
</template>

<script>
import { GridData } from './Grid'

export default {
  name: 'Controls',
  data () {
    return GridData
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;

  > div {
    margin: 4px 0;
  }
  .row {
    display: flex;
    flex-direction: row;
    > *:not(:last-child) {
      margin-right: 4px;
    }
  }
  /deep/ .select {
    height: 2em;
    select {
      height: inherit;
    }
  }
}
</style>
