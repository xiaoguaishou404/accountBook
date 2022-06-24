<template>
  <div class="tag">
    <ul class="current">
      <li
        v-for="tag in dataSource"
        :key="tag"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签➕</button>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tag extends Vue {
  @Prop({ default: [] }) readonly dataSource!: string[];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex >= 0) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:selected", this.selectedTags);
  }
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name === null) {
      return;
    } else if (name === "") {
      window.alert("标签名不能为空");
    } else {
      // localStorage.tagListPush(name);

      this.$emit("update:dataSource", name);
    }
  }
}
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
    align-content: flex-start;
    // overflow: auto;

    > li {
      $bg: rgba(192, 192, 192, 0.5);
      background: $bg;
      border-radius: 1em;
      padding: 0.2em 0.5em;
      margin: 0.3em;
      box-shadow: -0.1em -0.1em 0.1em rgba(0, 0, 0, 0.3);
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding: 1em 0 0 0;

    button {
      background: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      border-bottom: 2px solid rgb(78, 186, 136);
      padding: 0 0.2em;
      margin: 0.3em;
    }
  }
}
</style>