<template>
  <div id="nav">
    <!-- <icon-base width="48" height="48" icon-name="write"
      ><icon-labels
    /></icon-base>
    <router-link to="/lables">Labels</router-link>

    <icon-base width="48" height="48" icon-name="money"
      ><icon-money
    /></icon-base>
    <router-link to="/money">Money</router-link>

    <icon-base iconColor="none" width="48" height="48" icon-name="statistics"
      ><icon-statistics
    /></icon-base>
    <router-link to="/statistics">Statistics</router-link>

    <icon-watch /> -->

    <IconSvg name="labels" />labels
    <IconSvg name="money" />money
    <IconSvg name="statistics" />statistics
  </div>
</template>


<style scoped>
#id {
  border: 1px solid red;
}
</style>

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
