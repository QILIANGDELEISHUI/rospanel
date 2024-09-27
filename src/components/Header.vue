<template>
  <el-row>
    <el-col>

    </el-col>
  </el-row>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" style="height: 30px;">
    <el-menu-item index="hello" @click="goToHello">
      <img style="width: 60px" src="/src/assets/ros_.png" alt="Element logo"/>
    </el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="main" @click="goToMain" style="width: 20px">
      <el-icon>
        <House></House>
      </el-icon>
    </el-menu-item>
    <el-menu-item index="1">
      <Time/>
    </el-menu-item>
    <el-menu-item index="1" style="width: 70px">
      <SwitchDark></SwitchDark>
    </el-menu-item>
    <el-menu-item index="1" style="width: 70px">
      <Battery/>
    </el-menu-item>
  </el-menu>


</template>

<script lang="ts" setup>
import Time from './Time.vue'
import {useRouter, useRoute} from 'vue-router'
import {ref} from 'vue'
import {
  House
} from '@element-plus/icons-vue'

const router = useRouter();
const route = useRoute();
const activeIndex = ref(localStorage.getItem("headerIndex") || "hello");

const goToMain = () => {
  router.replace("/main")
  console.log(route.path);
  localStorage.setItem("headerIndex", "main")
}

const goToHello = () => {
  router.replace("/hello")
  console.log(route.path);
  localStorage.setItem("headerIndex", "hello")
}
//
// onMounted(()=> {
//   activeIndex
// })

</script>

<style>
.flex-grow {
  flex-grow: 1;
}


</style>
