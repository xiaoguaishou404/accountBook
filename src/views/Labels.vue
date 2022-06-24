<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag"
        :to="`/labels/edit/${tag}`"
      >
        <span>{{ tag }}</span>
        <IconSvg fill="inherit" name="amend" />
      </router-link>
    </div>
    <Button @click.native="createTag"><span>新建标签</span></Button>
  </Layout>
</template>


<script lang="ts">
import Vue from "vue";
import Button from "@/components/Button.vue";

import { Component, Prop, Watch } from "vue-property-decorator";
import localStorage from "@/assets/models/model";
@Component({ components: { Button } })
export default class Labels extends Vue {
  tags = localStorage.tagList;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name === null) {
      return;
    } else if (name === "") {
      window.alert("标签名不能为空");
    } else {
      try {
        this.tags = localStorage.tagListPush(name);
      } catch (err: any) {
        alert(err.message);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
  display: flex;
  flex-direction: column;

  & > .tag {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid black;
    & .icon {
      width: 32px;
      height: 32px;
    }
  }
}

</style>
