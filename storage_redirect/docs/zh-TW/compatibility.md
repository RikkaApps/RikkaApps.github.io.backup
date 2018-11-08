# 相容性報告

## su 相容性

確認支援的 su：

* Magisk
* SuperSU
* LineageOS addonsu

確認不支援的 su：

* Flyme（Meizu 裝置）內建 su
  
  所有 su 出來的行程都將在離開應用程式後被 kill，但「儲存重新導向」需要一個一直執行的行程

## 其他問題

### log 被關閉問題

在「開發者設定」中檢查 log 是否開啟。

另外，據使用者反饋，在 Huawei EMUI 上 log 預設關閉 log。如果你在使用 EMUI，請自行查詢如何在 EMUI 上開啟 log。