<script setup lang="ts">
import { ref, computed } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import En from 'element-plus/es/locale/lang/en';

const language = ref('zh-cn'); // 默认语言为中文
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : En)); // 根据语言动态切换

// 添加语言切换事件监听器
window.addEventListener(
  'switchLanguage',
  (evt: Event) => {
    console.log("语言切换",evt)
    const customEvent = evt as CustomEvent; // 类型断言为 CustomEvent
    if (customEvent.detail?.language) {
      language.value = customEvent.detail.language; // 更新语言
    }
  }
);
//监听全局语言切换变化
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style scoped></style>
