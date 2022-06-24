<template>
  <div class="tabs" :class="{ [`${classPrefix}-tabs`]: classPrefix }">
    <ul>
      <li
        class="tabs-li"
        v-for="tab in tabData"
        :key="tab"
        :class="tab === tabNow && 'selected'"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Tabs extends Vue {
  @Prop() readonly tabNow!: string;
  @Prop() readonly tabData!: [];
  @Prop() readonly classPrefix: string | undefined;

  selectTab(tab: string) {
    this.$emit("update:tabNow", tab);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: rgba($color: #000000, $alpha: 0.3);
  > ul {
    display: flex;
    color: rgba(0, 0, 0, 0.3);

    
  }
}
.tabs-li {
      padding: 1em;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      &.selected {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.6);
      }
    }
</style>