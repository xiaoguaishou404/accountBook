<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <div class="left" @click="iuputContent">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>÷</button>
      </div>

      <div class="right">
        <button @click="remove">删除</button>

        <button @click="clear">清空</button>
        <button @click="ok" class="ok">OK</button>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  output = "0";

  iuputContent(e: MouseEvent) {
    const button = e.target as HTMLButtonElement;
    const input = button.textContent as string;
    if ("+-×÷".indexOf(input) >= 0) {
      return;
    }
    if (this.output.length === 12) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = "0";
  }
  ok() {
    this.$emit("update:amount", this.output);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    font-size: 3em;
    font-family: Consolas, monospace;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding: 0 10px;
    box-shadow: 0 0.05em 0.1em 0.1em rgba(0, 0, 0, 0.1) inset,
      0 0.1em 0.2em 0.1em rgba(0, 0, 0, 0.2) inset;
  }
  .buttons {
    display: flex;
    > .left {
      flex-wrap: wrap;
      button {
        @extend %btnSize;
        &.zero {
          width: 40vw;
        }
        &:nth-child(4n) {
          background-color: rgba($color: #000000, $alpha: 0.05);
        }
      }
    }
    > .right {
      flex-direction: column;
      button {
        @extend %btnSize;
        &.ok {
          height: 40vw;
        }
      }
    }
  }
}
</style>