
// ES模块代码就算在不同文件里分别import很多次，他也只会执行一次闭包构造，使用只需要把关注点放在export的内容上。
// 不同文件读取的变量同一个，互通的。
const initialTagList = [
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


const localStorage = {

    get recordList() {
        return JSON.parse(window.localStorage.getItem("recordList") || "[]") as RecordItem[]

    },
    set recordList(newRecordList: RecordItem[]) {
        window.localStorage.setItem("recordList", JSON.stringify(newRecordList));

    },
    get tagList() {

        return JSON.parse(window.localStorage.getItem("tagList") || JSON.stringify(initialTagList)) as string[]

    },
    set tagList(newTagList: string[]) {

        window.localStorage.setItem("tagList", JSON.stringify(newTagList));

    },
    editTagListItem(tagNow: string, itemIndex: number) {
        this.tagList = this.tagList.map((item, index, array) => {
            return index === itemIndex ? tagNow : item;
        });
    },
    removeTagItem(tagNowIndex: number) {
        const tagList = this.tagList

        tagList.splice(tagNowIndex, 1)
        this.tagList = tagList


    },
    tagListPush(newTag: string) {
        if (this.tagList.indexOf(newTag) >= 0) {
            throw new Error("已存在重复的标签")
        } else {
            window.localStorage.setItem("tagList", JSON.stringify([...this.tagList, newTag]));
            return this.tagList

        }


    }
}
export default localStorage
