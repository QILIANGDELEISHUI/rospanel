<template>
  <el-switch
      v-model="isDark"
      inline-prompt
      @change="changeTheme"
      :active-icon="Sunny"
      :inactive-icon="Moon"
  />
</template>

<script setup lang="ts">
import {inject, Ref, computed} from 'vue';
import {Sunny, Moon} from '@element-plus/icons-vue';

const {theme, setTheme} = inject<{theme: Ref<string>, setTheme: (newTheme: string) => void}>('theme') || {};
const isDark = computed(() => theme?.value === 'dark');

const changeTheme = () => {
  console.log(theme?.value)
  if (theme?.value === 'light') {
    setTheme?.('dark');
    localStorage.setItem("selectedTheme",'dark');
  } else {
    setTheme?.('light');
    localStorage.setItem("selectedTheme",'light');
  }
};
</script>

<style scoped>
</style>