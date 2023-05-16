/*
 * @Author: LYM
 * @Date: 2023-05-15 17:16:17
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 14:44:39
 * @Description: 注册组件
 */
import { App } from "vue";
import DynamicWordCloudTagCanvas from "./index.vue";

// 定义 install 方法， App 作为参数
DynamicWordCloudTagCanvas.install = (app: App): void => {
  app.component(
    DynamicWordCloudTagCanvas.name as string,
    DynamicWordCloudTagCanvas
  );
};

export default DynamicWordCloudTagCanvas;
