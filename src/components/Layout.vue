<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav :class="classPrefix && `${classPrefix}-Nav`"></Nav>
  </div>
</template>

<script>
// classPrefix设计实现外部控制内部css的办法，需一次自定义头部。
export default {
  name: "Layout",
  props: ["classPrefix"],
  components: {},
};
</script>


<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>