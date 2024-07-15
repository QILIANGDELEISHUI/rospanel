// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

 
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pages: {
      index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源就是在public里面创建的入口文件名
          template: 'public/index.html',
          // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
          title: '主窗口',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
  },
  pluginOptions: {
      electronBuilder: {
          builderOptions: {
              "appId": "com.swpe.template",
              // "asarUnpack": [
              //     "./node_modules/java",
              //     "./node_modules/async",
              // ],
              "asar": "false",
              "productName": "template", //项目名，也是生成的安装文件名，即aDemo.exe
              "copyright": "Copyright © 2020", //版权信息
              "directories": {
                  "output": "./dist" //输出文件路径
              },
              "win": { //win相关配置
                  "icon": "./public/favicon.ico", //图标，当前图标在根目录下，注意这里有两个坑
                  "target": [{
                      "target": "nsis", //利用nsis制作安装程序
                      "arch": [
                          "x64", //64位
                          "ia32" //32位
                      ]
                  }]
              },
              "mac": {
                  "target": [
                      "dmg",
                      "zip"
                  ]
              },
              // "linux": {
              //     "icon": "./public/favicon.ico"
              // },
              "nsis": {
                  "oneClick": false, // 是否一键安装
                  "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                  "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                  "installerIcon": "./public/favicon.ico", // 安装图标
                  "uninstallerIcon": "./public/favicon.ico", //卸载图标
                  "installerHeaderIcon": "./public/favicon.ico", // 安装时头部图标
                  "createDesktopShortcut": true, // 创建桌面图标
                  "createStartMenuShortcut": true, // 创建开始菜单图标
                  "shortcutName": "demo", // 图标名称
              },
          }
      }
  }
}