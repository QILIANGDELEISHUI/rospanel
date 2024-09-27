// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router'  
import Index from '../components/Index.vue'
import Main from '../components/Main.vue'
import HelloWorld from '../components/Hello.vue'
  
const routes = [  
  {  
    path: '/',
    name: 'Home',
    component: Index,
    redirect: '/hello',
    children: [
      {
        path: '/main',
        name: 'main',
        component: Main  ,
        redirect: '/main/panel',
        //路由嵌套
        children:[
          {path: 'panel',component: () => import('../components/Panel.vue')},
          {path: 'setting',component: () => import('../components/Settings.vue')},
          {path: 'test',component: () => import('../components/Test.vue')},
          {path: 'test2',component: () => import('../components/Test2.vue')},
          {path: 'battery',component: () => import('../components/BatteryHealth.vue')},
        ]
      },
      {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
      }
    ]
  },



]  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
})  
  
export default router