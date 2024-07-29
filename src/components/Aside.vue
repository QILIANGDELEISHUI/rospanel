<template>
    <el-button :type=myType :icon=myIcon circle @click="change"   display: flex justify-content: center/>
    <el-menu default-active="panel" class="el-menu-vertical-demo dark-mode" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" router>
        <el-menu-item index="panel">
            <el-icon>
                <location />
            </el-icon>
            <template #title>panel</template>
        </el-menu-item>
        <el-menu-item index="setting">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>setting</template>
        </el-menu-item>
      <el-menu-item index="test">
        <el-icon>
          <document />
        </el-icon>
        <template #title>test</template>
      </el-menu-item>
      <el-menu-item index="test2">
        <el-icon>
          <document />
        </el-icon>
        <template #title>test2</template>
      </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Edit,
    Check,
    CaretRight,
    CaretLeft
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const myIcon = computed(()=>isCollapse.value == true?CaretRight:CaretLeft)
const myType = computed(()=>isCollapse.value == true? "primary" : "success")

const change = () => {
  isCollapse.value = isCollapse.value != true
}

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
};



</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}
</style>