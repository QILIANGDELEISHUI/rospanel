import {ros} from './init.ts'
import * as ROSLIB from 'roslib';
import {useRosStore} from "../stores/ros.js";
import {MyMsg} from "./msg"

const store = useRosStore();

// 订阅一个主题
const ultrasonicListender = new ROSLIB.Topic({
    ros: ros,
    name: '/ultrasonic',
    messageType: 'rospanel/MyMsg'
});

ultrasonicListender.subscribe(function(msg:MyMsg) {
    console.log('Received message on /ultrasonic: ' + msg.distances);
    store.updateDis(msg.distances);
});