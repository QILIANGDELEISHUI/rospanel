'use strict'
// app:控制应用程序的事件生命周期
// protocol:注册自定义协议并拦截基于现有协议的请求。
// BrowserWindow:创建和控制浏览器窗口（应用程序窗口）
// Tray:添加图标和上下文菜单到系统通知区
// Menu:创建原生应用菜单和上下文菜单。
//screen: 检索有关屏幕大小、显示器、光标位置等的信息
// ipcMain:从主进程到渲染进程的异步通信。
import { app, protocol, BrowserWindow, Tray, Menu, screen, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
 
// 在应用程序准备就绪之前，必须注册方案
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
//程序主窗口
let mainWindow = null;
async function createWindow() {
  let {
    width,
    height
  } = screen.getPrimaryDisplay().workArea;//自定义最大化窗口
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION//是否隔离渲染进程和主进程
    }
  })
 
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 如果处于开发模式，则加载开发服务器的url
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    //未开发时加载index.html
    mainWindow.loadURL('app://./index.html')
  }
}
let path = require('path')
var iconPath = path.join(__dirname, '../public/favicon.ico');
if (!isDevelopment) { //如果是生产环境
  iconPath = path.join(__dirname, './favicon.ico');
}
// 设置托盘区菜单
var appTray = null
function setTray() {
  //设置菜单内容
  let trayMenu = [{
    label: '退出', //菜单名称
    click: function () { //点击事件
      app.quit();
    }
  }];
  // s
  //设置托盘区图标
  // let trayIcon = path.join(__dirname, '../public/favicon.ico');
  appTray = new Tray(iconPath);
  //设置菜单
  const contextMenu = Menu.buildFromTemplate(trayMenu);
  //设置悬浮提示
  appTray.setToolTip('xxxx系统');
  //设置
  appTray.setContextMenu(contextMenu);
  //点击图标
  appTray.on('click', function () {
    //显示主程序
    mainWindow.show();
  });
}
// on注册事件  send触发 
//ipcMain 通信模块
function addIpc() {
 
}
// 关闭所有窗口后退出。
app.on('window-all-closed', () => {
  //在macOS上，应用程序及其菜单栏很常见
  // 保持活动状态，直到用户使用Cmd+Q明确退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
 
// 此方法将在Electron完成后调用
// 初始化，并准备创建浏览器窗口。
// 某些API只能在此事件发生后使用。
app.on('ready', async () => {
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // 安装 DevTools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()
  setTray() //系统图表
  addIpc() //通信
 
})
 
// 在开发模式下，应父进程的请求干净地退出。
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}