import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/layout/RootLayout.vue'), // 动态加载 RootLayout
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/HomeView.vue'), // 动态加载 HomeView
          meta: {
            icon: 'ep:home-filled',
            title: '首页',
          },
        },
      ],
    },
  ],
});

export default router;
