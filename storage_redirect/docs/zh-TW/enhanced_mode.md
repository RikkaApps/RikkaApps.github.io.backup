
# 增強模式

## 關於模組 v17

版本 17 模組引入了全新的工作方式，使用 `socket`，不再需要依賴 `logcat`。這意味著，在部分 `logcat` 有問題的裝置上不再會有問題。

但目前（2019/2/7）這個新的工作方式的可靠性還沒有得到廣泛驗證，不能保證一定在你的裝置上可用。如果你遇到問題（比如打不開被重新導向的應用程式），請使用 logcat 抓取 log 傳送給我們。

## 相容性報告

* 「TaiChi·Magisk」

  根據使用者回報，目前（2019/3/4）似乎仍有不能同時使用的情況。請**使用下面的檢測 app 確認執行情況**，如果出現問題請自行取捨。

  **這個問題只可能由 TaiChi 方面解決。**

* ZUK Z2 無法啟動相機
  
  這個問題由使用 AEX 6.2 的 ZUK Z2 使用者報告，並稱 AEX 6.3 沒有問題。

## 下載和安裝

由於需要替換系統檔案，我們**暫時**只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模組。

## 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料
3. 如果有 v12 以前的模組，必須刪除

### Magisk 模組

1. 下載 [Riru v15](https://github.com/RikkaApps/Riru/releases/download/v15/magisk-riru-core-v15.zip)
2. 下載 [Riru - Storage Redirect v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip)
3. 在 Magisk 中安裝這兩個模組
4. 可選，下載 [檢測 app](https://github.com/RikkaApps/Riru/releases/download/v15/app-release.apk) 來檢查 Riru 是否正常工作

### 重新啟動 zygote

在少部分裝置上，zygote 啟動早於 Magisk 檔案替換，因此 Riru 就無法發揮作用。提供一個「重新啟動 zygote 模組」作為臨時解決方案。

這個模組會在 Magisk 提供的 late_start service script 中重新啟動 zygote。

**如果你的裝置沒有遇到問題（沒有看到需要使用這個的提示），則不需要使用這個模組。**

> Riru v14 起內建此功能