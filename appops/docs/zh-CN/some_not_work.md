### 为什么一些权限设置无效？

#### 保持唤醒状态（WAKE_LOCK）

如第一篇帮助所言，App Ops 只修改系统设置，实际效果与系统相关。从系统源码中我们可以发现，WAKE_LOCK 只被用于统计，
是否拒绝并不会有实际效果。（[相关代码](https://github.com/aosp-mirror/platform_frameworks_base/blob/oreo-release/services/core/java/com/android/server/power/Notifier.java#L191-L193)）

如果您的系统版本在 7.0 或以上，使用“在后台运行或被唤醒”即可。

#### 位置相关

##### 为什么应用还可以获取位置？

在应用没有没有任何请求与位置相关的权限时，仍然可以依靠 IP 地址、SSID 等取得相对比较精准的位置。

##### 为什么一些位置权限无法修改？

从系统源码中我们可以发现，位置权限与 App Ops 并非一一对应，即 App Ops 中修改一项实际会影响多个权限。

我们已经尝试过滤掉那些实际并没有用的项目，但仍可能存在没有被过滤的项目。