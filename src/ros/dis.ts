import {ros} from './init.ts'
import * as ROSLIB from 'roslib';
import {useRosStore} from "../stores/ros.js";
import {MyMsg,Battery} from "./msg"

const store = useRosStore();

// 订阅一个主题
const ultrasonicListener = new ROSLIB.Topic({
    ros: ros,
    name: '/ultrasonic',
    messageType: 'rospanel/MyMsg' // 包名/消息名
});

const batteryListen = new ROSLIB.Topic({
    ros: ros,
    name: '/battery_pub',
    messageType: 'rospanel/Battery' // 包名/消息名
});
ultrasonicListener.subscribe(function(msg:MyMsg) {
    console.log('Received message on /ultrasonic: ' + msg.distances);
    store.updateDis(msg.distances);
});

batteryListen.subscribe(function(msg:Battery) {
    console.log('Received message on /battery_pub: ' + msg);
    store.updateBattery(msg);
});