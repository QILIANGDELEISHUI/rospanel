<template>
  <div class="common-layout">
    <el-container class="container">
        <el-aside width="200px" class="aside">
          <Aside />
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.container {
  display: flex;
  //flex-direction: column;
  height: 100%;
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
  width: 120px;
  /* 侧边栏宽度 */
  background-color: var(--v-bg-color);
  /* 侧边栏背景色 */
  padding: 5px;
}

.main {
  flex-grow: 1;
  /* 主内容区占据剩余空间 */
  background-color: var(--v-bg-color);
  padding: 20px;
}
</style>