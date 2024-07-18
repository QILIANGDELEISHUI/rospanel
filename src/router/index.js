// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router'  
import Index from '../components/Index.vue'  
import HelloWorld from '../components/HelloWorld.vue'
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: HelloWorld  
  },      
  {  
    path: '/index',  
    name: 'index',  
    component: Index  ,
    redirect: 'index/menu1',
    //路由嵌套
    children:[
        {path: 'menu1',component: () => import('../components/Main.vue')},
        {path: 'menu2',component: () => import('../components/Main2.vue')},
    ]
  },  

]  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
})  
  
export default router