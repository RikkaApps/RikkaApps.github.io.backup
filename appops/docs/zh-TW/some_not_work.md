### 為什麼一些權限設定無效？

#### 保持喚醒狀態（WAKE_LOCK）

如第一篇說明所言，App Ops 只修改系統設定，實際效果與系統相關。從系統原始碼中我們可以發現，WAKE_LOCK 只被用於統計，
是否拒絕並不會有實際效果。（[相關代碼](https://github.com/aosp-mirror/platform_frameworks_base/blob/oreo-release/services/core/java/com/android/server/power/Notifier.java#L191-L193)）

如果您的系統版本在 7.0 或以上，使用「在背景執行或被喚醒」即可。

#### 位置相關

##### 為什麼應用程式還可以獲取位置？

在應用程式沒有任何要求與位置相關的權限時，仍然可以依靠 IP 位址、SSID 等取得相對比較精準的位置。

##### 為什麼一些位置權限無法修改？

從系統原始碼中我們可以發現，位置權限與 App Ops 並非一一對應，即 App Ops 中修改一項實際會影響多個權限。

我們已經嘗試過濾掉那些實際並沒有用的項目，但仍可能存在沒有被過濾的項目。