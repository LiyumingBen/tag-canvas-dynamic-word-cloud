<!--
 * @Author: LYM
 * @Date: 2023-05-15 17:16:25
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 16:22:00
 * @Description: 动态词云组件
-->

<template>
  <div ref="containerRef" class="dynamic-word-clouds">
    <div class="world-cloud-canvas-wrapper">
      <canvas
        :id="canvasId"
        :width="state.canvasWidth"
        :height="state.canvasHeight"
      >
      </canvas>
    </div>
    <div style="display: none" id="weightTags"></div>
    <div class="tc-tooltip" v-if="showTooltips"></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  PropType,
  onMounted,
  watch,
  nextTick,
} from "vue";
import TagCanvas from "tag-canvas";
import { defaultOption, defaultColor } from "./hooks";

export default defineComponent({
  name: "DynamicWordCloudTagCanvas",
  props: {
    data: {
      required: true,
      type: Object as PropType<{ name: string; value: number }[]>,
    },
    canvasId: {
      type: String,
      default: "world-cloud-canvas",
    },
    labelLength: {
      type: Number,
      default: 100,
    },
    colorList: {
      type: Array as any,
      default: () => defaultColor,
    },
    showValue: {
      type: Boolean,
      default: true,
    },
    showTooltips: {
      type: Boolean,
      default: true,
    },
    option: {
      type: Object as any,
      default: () => {},
    },
  },
  components: {},
  setup(props, { emit }) {
    const containerRef = ref<HTMLDivElement | null>(null);
    const state = reactive({
      canvasWidth: 0,
      canvasHeight: 0,
    });

    onMounted(() => {
      if (containerRef.value) {
        state.canvasWidth = containerRef.value.clientWidth;
        state.canvasHeight = containerRef.value.clientHeight;
      }

      // 绘制tagCanvas
      nextTick(() => {
        startWorldCloud();
      });
    });

    // 启动词云
    const startWorldCloud = (updateFlag?: boolean | undefined) => {
      createTagListDom();
      let o = {
        ...defaultOption,
        ...props.option, // 自定义配置
      };

      try {
        // 如果不是更新，说明是第一次渲染，就启动 tagCanvas, 否则就代表更新
        if (!updateFlag) {
          TagCanvas.Start(props.canvasId, "weightTags", o);
        } else {
          TagCanvas.Update(props.canvasId);
        }
      } catch (e) {
        console.log(e);
      }
    };

    // 根据父组件传过来的 data 创建 TagList Dom列表，放到页面中供，canvas 渲染
    // data数据中每一项结构是一个对象 { name: 要展示的tag名字， value: 权重}
    const createTagListDom = () => {
      const colorList = props.colorList;
      let res = [...props.data];
      const len = res.length;
      let fragment = new DocumentFragment();
      for (let i = 0; i < len; i++) {
        let a = document.createElement("a");
        // 字符串长度大于labelLength就要换行
        const len = res[i].name.length;
        if (len > props.labelLength) {
          let charArr = res[i].name.split("");
          const temp = charArr.splice(0, props.labelLength);
          a.innerHTML =
            len > props.labelLength ? temp.join("") + "..." : temp.join("");
        } else {
          a.innerHTML = res[i].name;
        }
        a.href = "javascript:;";
        a.style.color = colorList[i % colorList.length];
        a.title =
          `${res[i].name}` + (props.showValue ? `：${res[i].value}` : "");

        if (res[i].value) {
          a.dataset.weight = res[i].value + "";
        }

        // 点击事件
        a.onclick = function (e) {
          emit("word-click", res[i]);
          e.stopPropagation();
        };

        fragment.append(a);
      }
      // 更新 tagContainer中的 tag元素
      let tagsContainer = document.querySelector("#weightTags");
      if (tagsContainer) {
        tagsContainer.innerHTML = "";
        tagsContainer.append(fragment);
      }
    };

    watch(
      () => props.data,
      () => {
        startWorldCloud(true);
      },
      {
        deep: true,
      }
    );

    return {
      state,
      containerRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.dynamic-word-clouds {
  width: 100%;
  height: 100%;
  .world-cloud-canvas-wrapper {
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
  }
}
</style>
<style lang="scss">
#weightTags {
  font-size: 12px;
  .huge {
    font-size: 40px;
  }
  .large {
    font-size: 35px;
  }
  .medium {
    font-size: 30px;
  }
  .small {
    font-size: 25px;
  }
}
.tc-tooltip {
  color: #000;
  background: #fff;
  z-index: 99999;
  font-size: 12px !important;
  padding: 5px 10px;
  display: inline;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 8px;
}
</style>
