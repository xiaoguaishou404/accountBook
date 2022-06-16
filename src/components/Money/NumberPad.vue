<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <div class="left"><button>1</button>
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
        <button>清空</button>
        <button>删除</button>
        <button class="ok">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad",
};
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