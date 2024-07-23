<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <Aside />
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue"
import Aside from "./Aside.vue"
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* 占据整个视窗的高度 */
}

.header,
.footer {
  //padding: 20px;
  //text-align: center;
  //background-color: #c83030;
  /* 示例背景色 */
}

.content {
  display: flex;
  flex: 1;
  /* 占据剩余空间 */
}

.aside {
  width: 250px;
  /* 侧边栏宽度 */
  /* background-color: #ffffff; */
  /* 侧边栏背景色 */
  padding: 20px;
}

.main {
  flex-grow: 1;
  /* 主内容区占据剩余空间 */
  /* background-color: #ffffff; */
  padding: 20px;
}
</style>