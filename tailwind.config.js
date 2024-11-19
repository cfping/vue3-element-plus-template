/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // 禁用全局样式重置
  },
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/element-plus/dist/*.css', // 包括 Element Plus 样式
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
