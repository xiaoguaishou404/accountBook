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
  props: ["classPrefix"], //prop其实就是把父元素在根节点上面写的Attribute提取下来给我们，省得我们去getAttribute，setAttribute了，不写Props，这些Attribute都会完整继承到父节点上。不论是自定义的，id，class等Attribute。相关属性$Attr
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