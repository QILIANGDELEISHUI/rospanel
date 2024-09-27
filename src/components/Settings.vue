<template>
  <el-col>
    Theme  <ThemeSelector></ThemeSelector>
  </el-col>
  <el-divider />
  <el-col>
    NightMode <SwitchDark></SwitchDark>
  </el-col>
  <el-divider />
  <el-col>
    BatteryText
    <el-switch       v-model="showText" inline-prompt @change="changeShowText" size="large">
    </el-switch>
  </el-col>



</template>

<script lang="ts" setup>

import {useRosStore} from "../stores/ros.js";
import {ref} from "vue";

const store = useRosStore();
const showText = ref(store.batterySetting.showText);
const changeShowText = ()=> {
  store.batterySetting.showText = showText;
}
</script>
