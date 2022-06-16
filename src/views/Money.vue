<template>
  <Layout class-prefix="Money">
    <Tag></Tag>
    <Notes></Notes>
    <Types></Types>
    <NumberPad></NumberPad>
  </Layout>
</template>

<script lang="ts">
import Tag from "@/components/Money/Tag.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
export default {
  name: "Money",
  components: { Tag, Notes, NumberPad, Types },
};
</script>

<style lang="scss" scoped>
// ::v-deep设计修改子组件样式
::v-deep .Money-content {
  display: flex;
  flex-direction: column;
}
</style>



