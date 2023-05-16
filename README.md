# dynamic-word-cloud-tag-canvas

## 快速开始

### 安装

```bash
npm i dynamic-word-cloud-tag-canvas -S
```

### 引入

全局引入，在 main.js 中

```js
import DynamicWordCloudTagCanvas from "dynamic-word-cloud-tag-canvas";

createApp(App).use(DynamicWordCloudTagCanvas);
```

或按组件单个引用，在`.vue`文件中

```vue
<script>
import { DynamicWordCloudTagCanvas } from "dynamic-word-cloud-tag-canvas";

export default {
  name: "viewName",
  components: {
    DynamicWordCloudTagCanvas,
  },
};
</script>
```

### 使用

```vue
<template lang="ts">
 <div class="wrap">
  <dynamic-word-cloud-tag-canvas :data="state.data" @word-click="handleWordClick"></dynamic-word-cloud-tag-canvas>
 </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup(props, { emit }) {
    const state = reactive({
      data: [
        {
          name: "花鸟市场",
          value: 1446,
        },
        {
          name: "汽车",
          value: 928,
        },
        {
          name: "视频",
          value: 906,
        },
        {
          name: "电视",
          value: 825,
        },
        {
          name: "Lover Boy 88",
          value: 514,
        },
        {
          name: "动漫",
          value: 486,
        },
        {
          name: "音乐",
          value: 53,
        },
        {
          name: "直播",
          value: 163,
        },
        {
          name: "广播电台",
          value: 86,
        },
        {
          name: "戏曲曲艺",
          value: 17,
        },
        {
          name: "演出票务",
          value: 6,
        },
        {
          name: "给陌生的你听",
          value: 1,
        },
        {
          name: "资讯",
          value: 1437,
        },
        {
          name: "商业财经",
          value: 422,
        },
        {
          name: "娱乐八卦",
          value: 353,
        },
        {
          name: "军事",
          value: 331,
        },
        {
          name: "科技资讯",
          value: 313,
        },
        {
          name: "社会时政",
          value: 307,
        },
        {
          name: "时尚",
          value: 43,
        },
        {
          name: "网络奇闻",
          value: 15,
        },
        {
          name: "旅游出行",
          value: 438,
        },
        {
          name: "景点类型",
          value: 957,
        },
        {
          name: "国内游",
          value: 927,
        },
        {
          name: "远途出行方式",
          value: 908,
        },
        {
          name: "酒店",
          value: 693,
        },
        {
          name: "关注景点",
          value: 611,
        },
        {
          name: "旅游网站偏好",
          value: 512,
        },
        {
          name: "出国游",
          value: 382,
        },
        {
          name: "交通票务",
          value: 312,
        },
        {
          name: "旅游方式",
          value: 187,
        },
        {
          name: "旅游主题",
          value: 163,
        },
        {
          name: "港澳台",
          value: 104,
        },
        {
          name: "本地周边游",
          value: 3,
        },
        {
          name: "小卖家",
          value: 1331,
        },
        {
          name: "全日制学校",
          value: 941,
        },
        {
          name: "基础教育科目",
          value: 585,
        },
        {
          name: "考试培训",
          value: 473,
        },
        {
          name: "语言学习",
          value: 358,
        },
        {
          name: "留学",
          value: 246,
        },
        {
          name: "K12课程培训",
          value: 207,
        },
        {
          name: "艺术培训",
          value: 194,
        },
        {
          name: "技能培训",
          value: 104,
        },
        {
          name: "IT培训",
          value: 87,
        },
        {
          name: "高等教育专业",
          value: 63,
        },
        {
          name: "家教",
          value: 48,
        },
        {
          name: "体育培训",
          value: 23,
        },
        {
          name: "职场培训",
          value: 5,
        },
        {
          name: "金融财经",
          value: 1328,
        },
        {
          name: "银行",
          value: 765,
        },
        {
          name: "股票",
          value: 452,
        },
        {
          name: "保险",
          value: 415,
        },
        {
          name: "贷款",
          value: 253,
        },
        {
          name: "基金",
          value: 211,
        },
        {
          name: "信用卡",
          value: 180,
        },
        {
          name: "外汇",
          value: 138,
        },
        {
          name: "P2P",
          value: 116,
        },
        {
          name: "贵金属",
          value: 98,
        },
      ],
      color: ["#2D4DB6", "#04B67C", "#D1AF07", "#E27914", "#CB4A4D", "#B02690"],
    });

    // 点击词云
    const handleWordClick = (item: any) => {
      console.log(item);
    };

    return {
      state,
      handleWordClick,
    };
  },
});
</script>
<style lang="scss">
.wrap {
  width: 800px;
  height: 800px;
}
</style>
```

## Props 参数列表

| 名称         | 类型                              | 说明                                                                          | 默认值               |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------- | -------------------- |
| data         | { name: string; value: number }[] | 参数                                                                          | []                   |
| canvasId     | string                            | 画布唯一 id                                                                   | 'world-cloud-canvas' |
| labelLength  | number                            | 标签长度超出截断，加...                                                       | 100                  |
| showValue    | boolean                           | tooltip 是否显示 value 值                                                     | true                 |
| showTooltips | boolean                           | tooltip 是否显示整个提示                                                      | true                 |
| option       | object                            | tagsCanvas [配置参数](https://www.goat1000.com/tagcanvas-options.php#weights) | {}                   |
| colorList    | Array                             | 词云颜色数组                                                                  | []                   |
| word-click   | Function                          | 点击回调函数                                                                  | function(item){}     |
