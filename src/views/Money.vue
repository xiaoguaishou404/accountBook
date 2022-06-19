<template>
  <Layout class-prefix="Money">
    <Tag
      :data-source.sync="tags"
      @update:selected="changeTags(arguments[0])"
    ></Tag>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Types :type.sync ="record.type"></Types>
    <NumberPad  @update:value="onUpdateAmount"></NumberPad>
  </Layout>
</template>



<script lang="ts">
import Vue from "vue";
import Tag from "@/components/Money/Tag.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import { Component, Prop } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount?: number; //?表示amount不是必要存在的，下面的默认值就可以不写
};

@Component({ components: { Tag, Notes, NumberPad, Types } })
export default class Money extends Vue {
  tags = [
    "抽烟🚬",
    "喝酒🍺",
    "烫头👴",
    "娱乐🙈",
    "工作👨‍💻",
    "出租🚕",
    "高铁🚄",
    "飞机✈️",
    "干饭🥘",
    "买衣服👔",
    "送礼🧧",
    "化妆品💋",
    "足球⚽",
    "打麻将🀄",
    "超市🛒",
    "零食🍔",
    "话费📱",
    "甜食🍭",
    "西瓜🍉",
    "橙子🍊",
    "买菜🥬",
    "旅游🏞️",
    "生病🏥",
    "房租💒",
    "水费🚿",
    "洗浴品🧴",
    "纸巾🧻",
  ];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  changeTags(tags: string[]) {
    this.record.tags = tags;
    //上面的arguments[0]===$event
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  
  onUpdateAmount(amount: string) {
    this.record.amount = parseFloat(amount);
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



