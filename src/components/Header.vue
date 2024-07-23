<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect" >
    <el-menu-item index="0">
      <img style="width: 60px" src="/src/assets/vue.svg" alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <Time />
    </el-menu-item>
    <el-menu-item index="1">
      <SwitchDark></SwitchDark>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Time from './Time.vue'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}


</style>
