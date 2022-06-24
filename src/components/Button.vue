
<template>
  <div class="createTag-wrapper">
    <button class="createTag" ><slot /></button>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Button extends Vue {
}
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.createTag {
  background: rgba($color: $color-highlight, $alpha: 1);
  color: $color;
  border-radius: 2em;
  border: none;
  padding: 0.5em 1em 0.5em 1em;
  &-wrapper {
    text-align: center;
    padding: 1em;
  }
}
</style>
