<template>
  <!-- 电池电量Icon组件 -->
  <div class="electric-panel" :class="bgClass">
    <div class="panel" :style="{ transform: `rotate(${rotate}deg)` }">
      <div class="remainder" :style="{ width: electricity + '%' }" ></div>
      <div class="charging-icon" v-if="charging">⚡</div>

    </div>

    <div
        v-show="showText"
        :style="{ marginLeft: (parseFloat(rotate) ? 0 : '10') + 'px' }"
        class="text"
    >
      {{electricity }}%
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRosStore} from "../stores/ros.js";

import {computed, ref} from "vue";

const store = useRosStore();
const electricity = ref(computed(()=>store.battery.electricity));
const showText = ref(computed(()=>store.batterySetting.showText));
const rotate = ref(computed(()=>store.batterySetting.rotate));
const charging = ref(computed(()=>store.battery.charging));
const bgClass = ref(computed(()=> {
  if (electricity.value >= 30) {
    return "success";
  } else if (electricity.value >= 15) {
    return "warning";
  } else if (electricity.value >= 5) {
    return "danger";
  } else {
    return "danger";
  }
}));
const myInterval =  null;






</script>

<style lang="less" scoped>
// custom theme color
@color-primary: #447ced;
@color-success: #13ce66;
@color-warning: #ffba00;
@color-danger: #ff4949;
@color-info: #909399;
@color-white: #fff;

.panel-style(@color) {
  .panel {
    border-color: @color;
    &::before {
      background: @color;
    }
    .remainder {
      background: @color;
    }
  }
  .text {
    color: @color;
  }
}

.electric-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
}

.panel {
  box-sizing: border-box;
  width: 18px;
  height: 10px;
  position: relative;
  border: 1px solid #ccc;
  padding: 1px;
  border-radius: 2px;
  //overflow: hidden; /* 确保闪电图标不会超出电池范围 */

  &::before {
    content: "";
    border-radius: 0 1px 1px 0;
    height: 4px;
    background: #ccc;
    width: 2px;
    position: absolute;
    top: 50%;
    right: -4px;
    transform: translateY(-50%);
  }
  .remainder {
    border-radius: 1px;
    position: absolute;
    height: 100%;
    width: 0%;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 1;
  }
  .charging-icon {
    position: absolute;
    color: red;
    //height: 100%;
    font-size: 10px; /* 根据需要调整大小 */
    right:2px; /* 根据需要调整位置 */
    top: -24px; /* 根据需要调整位置 */
    margin: 0 auto;
    z-index: 2; /* 确保图标在电量显示区域上方 */
  }
}


.text {
  text-align: left;
  width: auto;
  font-size: 13px;
}

&.success {
  .panel-style(@color-success);
}

&.warning {
  .panel-style(@color-warning);
}

&.danger {
  .panel-style(@color-danger);
}

</style>
