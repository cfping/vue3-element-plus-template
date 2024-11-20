<template>
  <ReceiptComponent
   v-for="x in ff" v-bind:key="x"
    storeName="优品商店"
    phone="123-4567-8900"
    address="深圳市南山区科技园"
    :order="{
      orderId: '#20240308001',
      date: '2024-03-08 14:30',
      cashier: '张小明'
    }"
    :products="[
      { name: '香草拿铁', quantity: 1, price: 28.0, subtotal: 28.0 },
      { name: '抹茶蛋糕', quantity: 2, price: 32.0, subtotal: 64.0 }
    ]"
    :summary="{
      itemCount: 3,
      total: 92.0,
      paid: 92.0
    }"
    :payment="{
      method: '微信支付',
      time: '2024-03-08 14:30:45'
    }"
    :footerMessages="['感谢您的惠顾', '请保管好小票用于退换货凭证', '欢迎再次光临']"
    barcode="2024030800001"
  />
</template>

<script setup lang="ts">
import ReceiptComponent from "@/components/Receipt.vue";
const ff = ref(15);
</script>

<style scoped>
</style>
