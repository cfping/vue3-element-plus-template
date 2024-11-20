<template>
  <div class="receipt bg-gray-100 flex justify-center items-start min-h-screen py-8">
    <div class="w-receipt bg-white p-4 shadow-lg">
      <!-- 商店信息 -->
      <div class="text-center mb-6">
        <h1 class="text-xl font-bold">{{ storeName }}</h1>
        <p class="text-xs text-gray-600 mt-1">电话: {{ phone }}</p>
        <p class="text-xs text-gray-600">地址: {{ address }}</p>
      </div>

      <!-- 订单信息 -->
      <div class="text-xs space-y-1 mb-4">
        <div class="flex justify-between">
          <span>订单号:</span>
          <span>{{ order.orderId }}</span>
        </div>
        <div class="flex justify-between">
          <span>日期:</span>
          <span>{{ order.date }}</span>
        </div>
        <div class="flex justify-between">
          <span>收银员:</span>
          <span>{{ order.cashier }}</span>
        </div>
      </div>

      <!-- 商品列表 -->
      <div class="space-y-2 mb-4">
        <div class="text-xs grid grid-cols-12 font-semibold">
          <div class="col-span-5">商品</div>
          <div class="col-span-2 text-center">数量</div>
          <div class="col-span-2 text-right">单价</div>
          <div class="col-span-3 text-right">小计</div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="text-xs grid grid-cols-12"
        >
          <div class="col-span-5">{{ product.name }}</div>
          <div class="col-span-2 text-center">{{ product.quantity }}</div>
          <div class="col-span-2 text-right">{{ product.price.toFixed(2) }}</div>
          <div class="col-span-3 text-right">{{ product.subtotal.toFixed(2) }}</div>
        </div>
      </div>

      <!-- 总计信息 -->
      <div class="space-y-2 mb-6">
        <div class="flex justify-between text-xs">
          <span>商品数量:</span>
          <span>{{ summary.itemCount }}件</span>
        </div>
        <div class="flex justify-between text-xs">
          <span>商品总计:</span>
          <span>¥{{ summary.total.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-bold text-sm">
          <span>实付金额:</span>
          <span>¥{{ summary.paid.toFixed(2) }}</span>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-dashed my-4"></div>

      <!-- 支付信息 -->
      <div class="text-xs text-center mb-6">
        <p>支付方式: {{ payment.method }}</p>
        <p class="mt-1">支付时间: {{ payment.time }}</p>
      </div>

      <!-- 页脚 -->
      <div class="text-center text-xs space-y-2 mb-4">
        <p v-for="(message, index) in footerMessages" :key="index">
          {{ message }}
        </p>
      </div>

      <!-- 条形码 -->
      <div class="text-center">
        <div class="inline-block border border-black px-8 py-2 text-xs">
          {{ barcode }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  storeName: String,
  phone: String,
  address: String,
  order: {
    type: Object,
    required: true,
    default: () => ({
      orderId: "",
      date: "",
      cashier: "",
    }),
  },
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
  summary: {
    type: Object,
    required: true,
    default: () => ({
      itemCount: 0,
      total: 0,
      paid: 0,
    }),
  },
  payment: {
    type: Object,
    required: true,
    default: () => ({
      method: "",
      time: "",
    }),
  },
  footerMessages: {
    type: Array,
    required: true,
    default: () => [],
  },
  barcode: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.receipt {
  min-height: 100vh;
}

.w-receipt {
  max-width: 80mm; /* 限制打印宽度为80mm */
  margin: 0 auto;
}

/* 打印样式 */
@media print {
  body {
    margin: 0;
    padding: 0;
    background: none;
  }

  /* 隐藏页面中其他内容 */
  body * {
    visibility: hidden;
  }

  .receipt,
  .receipt * {
    visibility: visible;
  }

  .receipt {
    position: absolute;
    left: 0;
    top: 0;
    width: 80mm;
  }

  .w-receipt {
    box-shadow: none;
    border: none;
  }
}
</style>
