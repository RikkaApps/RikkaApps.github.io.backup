
# 增強模式

## 相容性

* 「TaiChi·Magisk」

  根據使用者回報，目前（2019/3/4）似乎仍有不能同時使用的情況。請**使用下面的檢測 app 確認執行情況**，如果出現問題請自行取捨。

* ZUK Z2 無法啟動相機
  
  這個問題由使用 AEX 6.2 的 ZUK Z2 使用者報告，並稱 AEX 6.3 沒有問題。

## 關於模組 v18

鑑於部分使用者不會主動開啟模組的功能，v18 起預設全部開啟。

## 關於模組 v17

版本 17 模組引入了全新的工作方式，使用 `socket`，不再需要依賴 `logcat`。這意味著，在部分 `logcat` 有問題的裝置上不再會有問題。如果你遇到問題（比如打不開被重新導向的應用程式），請使用 logcat 抓取 log 傳送給我們。

## 下載和安裝

由於需要替換系統檔案，我們**暫時**只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模組。

### 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料
3. 如果有 v12 以前的模組，必須刪除

### 版本對應

| 應用程式版本 | Riru - Storage Redirect 版本 | Riru - Core 版本 |
| ------------ | ---------------------------- | ---------------- |
| 1.5.2+       | v19+                         | v16+             |
| 1.5.0-1.5.1  | v18.1                        | v16+             |
| 1.4.0-1.4.9  | v17                          | any              |
| 更早版本     | 不再支援                     |                  |

**注意，版本必須嚴格對應，否則輕則功能不正常，重則無法開機。**

### Magisk 模組

1. 下載 [Riru - Core v17](https://github.com/RikkaApps/Riru/releases/download/v17/magisk-riru-core-v17.zip)
2. 下載 [Riru - Storage Redirect v19.1](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v19.1.zip)（如果要使用 v18 及以上版本，Core 必須升級到 v16 及以上，否則無法開機）
3. 在 Magisk 中安裝這兩個模組
4. 可選，下載 [檢測 app](https://github.com/RikkaApps/Riru/releases/download/v17/app-release.apk) 來檢查 Riru 是否正常工作

### 重新啟動 zygote

在少部分裝置上，zygote 啟動早於 Magisk 檔案替換，因此 Riru 就無法發揮作用。提供一個「重新啟動 zygote 模組」作為臨時解決方案。

這個模組會在 Magisk 提供的 late_start service script 中重新啟動 zygote。

**如果你的裝置沒有遇到問題（沒有看到需要使用這個的提示），則不需要使用這個模組。**

> Riru v14 起內建此功能