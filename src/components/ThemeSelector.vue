<script setup lang="ts">

import {inject, Ref,ref} from 'vue';


const options = [
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'dark',
    label: 'dark',
  },
  {
    value: 'summer',
    label: 'summer',
  },
]
const {theme, setTheme} = inject<{theme: Ref<string>, setTheme: (newTheme: string) => void}>('theme') || {};
const selectedTheme = ref(localStorage.getItem('selectedTheme') || 'light');

const changeTheme = () => {
  console.log(selectedTheme.value);
  console.log(theme);
  setTheme?.(selectedTheme.value);
  localStorage.setItem('selectedTheme', selectedTheme.value);
};
</script>

<template>
  <el-select
      v-model="selectedTheme"
      placeholder="Select"
      size="large"
      style="width: 240px"
      @change="changeTheme"

  >
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
</template>

<style scoped>

</style>