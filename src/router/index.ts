import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/index.vue'
import aimodel from '@/views/aiCreated/aiModel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/index",
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      icon: 'house'
    },
    children: [
      {
        path: 'index',
        name: "index",
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/ai',
        name: 'ai',
        redirect: '/aiModel',
        component: aimodel,
        meta: {
          title: 'AI创作',
          icon: 'house'
        },
        children: [
         
          {
            path: '/aiModel',
            name: 'aiModel',
            meta: {
              title: '创作模型',
              icon: 'house'
            },
            component: () => import('@/views/aiCreated/aiModel.vue'),
          },
    
        ]
      },
      {
        path: '/addAiModel',
        name: 'addAiModel',
        meta: {
          title: '添加/编辑创作模型',
          icon: 'house'
        },
        component: () => import('@/views/aiCreated/addAiModel.vue'),
      },
    ],
  },
  


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
