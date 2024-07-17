# rospanel
本项目当前的业务需求为显示超声波模块测到的6个距离。

## 环境配置
node = v16.20.2

npm = 8.19.4

再装个cnpm
## 使用说明
1. 依赖安装
```
cnpm install
```
注：electron换国内镜像源也不好下，这里最好用cnpm

2. dev模式
```
cnpm run serve
```

3. production，打包桌面应用程序
```
cnpm run build
cnpm run electron:build
```
最终打包后的程序在dist目录下的.AppImage文件





## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
