<template>
  <div class="notes">
    <label>
      <span class="name">备注</span>
      <input class="value" type="text" placeholder="请输入" autocomplete="off">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes",
};
</script>

<style lang="scss" scoped>
.notes {
  background: rgba($color: #000000, $alpha: 0.1);
  > label {
    display: flex;
  }
  .name {
    white-space: nowrap;
    padding: 1em;
  }
  input {
    width: 0px; //此宽度解决font-size导致input放大超出手机宽度后可以滑屏的问题，设置未0后并没有影响，宽度取决于下面。后面元素也不会叠加上前，具有响应式
    flex-grow: 1; //宽度取决于这里，宽度设置小于这里，宽度失效，大于时宽度有效
    &:focus {
      font-size: 1.5em;
    }
  }
}
</style>