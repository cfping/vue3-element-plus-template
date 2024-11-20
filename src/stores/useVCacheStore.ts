import { defineStore } from "pinia";
import { reactive } from "vue";

export const useVCacheStore = defineStore("VCache", () => {
  // 定义响应式缓存对象
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const VCache = reactive<Record<string, any>>(JSON.parse(localStorage.getItem("VCache") || "{}"));

  // 添加缓存项
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function add(key: string, value: any) {
    VCache[key] = value; // 使用键值对方式存储
    syncToLocalStorage(); // 同步到 localStorage
  }

  // 删除缓存项
  function remove(key: string) {
    delete VCache[key]; // 删除对应的键
    syncToLocalStorage(); // 同步到 localStorage
  }

  // 获取缓存项
  function get(key: string) {
    return VCache[key]; // 返回指定键的值
  }

  // 清空所有缓存
  function clearCache() {
    for (const key in VCache) {
      delete VCache[key];
    }
    syncToLocalStorage(); // 清空 localStorage
  }

  // 同步缓存到 localStorage
  function syncToLocalStorage() {
    localStorage.setItem("VCache", JSON.stringify(VCache));
  }

  return { VCache, add, remove, get, clearCache };
});
