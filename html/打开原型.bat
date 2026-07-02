@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 图书馆采选订单管理系统 - 原型
echo.
echo  ========================================
echo    图书馆采选订单管理系统 - 前端原型
echo  ========================================
echo.
echo  正在启动，浏览器将自动打开...
echo  请勿关闭本窗口，关闭后页面将无法访问。
echo.
call npm.cmd run start
pause
