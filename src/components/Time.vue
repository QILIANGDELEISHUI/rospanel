<template>
  <header>
    <h1>{{ currentTime }}</h1>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const currentTime = ref<string>('');

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString(); // 更新当前时间  
};

onMounted(() => {
  updateTime();
  const interval = setInterval(updateTime, 1000); // 每秒更新一次时间  

  // 清理定时器，注意这里使用onUnmounted而不是beforeUnmount  
  onUnmounted(() => {
    if (interval) {
      clearInterval(interval);
    }
  });

  // 如果你想在组件外部访问interval（虽然在这个场景中可能不需要），可以将其存储在一个响应式引用中  
  // 但注意，这通常不是推荐的做法，因为它违反了Vue的响应式原则  
  // const intervalRef = ref<number | null>(null);  
  // intervalRef.value = interval;  
});
</script>

<style scoped>
header {
  /* background-color: #ffffff; */
  padding: 0px 0px;
  text-align: center;
  font-size: 10px;
}
</style>