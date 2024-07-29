<template>
    <el-row  type="flex">
      <el-col :span="8" v-for="index in 3" >
        <DisBox  :id = "index - 1" />
      </el-col>
    </el-row>
    <el-row  type="flex">
      <el-col :span="8" v-for="index in 3" >
        <DisBox  :id = "index + 2" />
      </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import '../ros/dis.ts'
</script>

<style scoped>

</style>