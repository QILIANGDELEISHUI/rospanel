<template>
    <el-row  type="flex">
      <el-col :span="8" v-for="(num, index) in firstRow" >
        <DisBox :dis=num :id = index />
      </el-col>
    </el-row>
    <el-row  type="flex">
      <el-col :span="8" v-for="(num, index) in secondRow" >
        <DisBox :dis=num :id = "index + 3" />
      </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRosStore } from '../stores/ros.js';

const store = useRosStore()

const firstRow =  [ref(store.distances[0]), ref(store.distances[1]), ref(store.distances[2])] 
const secondRow = [ref(store.distances[3]), ref(store.distances[4]), ref(store.distances[5])]
</script>

<style scoped>

</style>