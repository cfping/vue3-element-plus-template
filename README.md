# Vue3 + Element Plus + TailwindCSS 前端模板

这是一个基于 **Vue 3**、**Element Plus** 和 **TailwindCSS** 的前端模板，旨在帮助开发者快速构建现代化的 Web 应用。

## ✨ 特性

- **Vue 3**：响应式、组件化的现代前端框架。
- **Element Plus**：功能全面、易于使用的 Vue 3 UI 组件库。
- **TailwindCSS**：实用优先的 CSS 工具类框架，支持高效的样式开发。
- **按需引入**：集成 `unplugin-auto-import` 和 `unplugin-vue-components`，支持 API 和组件的自动引入。
- **现代工具链**：基于 Vite，提供快速构建和热更新。

---

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/cfping/vue3-element-plus-template.git
cd vue3-element-plus-tailwind-template
```

### 2. 安装依赖

确保你已经安装了 [Node.js](https://nodejs.org/)（建议版本 ≥ 16）和 [pnpm](https://pnpm.io/)。

安装项目依赖：

```bash
pnpm install
```

### 3. 运行项目

启动开发环境：

```bash
pnpm dev
```

打开浏览器访问 [http://localhost:5173](http://localhost:5173)。

---

## 🛠️ 项目结构

以下是项目的主要结构说明：

```plaintext
vue3-element-plus-tailwind-template/
├── public/                # 静态资源文件
├── src/
│   ├── assets/            # 资源文件（图片、图标等）
│   ├── components/        # 公共组件
│   ├── layouts/           # 页面布局
│   ├── pages/             # 页面文件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理（Pinia）
│   ├── styles/            # 全局样式和 TailwindCSS 配置
│   ├── App.vue            # 根组件
│   ├── main.ts            # 入口文件
├── tailwind.config.js     # TailwindCSS 配置文件
├── vite.config.ts         # Vite 配置文件
├── package.json           # 项目描述文件
└── pnpm-lock.yaml         # pnpm 锁定文件
```

---

## 🖌️ 使用指南

### 1. TailwindCSS 样式

在组件中直接使用 TailwindCSS 的工具类。例如：

```vue
<template>
  <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md">TailwindCSS 按钮</div>
</template>
```

### 2. Element Plus 组件

直接使用 Element Plus 的组件，无需手动导入，组件会自动按需加载。例如：

```vue
<template>
  <el-button type="primary">主要按钮</el-button>
</template>
```

由于集成了 `unplugin-vue-components`，无需手动引入 `Element Plus` 的组件。

---

## 📦 构建与发布

### 1. 构建生产环境

使用以下命令生成生产环境的静态文件：

```bash
pnpm build
```

构建后的文件会输出到 `dist/` 目录中。

### 2. 预览生产环境

构建完成后，可以通过以下命令预览生成的静态文件：

```bash
pnpm preview
```

---

## 📋 配置说明

### Vite 配置文件 (`vite.config.ts`)

模板默认集成了按需引入插件和基础配置：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
  ],
})
```

---

## 🔧 常用命令

| 命令           | 描述                     |
| -------------- | ------------------------ |
| `pnpm dev`     | 启动开发服务器           |
| `pnpm build`   | 构建生产环境             |
| `pnpm preview` | 预览生产环境             |
| `pnpm lint`    | 检查代码规范             |
| `pnpm test`    | 运行单元测试（如有配置） |

---

## 🤝 贡献

如果你发现任何问题，欢迎通过 Issue 提交反馈或创建 Pull Request 来改进本模板。

---

## 📄 License

此模板基于 [MIT License](./LICENSE) 开源。

---
