<script setup lang="ts">
import '../ros/dis.ts'
// import {ros} from '../ros/init'
// import * as ROSLIB from 'roslib';
// import {useRosStore} from "../stores/ros.js";
// import {MyMsg} from "../ros/msg"
//
// // 订阅一个主题
// const listener = new ROSLIB.Topic({
//   ros: ros,
//   name: '/chatter',
//   messageType: 'rospanel/MyMsg'
// });
//
// const store = useRosStore();
// listener.subscribe(function(message:MyMsg) {
//   console.log('Received message on /chatter: ' + message.distances);
//   store.updateDis(message.distances);
// });

// 发送消息
// const chatterPublisher = new ROSLIB.Topic({
//   ros: ros,
//   name: '/czx',
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
<template>

</template>
