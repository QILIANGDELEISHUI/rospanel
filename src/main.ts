import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from'./App.vue'

import router from './router'
import { createPinia } from 'pinia'


// import './style.css'
import './styles/theme.scss'
//建立app对象
const app = createApp(App)

//使用路由
app.use(router)
const pinia = createPinia()
app.use(pinia)

//使用elementplus
app.use(ElementPlus)

//使用挂载对象
app.mount('#app')





