# 增強模式

<!-- TOC depthFrom:2 depthTo:3 -->

- [相容性](#相容性)
- [效能影響](#效能影響)
- [下載和安裝](#下載和安裝)
    - [安裝前須知](#安裝前須知)
    - [版本對應](#版本對應)
    - [Magisk 模組](#magisk-模組)
    - [Magisk v19+](#magisk-v19)
    - [Magisk v17-v18.1](#magisk-v17-v181)
    - [重新啟動 zygote](#重新啟動-zygote)

<!-- /TOC -->

## 相容性

支援 Android 6.0 - Android Q Beta 3

#### 其他特殊情況

* 「TaiChi·Magisk」

  根據使用者回報，目前（2019/3/4）似乎仍有不能同時使用的情況。請**使用下面的 [檢測 app](#magisk-模組) 確認執行情況**，如果出現問題請自行取捨。

## 效能影響

* 應用程式啟動時間增加

  > 在 Google Pixel 2 上增加大約 0.025 秒，其中 0.010 秒來自檔案監視，0.015 秒來自修復應用程式間互動

* 修復應用程式間互動（只在開啟重新導向的應用程式生效）
  
  在應用程式使用 ActivityManager 及與 Media Store 互動時產生可以忽略不記的開銷

* 檔案監視（在所有應用程式生效）

  傳送記錄會產生開銷，但理論上與 Android 的 log 機制消耗一致（可以忽略不記）

## 下載和安裝

我們暫時只提供 [Magisk](https://github.com/topjohnwu/Magisk) 模組，因為只有 Magisk 可以提供**可靠的**開機時執行 script。

### 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料
3. 如果有 v12 以前的模組，必須刪除

### 版本對應

| 應用程式版本 | Riru - Storage Redirect 版本 | Riru - Core 版本 |
|--------------|------------------------------|------------------|
| 1.6.9+       | v19.6+                       | v19+             |
| 1.6.8+       | v19.5+                       | v19+             |
| 1.6.3+       | v19.3+                       | v18+             |
| 1.5.2+       | v19.x                        | v16+             |
| 1.5.0-1.5.1  | v18.1                        | v16+             |
| 1.4.0-1.4.9  | v17                          | any              |
| 更早版本     | 不再支援                     |                  |

**注意，版本必須嚴格對應，否則輕則功能不正常，重則無法開機。**

### Magisk 模組

1. 在 Manager Manager 中下載安裝 **Riru - Core**
2. 下載 **Riru - Storage Redirect** 並在 Magisk Manager 中安裝
3. 可選，下載 [檢測 app for v19.1](https://github.com/RikkaApps/Riru/releases/download/v19.1/app-release.apk) 來檢查 Riru 是否正常工作

### Magisk v19+
* Install **Riru - Core** from **Magisk Manager**
* [Riru - Storage Redirect v19.6](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v19.6.zip)

### Magisk v17-v18.1
* [Riru - Core v19.1](https://github.com/RikkaApps/Riru/releases/download/v19.1/riru-core-v19.1-magisk-v17.zip)
* [Riru - Storage Redirect v19.6](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/riru-storage-redirect-v19.6-magisk-v17.zip)

### 重新啟動 zygote

> Riru v14 起內建此功能

此外，如果你從 recovery 安裝模組，請嘗試重新從 Magisk Manager 安裝。