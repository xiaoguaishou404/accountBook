<template>
  <div id="app">
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-kai;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
}
</style>

<script>
// cs
export default {
  name: "App",
  components: {},
  mounted() {
    document.querySelector("#app").style.height =
      document.documentElement.clientHeight + "px";

    window.addEventListener("resize", () => {
      document.querySelector("#app").style.height =
        document.documentElement.clientHeight + "px";
    });
  },
};
</script>
