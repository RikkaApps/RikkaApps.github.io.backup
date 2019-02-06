# 增强模式

## 安装前须知

1. 请务必确认已经了解如何在无法进入系统时删除模块
2. 以防万一，请先备份整个设备的数据
3. 如果有 v12 以前的模块，必须删除

## 关于模块 v17

版本 17 模块引入了全新的工作方式，使用 `socket`，不再需要依赖 `logcat`。这意味着，在部分 `logcat` 有问题的设备上不再会有问题。

但目前（2019/2/7）这个新的工作方式的可靠性还没有得到广泛验证，不能保证一定在你的设备上可用。如果你遇到问题（比如打不开被重定向的应用），你可以暂时使用 [v16](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-arm-arm64-v16.zip) 模块来回到以前的工作方式。

## 下载和安装

由于需要替换系统文件，我们**暂时**只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模块。

### 使用 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 

1. 下载 [Riru v11](https://github.com/RikkaApps/Riru/releases/download/v11/magisk-riru-core-arm-arm64-v11.zip)
2. 下载 [Riru - Storage Redirect v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip)
3. 在 Magisk 中安装这两个模块