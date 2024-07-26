<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const goToAnotherPage = () => {
  // 使用编程式导航跳转到指定的路由
  router.replace('/main');
  // 如果你希望是替换当前页面而不是添加到历史记录，可以使用 this.$router.replace('/path/to/your/page');
  localStorage.setItem("headerIndex","main")
}


const count = ref(0)
</script>

<template>

  <div class="container">
    <h1> 这是一个开始页面 </h1>
  </div>
  <div class="container">
    <el-button @click="goToAnotherPage" type="primary">Start here</el-button>
  </div>

  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>







</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中（如果容器有指定的高度）*/
  //height: 100vh; /* 示例：让容器高度充满视口 */
}
</style>
