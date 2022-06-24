<template>
  <svg class="icon" :fill="fill || 'none'" :stroke="stroke || 'currentColor'">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>



<script lang="ts">
// 自动import目录下所有文件
let impoetAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  impoetAll(require.context("../assets/icons", true, /\.svg$/));
} catch {
  console.log(new Error("impoetAll fail"));
}

export default {
  name: "IconSvg",
  props: ["name", "fill", "stroke"],
};
</script>


<style lang="scss" scoped>
// svg应该采用fill填充的方式绘制path，不要采用stroke描边的方式，例如三角形只能采用fil了，stroke实现不了，所以规范设计师绘制svg采用fill
// fill的svg在svg-sprite-loader，svgo-loader里面也更加好管理。
// 但是我的意见是采用单文件组件的形式制作svg，svg未来是面向动态的，其他方法太限制了svg的优点。
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  // fill: none;
  overflow: hidden;
  // stroke: currentColor;
}
</style>

