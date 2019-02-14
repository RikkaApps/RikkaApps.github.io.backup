# 相容性報告

## Samsung 裝置

目前已確認 Samsung Galaxy S7 edge 一定不能使用 arm64 版本（在關於中可以看到安裝的版本，從 Google Play 下載一定是 arm64 版），症狀為服務無法啟動甚至裝置重啟。如果你使用了 arm64 版本請解除安裝並從 [我們的網站](https://rikka.app/storage_redirect) 選擇下載 arm 版本。

如果你使用其他 Samsung 裝置遇到問題，可以嘗試使用 arm 版本。

## Huawei 裝置

由於 Huawei 的核心實現（這意味著不可能被解決），導致 SELinux 規則 patch 無法工作（目前實現需要增加部分規則）。這個問題應該只在比較新的Huawei 裝置上出現（這個問題由一個 Huawei Mate 20 Pro 使用者報告）。

## Meizu 裝置

根據使用者報告，目前 Meizu 裝置只有內建 root 可用，但通過內建 root 執行的进程都將在離開應用後被 kill，但「儲存重新導向」需要一個一直執行的进程。

## 其他問題

### log 被關閉問題

> 如果你使用「增強模組」 v17 及以上，即時 log 被關閉也可以正常使用

在「開發者設定」中檢查 log 是否開啟。

另外，據使用者反饋，在 Huawei EMUI 上 log 預設關閉 log。如果你在使用 EMUI，請自行查詢如何在 EMUI 上開啟 log。