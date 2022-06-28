<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <IconSvg name="labels" />标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <IconSvg name="money" />收支
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <IconSvg name="statistics" />统计
    </router-link>

    <!-- svgvue组件写法 -->
    <!-- <icon-base iconColor="none" width="48" height="48" icon-name="statistics"
      ><icon-statistics
    /></icon-base>
    <icon-watch /> -->
  </nav>
</template>




<script lang="ts">
import IconBase from "@/components/IconBase.vue";
import IconLabels from "@/components/icons/labels.vue";
import IconMoney from "@/components/icons/money.vue";
import IconStatistics from "@/components/icons/statistics.vue";
// 动态svg
import IconWatch from "@/components/animatedicons/IconWatch.vue";

export default {
  components: {
    IconBase,
    IconLabels,
    IconMoney,
    IconStatistics,
    IconWatch,
  },
};
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    // scoped组件父级可以控制子级根节点样式,因为根节点应属于父级，两端设置的标签属性class等都会整合的
    .icon {
      width: 32px;
      height: 32px;
    }

    &.selected {
      //&表示.item本身，平级，不是子级
      > .icon {
        color: $color-highlight;
        stroke: $color-highlight;
      }
    }
  }
}
</style>
