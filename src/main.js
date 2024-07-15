import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
//全局绑定到vue3实例对象上
app.use(ElementPlus);
//还可以全局绑定更多的工具
app.mount('#app');