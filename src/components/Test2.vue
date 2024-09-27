<template>
  <div class="battery-display">
    <svg width="100" height="100" viewBox="0 0 36 36" class="battery-svg">
      <circle cx="18" cy="18" r="16" fill="none" stroke="#ddd" stroke-width="2" />
      <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          :stroke="batteryColor"
          stroke-width="2"
          :stroke-dasharray="dashArray"
          :stroke-dashoffset="dashOffset"
      />
    </svg>
    <div class="info">
      <p>电量: {{ batteryLevel }}%</p>
      <p>温度: {{ temperature }}°C</p>
      <p>电池容量: {{ batteryCapacity }}mAh</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      batteryLevel: 75,
      temperature: 25,
      batteryCapacity: 4000,
      circumference: 2 * Math.PI * 16, // 圆的周长  
      dashArray: 100, // 虚线长度，这里只是为了计算需要，实际不会显示为虚线  
      dashOffset: 0, // 偏移量，用于控制圆环的显示部分  
    };
  },
  computed: {
    batteryColor() {
      if (this.batteryLevel < 20) return 'red';
      if (this.batteryLevel < 60) return 'orange';
      return 'green';
    },
    dashOffsetComputed() {
      // 计算dashOffset以显示相应百分比的圆环  
      return this.circumference - (this.batteryLevel / 100) * this.circumference;
    },
  },
  watch: {
    batteryLevel(newVal) {
      this.dashOffset = this.dashOffsetComputed;
    },
  },
};
</script>

<style scoped>
.battery-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.battery-svg {
  margin-bottom: 10px;
}

.info p {
  margin: 0;
  font-size: 14px;
}
</style>