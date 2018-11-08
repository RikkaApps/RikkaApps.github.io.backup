# 兼容性报告

## su 兼容性

确认支持的 su：

* Magisk
* SuperSU
* LineageOS addonsu

确认不支持的 su：

* Flyme（魅族设备）内置 su
  
  所有 su 出来的进程都将在离开应用后被 kill，但“存储重定向”需要一个一直运行的进程

## 其他问题

### log 被关闭问题

在“开发者设置”中检查 log 是否开启。

另外，据用户反馈，在 Huawei EMUI 上 log 默认关闭 log。如果你在使用 EMUI，请自行查询如何在 EMUI 上开启 log。