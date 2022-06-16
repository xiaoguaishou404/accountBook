<template>
  <div class="tag">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>衣</li>
      <li>行</li>

    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tag",
};
</script>

<style lang="scss" scoped>
.tag {
  flex-grow: 1;
  font-size: 14px;
  padding: 1em 1em 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  // 自动滚动坑：overflow: auto;配合flex-grow: 1;完美实现子级滚动，父级不会动，需要每个都写上overflow: auto;就会定位到超出的那个元素让他滚动。

  > .current {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    // overflow: auto;

    > li {
      background: rgba(192, 192, 192, 0.5);
      border-radius: 1em;
      padding: 0.2em 0.5em;
      margin: 0.3em;
      box-shadow: -0.1em -0.1em 0.1em rgba(0, 0, 0, 0.3);
    }
  }
  > .new {
    button {
      background: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      border-bottom: 2px solid rgba(0, 0, 0, 0.3);
      padding: 0 0.2em;
      margin: 0.3em;
    }
  }
}
</style>