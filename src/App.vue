<template>
  <div id="app">
    <router-view />
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
}
</style>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    if (document.compatMode == "CSS1Compat") {
      document.querySelector("#app").style.height =
        document.documentElement.clientHeight + "px";
    } else {
      document.body.style.height = window.body.clientHeight + "px";
    }
  },
};
</script>
