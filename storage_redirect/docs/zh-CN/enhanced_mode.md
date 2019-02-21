# 增强模式

## 关于模块 v17

版本 17 模块引入了全新的工作方式，使用 `socket`，不再需要依赖 `logcat`。这意味着，在部分 `logcat` 有问题的设备上不再会有问题。

但目前（2019/2/7）这个新的工作方式的可靠性还没有得到广泛验证，不能保证一定在你的设备上可用。如果你遇到问题（比如打不开被重定向的应用），你可以暂时使用 [v16](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-arm-arm64-v16.zip) 模块来回到以前的工作方式。

## 兼容性报告

* “TaiChi·Magisk”

  你需要升级“TaiChi·Magisk”到 4.6.0 以上。根据用户回报，可能需要重启两次。

* ZUK Z2 无法启动相机
  
  这个问题由使用 AEX 6.2 的 ZUK Z2 用户报告，并称 AEX 6.3 没有问题。

## 下载和安装

由于需要替换系统文件，我们**暂时**只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模块。

### 安装前须知

1. 请务必确认已经了解如何在无法进入系统时删除模块
2. 以防万一，请先备份整个设备的数据
3. 如果有 v12 以前的模块，必须删除

### Magisk 模块

1. 下载 [Riru v15](https://github.com/RikkaApps/Riru/releases/download/v15/magisk-riru-core-v15.zip)
2. 下载 [Riru - Storage Redirect v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip)
3. 在 Magisk 中安装这两个模块
4. 可选，下载 [检测 app](https://github.com/RikkaApps/Riru/releases/download/v15/app-release.apk) 来检查 Riru 是否正常工作
   
### 重新启动 zygote

在少部分设备上，zygote 启动早于 Magisk 文件替换，因此 Riru 就无法发挥作用。提供一个“重新启动 zygote 模块”作为临时解决方案。

这个模块会在 Magisk 提供的 late_start service script 中重新启动 zygote。

**如果你的设备没有遇到问题（没有看到需要使用这个的提示），则不需要使用这个模块。**

> Riru v14 起内置此功能