<template>
  <el-container>
    <el-aside>
      <div class="battery-display">
        <svg width="200" height="200" viewBox="0 0 72 72" class="battery-svg">
          <circle cx="36" cy="36" :r=r fill="none" stroke="#ddd" stroke-width="4" />
          <circle
              cx="36"
              cy="36"
              :r=r
              fill="none"
              :stroke="batteryColor"
              stroke-width="4"
              :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"
          />
        </svg>
        <div class="electricity-info" :style="{color:batteryColor}">
          <p>
            {{ electricity }}%
          </p>
        </div>
      </div>
    </el-aside>
    <el-main>
      <div >
        <p>温度: {{ temperature }}°C</p>
        <p>电池容量: {{ capacity }}mAh</p>
        <p>充电功率: {{power}}W</p>
        <p>充电中？ {{charging}}</p>
      </div>
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
import {useRosStore} from "../stores/ros.js";
import {computed, ref} from "vue";
const store = useRosStore();
const electricity = ref(computed(()=>store.battery.electricity));
const charging = ref(computed(()=>store.battery.charging));
const power = ref(computed(()=>store.battery.power));
const capacity = ref(computed(()=>store.battery.capacity));
const temperature = ref(computed(()=>store.battery.temperature));
const r =32;
const circumference = 2 * Math.PI * r;
const dashArray = circumference; // 虚线长度，这里只是为了计算需要，实际不会显示为虚线


const batteryColor = ref(computed(()=> {
  if (electricity.value < 20) return 'red';
  if (electricity.value < 30) return 'orange';
  return 'green';
}))

const dashOffset=ref(computed(()=> {
  return circumference - (electricity.value / 100) * circumference
}));
</script>



<style lang="less">
.battery-display {
  display: flex;
  flex-direction: column;
}

.battery-svg {
  margin-bottom: 10px;
}

.electricity-info p {
  position: absolute;
  margin: 0 auto;
  font-size: 40px;
  left:229px;
  top:173px;
  z-index: 2;
}


</style>