# 兼容性报告

## su 兼容性

确认支持的 su：

* Magisk
* SuperSU
* LineageOS addonsu

确认不支持的 su：

* Flyme（魅族设备）内置 su
  
  所有 su 出来的进程都将在离开应用后被 kill，但“存储重定向”需要一个一直运行的进程

## 设备兼容性

### Samsung 设备

目前已确认 Samsung Galaxy S7 edge 一定不能使用 arm64 版本（在关于中可以看到安装的版本，从 Google Play 下载一定是 arm64 版），症状为服务无法启动甚至设备重启。如果你使用了 arm64 版本请卸载并从 [我们的网站](https://rikka.app/storage_redirect) 选择下载 arm 版本。

如果你使用其他 Samsung 设备遇到问题，可以尝试使用 arm 版本。

## 其他问题

### log 被关闭问题

在“开发者设置”中检查 log 是否开启。

另外，据用户反馈，在 Huawei EMUI 上 log 默认关闭 log。如果你在使用 EMUI，请自行查询如何在 EMUI 上开启 log。