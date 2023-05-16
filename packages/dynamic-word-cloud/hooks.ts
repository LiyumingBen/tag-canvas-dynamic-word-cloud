/*
 * @Author: LYM
 * @Date: 2023-05-16 14:49:35
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 15:55:05
 * @Description: 配置
 */
export const defaultOption = {
  shape: 'sphere',
  interval: 20,
  decel: 0.98,
  maxSpeed: 0.02, // 添加最大的运动速度
  minSpeed: 0.01, // 添加最小的运动速度这样就可以保证一直运动，不会停止
  textHeight: 25,
  outlineMethod: 'none', // tag hover 之后的 轮廓效果
  fadeIn: 800,
  outlineColour: '#f96',
  outlineThickness: 2,
  outlineOffset: 4,
  depth: 0.92,
  minBrightness: 0.2,
  reverse: true, // 运动方向与鼠标移动方向相反
  shadowBlur: 0,
  shuffleTags: true, // 打乱标签
  shadowOffset: [0, 0],
  stretchX: 1, // Stretch or compress the cloud horizontally. 水平拉伸词云
  initial: [0.1, 0.1], // 给词云添加一个初始的运动方向
  textFont: null, // 字体设置为 null 就会继承 每个 tag的a 标签的字体
  textColour: null, // 字体颜色设置为 null 就会继承 每个 tag的a 标签的字体颜色
  weight: true, // weight 打开，就可以根据默认的字体的大小作为权重，对tag 的样式进行调整
  weightMode: 'size', // 样式调整的方式
  weightSize: 0.5, // 调整 tag 字体的大小，加个 权重
  weightSizeMax: 25,
  weightSizeMin: 14,
  weightFrom: 'data-weight',
  wheelZoom: true, // 允许使用鼠标滚轮或滚动手势放大和缩小。
  zoomMax: 3, // 最大缩放值。
  zoomMin: 0.8, // 最小缩放值。
  zoomStep: 0.05, // 每次移动鼠标滚轮时缩放变化的量。
  tooltip: 'div',
  tooltipClass: 'tc-tooltip',
  freezeActive: true, // 设置为true，当标记高亮显示时暂停移动。
}

export const defaultColor = [
  '#16CAC2',
  '#E79B2E',
  '#16CAC2',
  '#4391FC',
  '#8F4DFF',
  '#4A9452',
  '#FF9C00',
  '#3AC371',
  '#FB5D60',
]