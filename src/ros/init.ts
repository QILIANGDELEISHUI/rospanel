import * as ROSLIB from 'roslib';

export const ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090' // 你的ROS WebSocket服务器地址
});



