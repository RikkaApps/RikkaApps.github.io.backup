### 關於從 Android 9 引入的 hidden API 限制

App Ops 必須使用一些隱藏 API，但從 Android 9 開始普通程式不能使用。

為了使用 App Ops，你需要關閉這個限制，使用 adb

```
adb shell
settings put global hidden_api_blacklist_exemptions \*
```

或使用任意終端程式（如果裝置已 root）

```
su
settings put global hidden_api_blacklist_exemptions \*
```

做完後，你需要強行停止 App Ops 設定重啟裝置。

如果此問題仍然存在，請聯絡我們。

#### 特別提示

MIUI （可能還有其他 ROM）預設不允許 adb 修改系統設定，你需要在系統的“開發者選項”中開啟“USB 除錯（安全選項）”或類似選項。