<template>
    <div>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/header.vue";
export default defineComponent({
    components: {
        Header
    }
});
</script>
<style>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

body>.el-container {
    margin-bottom: 40px;
}
</style>