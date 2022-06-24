<template>
  <div class="notes">
    <label>
      <span class="name">{{ fieldName }}</span>
      <input
        @input="onValueChanged"
        :value="value"
        tab="text"
        :placeholder="placeholder"
        autocomplete="off"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop({ required: true }) readonly fieldName!: string;
  @Prop() placeholder?: string;
  @Prop({ default: "" }) readonly value!: string;

  onValueChanged(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value as string;
    this.$emit("update:value", value);
  }
}
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