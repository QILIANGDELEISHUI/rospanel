"use strict";const e=require("electron"),n=require("path"),t=()=>{const o=new e.BrowserWindow({webPreferences:{contextIsolation:!1,nodeIntegration:!0,preload:n.join(__dirname,"./preload.js")}});process.env.NODE_ENV!=="development"?(o.loadFile(n.join(__dirname,"./index.html")),o.webContents.openDevTools()):(o.loadURL("http://localhost:5173"),o.webContents.openDevTools())};e.app.whenReady().then(()=>{t(),e.app.on("activate",()=>{e.BrowserWindow.getAllWindows().length===0&&t()})});e.app.on("window-all-closed",()=>{process.platform!=="darwin"&&e.app.quit()});