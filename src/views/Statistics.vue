<template>
  <Layout>
    <Tabs
      class-prefix="typeTab"
      :tabData="typeTabData"
      :tabNow.sync="typeTabNow"
    ></Tabs>
    <!-- <Tabs
      class-prefix="timeTab"
      :tabData="timeTabData"
      :tabNow.sync="timeTabNow"
    ></Tabs> -->

    <div>
      <ol>
        <li v-for="(group, index) in StatisticsData" :key="index">
          <h3 class="dateTitle">{{ group.title }}</h3>
          <ol>
            <li
              class="moneyItem"
              v-for="(item, index) in group.items"
              :key="index"
            >
              <span>￥{{ item.amount }}</span>
              <span>{{ item.tags.join() }}</span>
              <span>{{ item.notes || "无" }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Tabs from "@/components/Money/Tabs.vue";
import localStorage from "@/assets/models/model";
import dayjs from "dayjs";

@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  typeTabNow = "支出";
  typeTabData = ["支出", "收入"];

  timeTabNow = "月";
  timeTabData = ["月", "季", "年"];

  recordList: RecordItem[] = localStorage.recordList;

  get StatisticsData() {
    if (!this.recordList[0]) {
      return;
    }
    const cloneRecordList: RecordItem[] = JSON.parse(
      JSON.stringify(this.recordList)
    );

    const newList = cloneRecordList.filter((r) => r.tab === this.typeTabNow);
    if (!newList[0]) {
      return;
    } else {
      newList.sort((a, b) => {
        return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf();
      });
    }

    const groupedList = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = groupedList[groupedList.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        groupedList.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    console.log(groupedList);

    return groupedList;
  }

  mounted() {
    console.log(this.recordList);

    console.log(this.StatisticsData);
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .tabs li {
    color: rgb(0, 0, 0);
  }
  &.typeTab-tabs {
    background: rgba($color: #adadad, $alpha: 0.5);
    color: white;
  }
  &.timeTab-tabs {
    background: rgba($color: #797979, $alpha: 0.5);
    color: white;
    & li {
      padding: 0.2em;
    }
  }
}
.dateTitle {
  background: white;
}
.moneyItem {
  border-bottom: 1px solid #000;
  padding: 0.2em;
  display: flex;

  justify-content: space-between;
  align-content: flex-start;
  span {
    width: 33.333vh;
  }
}
</style>
