
# 增強模式

## 安裝前須知

1. 請務必確認已經瞭解如何在無法進入系統時刪除模組
2. 以防萬一，請先備份整個裝置的資料
3. 如果有 v12 以前的模組，必須刪除

## 關於模組 v17

版本 17 模組引入了全新的工作方式，使用 `socket`，不再需要依賴 `logcat`。這意味著，在部分 `logcat` 有問題的裝置上不再會有問題。

但目前（2019/2/7）這個新的工作方式的可靠性還沒有得到廣泛驗證，不能保證一定在你的裝置上可用。如果你遇到問題（比如打不開被重新導向的應用程式），你可以暫時使用 [v16](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-arm-arm64-v16.zip) 模組來回到以前的工作方式。

## 下載和安裝

由於需要替換系統檔案，我們**暫時**只提供 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 模組。

### 使用 [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) 

1. 下載 [Riru v11](https://github.com/RikkaApps/Riru/releases/download/v11/magisk-riru-core-v11.zip)
2. 下載 [Riru - Storage Redirect v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip)
3. 在 Magisk 中安裝這兩個模組