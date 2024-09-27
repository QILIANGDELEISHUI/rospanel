import * as ROSLIB from 'roslib';

export const ros = new ROSLIB.Ros({
    // url: 'ws://192.168.31.5:9090' // 你的ROS WebSocket服务器地址
    url: 'ws://127.0.0.1:9090' // 你的ROS WebSocket服务器地址
});

ros.on('connection', function() {
    console.log('Connected to websocket server!');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server:', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});



