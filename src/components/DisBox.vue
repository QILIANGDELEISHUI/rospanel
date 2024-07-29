<template>
  <div class="dis-box">
    <div class="statistic-card">
      <el-statistic :value=dis>
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ultrasonic No.{{id}}
            <el-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
            >
              <el-icon style="margin-left: 4px" :size="12">
                <Setting />
              </el-icon>
            </el-tooltip>
          </div>
        </template>
      </el-statistic>
      <div class="statistic-footer">
        <div class="footer-item">
          <span>working status</span>
          <span class="green">
              normal
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { PropType,ref,computed} from 'vue';
import {useRosStore} from "../stores/ros.js";
import {
  ArrowRight,
  CaretBottom,
  CaretTop, Setting,
  Warning,Document
} from '@element-plus/icons-vue'

const store = useRosStore();

const dis = ref(computed(()=>store.distances[props.id]));
const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true,
  },
})
</script>

<style scoped>
.box {
  border: 1px solid #000;
  padding: 10px;
  margin: 20px;
  text-align: center;
  background-color: #7fee77;
}
.dis-box {
  padding: 10px;
  border: 1px solid var(--el-color-success); /* 使用 Element Plus 的颜色变量 */
  border-radius: 1px;
  text-align: center;
  font-size: 20px;
  margin: 20px;
  background-color: var(--el-color-success);
  color: var(--el-text-color-primary); /* 可选：使用 Element Plus 的文本颜色变量 */
  /* 你可以在这里添加更多自定义样式，或者完全使用 Element Plus 的样式类 */
}
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>