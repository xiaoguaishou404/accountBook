<template>
  <Layout  class-prefix="Money">
    <div class="tags">
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

    <div class="notes">
      <label>
        <span class="name">备注</span>

        <input class="value" type="text" placeholder="请输入" autocomplete="off">
      </label>
    </div>

    <div class="types">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

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

  </Layout>
</template>

<script>
export default {
  name: "Money",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 0 1em;
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
// ::v-deep设计修改子组件样式
::v-deep .Money-content {
  display: flex;
  flex-direction: column;
}
</style>



