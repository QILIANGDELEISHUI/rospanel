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
    value: 'beach',
    label: 'beach',
  },
]
const {theme, setTheme} = inject<{theme: Ref<string>, setTheme: (newTheme: string) => void}>('theme') || {};
const selectedTheme = ref("light");

const changeTheme = () => {
  setTheme?.(selectedTheme.value);
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