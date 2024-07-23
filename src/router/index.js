// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router'  
import Index from '../components/Index.vue'  
import HelloWorld from '../components/HelloWorld.vue'
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',
    redirect: '/index',
    component: HelloWorld  
  },      
  {  
    path: '/index',  
    name: 'index',  
    component: Index  ,
    redirect: 'index/panel',
    //路由嵌套
    children:[
        {path: 'panel',component: () => import('../components/Panel.vue')},
        {path: 'setting',component: () => import('../components/Settings.vue')},
        {path: 'test',component: () => import('../components/Test.vue')},
    ]
  },  

]  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
})  
  
export default router