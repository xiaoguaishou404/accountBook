<template>
  <div class="Layout">
    <slot></slot>
    <Nav></Nav>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {},
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>