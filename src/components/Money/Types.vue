<template>
  <div class="types">
    <ul>
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  props: {
    propMessage: String,
  },
})

export default class Types extends Vue {
  type = "-";
  this.propMessage;
  selectType(type: string) {
    if (type) {
      this.type = type;
    }
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: rgba($color: #000000, $alpha: 0.3);
  > ul {
    display: flex;
    color: rgba(0, 0, 0, 0.3);

    > li {
      padding: 1em;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      &.selected {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>