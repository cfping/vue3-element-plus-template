以下是一个针对 `vue3-element-plus-template` 的文档，说明如何使用 `pnpm` 安装和运行该模板：

---

# Vue3 + Element Plus + TailwindCSS 前端模板

这是一个基于 Vue 3、Element Plus 和 TailwindCSS 的前端模板项目，使用现代工具链，支持快速开发和高效的组件化设计。

## 特性

- **Vue 3**: 响应式、组件化的现代前端框架。
- **Element Plus**: 功能强大的 Vue 3 UI 组件库。
- **TailwindCSS**: 实用的 CSS 工具类框架，支持快速布局和设计。
- **pnpm**: 快速、节省磁盘空间的包管理工具。
- **现代工具链**: 使用 Vite 提供快速构建和热更新。

---

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/your-repo/vue3-element-plus-template.git
cd vue3-element-plus-template
```

### 2. 安装依赖

确保你已安装 [Node.js](https://nodejs.org/)（建议版本 ≥ 16）和 [pnpm](https://pnpm.io/)。

安装依赖：

```bash
pnpm install
```

### 3. 启动开发服务器

运行以下命令启动开发环境，并打开浏览器访问 `http://localhost:5173`：

```bash
pnpm dev
```

### 4. 构建生产环境

使用以下命令打包生产环境文件：

```bash
pnpm build
```

构建后的文件将生成在 `dist/` 目录下。

### 5. 本地预览生产环境

```bash
pnpm preview
```

---

## 项目结构

```plaintext
vue3-element-plus-template/
├── public/                # 静态资源文件
├── src/
│   ├── assets/            # 资源文件
│   ├── components/        # Vue 组件
│   ├── layouts/           # 页面布局
│   ├── views/             # 页面文件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   ├── styles/            # 全局样式和 TailwindCSS 配置
│   ├── App.vue            # 根组件
│   ├── main.ts            # 项目入口文件
├── tailwind.config.js     # TailwindCSS 配置文件
├── vite.config.ts         # Vite 配置文件
├── package.json           # 项目描述文件
└── pnpm-lock.yaml         # pnpm 锁定文件
```

---

## TailwindCSS 的使用

在组件中直接使用 TailwindCSS 工具类。例如：

```html
<template>
  <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md">
    这是一个使用 TailwindCSS 样式的按钮
  </div>
</template>
```

---

## Element Plus 的使用

在项目中直接使用 Element Plus 组件。例如：

```html
<template>
  <el-button type="primary">主要按钮</el-button>
</template>
```

在 `main.ts` 中已全局引入 Element Plus 的样式和组件：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.css' // 自定义样式和 TailwindCSS

createApp(App).use(ElementPlus).mount('#app')
```

---

## 常用命令

| 命令           | 描述                         |
| -------------- | ---------------------------- |
| `pnpm dev`     | 启动开发服务器               |
| `pnpm build`   | 构建生产环境                 |
| `pnpm preview` | 本地预览生产环境             |
| `pnpm lint`    | 运行代码格式检查             |
| `pnpm test`    | 运行测试（如配置了测试工具） |

---

## 贡献

欢迎提 Issues 和 PR 来帮助改进此模板！🎉

---

## License

本项目基于 [MIT License](./LICENSE) 开源。
