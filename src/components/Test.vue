<template>
  <div>
    <h1>ROS Control Panel</h1>
    <!-- 你的ROS控制界面 -->
  </div>
</template>

<script lang="ts" setup>

 // import * as ROSLIB from 'roslib';
 // import {useRosStore} from "../stores/ros.js";
 // const store = useRosStore()
 //
 //
 // const ros = new ROSLIB.Ros({
 //   url: 'ws://localhost:9090' // 你的ROS WebSocket服务器地址
 // });
 //
 // // 订阅一个主题
 // const listener = new ROSLIB.Topic({
 //   ros: ros,
 //   name: '/chatter',
 //   messageType: 'rospanel/MyMsg'
 // });
 //
 // listener.subscribe(function(message) {
 //   console.log('Received message on /chatter: ' + message.distances);
 //   store.updateDis(message.distances);
 // });

 // // 发送消息
 // const chatterPublisher = new ROSLIB.Topic({
 //   ros: ros,
 //   name: '/chatter',
 //   messageType: 'std_msgs/String'
 // });
 //
 // const chatMessage = new ROSLIB.Message({
 //   data: 'Hello ROS from Vue!'
 // });
 //
 // setTimeout(() => {
 //   chatterPublisher.publish(chatMessage);
 // }, 2000);

</script>