# 更新日志

## 1.4.1

### eext-circuitjs1-easyeda
- 基于 [circuitjs1-easyeda](https://github.com/easyeda/circuitjs1-easyeda) 分支源码编译 GWT，包含自定义修改
- 支持将CircuitJS1的简单器件电路导出电路到原理图
- 器件搜索支持引脚数量校验，确保元件匹配正确
- 补偿导线连接 CircuitJS 端点到实际 EDA 元件引脚
- 元件值标注写入 Value 属性
- 电池/电压源电压写入 Name 属性
- 支持并行器件搜索和并行导线创建
- canvas2svg.js 内联以支持 SVG 导出
- 示例电路文件及语言文件通过 XHR 拦截器内联

### circuitjs1-easyeda
  - Menus.java：新增"导出到嘉立创EDA"顶级菜单项
  - Menus.java：menuItemWithShortcut 格式改为括号样式，适配窗口大小
  - Menus.java：injectPopupFix JSNI 运行时 CSS 注入
  - CommandManager.java：新增 exporttolceda 命令处理器及 JSNI 桥接
  - circuitjs-fix.css：弹窗宽度和背景适配
  - locale_zh.txt：新增导出菜单中文翻译


