# 增强模式

## 兼容性

* “TaiChi·Magisk”

  根据用户回报，目前（2019/3/4）似乎仍有不能同时使用的情况。请**使用下面的检测 app 确认运行情况**，如果出现问题请自行取舍。

* ZUK Z2 无法启动相机
  
  这个问题由使用 AEX 6.2 的 ZUK Z2 用户报告，并称 AEX 6.3 没有问题。

## 关于模块 v18

鉴于部分用户不会主动开启模块的功能，v18 起默认全部开启。

## 关于模块 v17

版本 17 模块引入了全新的工作方式，使用 `socket`，不再需要依赖 `logcat`。这意味着，在部分 `logcat` 有问题的设备上不再会有问题。如果你遇到问题（比如打不开被重定向的应用），请使用 logcat 抓取 log 发送给我们。

## 下载和安装

我们暂时只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模块，因为只有 Magisk 可以提供可靠的开机时执行脚本。

### 安装前须知

1. 请务必确认已经了解如何在无法进入系统时删除模块
2. 以防万一，请先备份整个设备的数据
3. 如果有 v12 以前的模块，必须删除

### 版本对应

| 应用版本    | 模块版本 | Riru 版本 |
| ----------- | -------- | --------- |
| 1.5.0+      | v18+     | v16+      |
| 1.4.0-1.4.9 | v17      | any       |

**注意，版本必须严格对应，否则最坏可能出现 bootloop。更早版本不再支持。**

### Magisk 模块

1. 下载 [Riru v16](https://github.com/RikkaApps/Riru/releases/download/v16/magisk-riru-core-v16.zip) （如果要使用 v18 必须升级到 v16，否则 bootloop）
2. 下载 [Riru - Storage Redirect v18](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v18.zip) ([v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip))
3. 在 Magisk 中安装这两个模块
4. 可选，下载 [检测 app](https://github.com/RikkaApps/Riru/releases/download/v15/app-release.apk) 来检查 Riru 是否正常工作
   
### 重新启动 zygote

在少部分设备上，zygote 启动早于 Magisk 文件替换，因此 Riru 就无法发挥作用。提供一个“重新启动 zygote 模块”作为临时解决方案。

这个模块会在 Magisk 提供的 late_start service script 中重新启动 zygote。

**如果你的设备没有遇到问题（没有看到需要使用这个的提示），则不需要使用这个模块。**

> Riru v14 起内置此功能