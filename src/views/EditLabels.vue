<template>
  <Layout>
    <div class="navBar">
      <div @click="goBack">
        <IconSvg fill="inherit" name="left" />
      </div>
      <span>编辑标签</span>
    </div>
    <Notes
      :value.sync="tagNow"
      fieldName="标签"
      placeholder="请输入新的标签名"
    />
    <Button @click.native="removeTag"> <span>删除标签</span></Button>
  </Layout>
</template>




<script lang="ts">
import Vue from "vue";
import Notes from "@/components/Money/Notes.vue";
import Button from "@/components/Button.vue";

import { Component, Prop, Watch } from "vue-property-decorator";
import localStorage from "@/assets/models/model";
@Component({ components: { Notes, Button } })
export default class EditLabels extends Vue {
  tagNow = this.$route.params.tagNow;
  tagNowIndex = localStorage.tagList.indexOf(this.tagNow);

  @Watch("tagNow")
  editTagNow() {
    localStorage.editTagListItem(this.tagNow, this.tagNowIndex);
  }
  removeTag() {
    localStorage.removeTagItem(this.tagNowIndex);
    this.goBack()
  }
  goBack() {
    this.$router.push({ path:'/labels'})
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.navBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  > span {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  > .icon {
    margin-right: -1em;
  }
}
</style>
