<template>
  <Layout class-prefix="Money">
    <Tag
      :data-source="tags"
      @update:dataSource="addTagList"
      @update:selected="changeTags(arguments[0])"
    ></Tag>
    <Notes fieldName="备注" placeholder="请输入备注" @update:value="onUpdateNotes"></Notes>
    <Tabs :tabData="tabData" :tabNow.sync="record.tab"></Tabs>
    <NumberPad @submit="saveRecord" @update:amount="onUpdateAmount"></NumberPad>
  </Layout>
</template>



<script lang="ts">
import Vue from "vue";
import Tag from "@/components/Money/Tag.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tabs from "@/components/Money/Tabs.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import localStorage from "@/assets/models/model";

@Component({ components: { Tag, Notes, NumberPad, Tabs } })
export default class Money extends Vue {
  tags = localStorage.tagList;
  tabData=['支出','收入']

  record: RecordItem = {
    tags: [],
    notes: "",
    tab: "支出",
    amount: 0,
  };
  recordList: RecordItem[] = localStorage.recordList;

  changeTags(tags: string[]) {
    this.record.tags = tags;
    //上面的arguments[0]===$event
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }

  onUpdateAmount(amount: string) {
    this.record.amount = parseFloat(amount);
    console.log(amount);
    
  }
  saveRecord() {
    const newRecord: RecordItem = JSON.parse(JSON.stringify(this.record));
    newRecord.createdAt = new Date().toISOString();
    this.recordList.push(newRecord);
  }
  addTagList(newTag:string){
    this.tags = localStorage.tagListPush(newTag)
  }
  @Watch("recordList")
  onRecordListChange() {
    localStorage.recordList = this.recordList;
  }
}
</script>

<style lang="scss" scoped>
// ::v-deep设计修改子组件样式
::v-deep .Money-content {
  display: flex;
  flex-direction: column;
}
</style>



