<script setup lang="ts"></script>

<template>
  <main>
    <div class="flex items-center justify-center">
      <div class="h-96 w-96 shadow-lg">
        <p>My Vue3 Template</p>
      </div>
    </div>
    <div>
      <el-card style="max-width: 480px">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </el-card>
    </div>
  </main>
</template>
