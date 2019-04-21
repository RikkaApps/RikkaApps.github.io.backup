# 技术细节

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. 关于 root 权限使用](#1-关于-root-权限使用)
- [2. 存储空间隔离（重定向）](#2-存储空间隔离重定向)
    - [2.1. “同步文件夹”](#21-同步文件夹)
- [3. 与 Android Q 的区别](#3-与-android-q-的区别)
- [4. 增强模式](#4-增强模式)
    - [4.1. 修复应用间交互](#41-修复应用间交互)
    - [4.2. 修复 rename](#42-修复-rename)
    - [4.3. 文件监视](#43-文件监视)

<!-- /TOC -->

**注意，这篇文档并不会提及所有细节。**

## 1. 关于 root 权限使用

只会建立 `/data/misc/storage_redirect` 文件夹用于存放可执行文件及配置文件。

启动时，会运行两个进程，`storage_redirect` 和 `storage_redirect_server`。`storage_redirect` 负责核心功能；`storage_redirect_server` 会添加一个服务到 `ServiceManager`，负责与存储重定向应用通信。

## 2. 存储空间隔离（重定向）

在应用进程建立后，进入应用进程的挂载命名空间进行一系列的绑定挂载。

比如会挂载 `/mnt/runtime/write/emulated/0/Android/data/com.example/sdcard` 至 `/storage/emulated/0`，那么对于应用进程， `/storage/emulated/0` 实际就是 `/storage/emulated/0/Android/data/com.example/sdcard`。

对“可访问文件夹”中设置的各种规则，本质就是追加了更多绑定挂载。另外，无论怎么设置，默认会至少会挂载 `Android/data/com.example`，`Android/media/com.example`，`Android/obb/com.example` 到 `Android/data/com.example/sdcard` 中。

* 关于存储权限

  存储权限会被强制授予并锁定（在系统权限管理中看到“由政策强制执行”）。锁定的原因在于，在应用的存储权限发生变化后，系统会重新为应用进程挂载 `/storage`（我们无法监控到这一变化），会导致我们所做的挂载丢失。

  在 Android Q 上，还会自动开启 `LEGACY_STORAGE` 和新增的读取照片/影片/音乐权限。

* 关于获知应用进程建立

  在不使用增强模式时，`logcat`。使用增强模式时，由应用进程透过 socket 连接至我们的 `storage_redirect` 进程。

### 2.1. “同步文件夹”

借助 inotify 与硬链接实现。另外，inotify 似乎并不能正确监控到文件被移走/移入，所以只有建立和删除可以被正确处理。

## 3. 与 Android Q 的区别

本质上没有不同（都是挂载），只是细节和其他方面有所差异。另外，对影响旧式应用使用的问题，我们尽可能地让影响最小化，而 Android Q 则是逼迫所有应用改变。

#### 使用媒体存储

* 我们：增强模式（[4.1. 修复应用间交互](#41-修复应用间交互)）
* Android Q：根据是有读取照片/音乐权限进行过滤，并返回虚拟路径（`/mnt/media/`）给应用，在应用进程中对数个函数进行 hook，对虚拟路径使用 content provider 的 `openFile` 来获得可用的 fd（但很多应用还是会因为自身原因无法正确列出照片，音乐等）

#### 直接传递文件路径

* 我们：增强模式（[4.1. 修复应用间交互](#41-修复应用间交互)）
* Android Q：不处理，旧式应用必须改变自身做法

#### 无法在挂载点间移动文件（`renname` 返回 `-1`, `errno=EXDEV`）

* 我们：增强模式（[4.2. 修复 rename](#42-修复-rename)）
* Android Q：截至 DP2 尚未处理

## 4. 增强模式

增强模式借助 [Riru](https://github.com/RikkaApps/Riru) 实现注入应用进程。

### 4.1. 修复应用间交互

在被重定向应用进程中加载自己的 dex，会为 `IActivityManager` 套上动态代理。

自己开启 activity 时，请求启动其他 activity 时对 intent 中携带的 file uri 进行修改，必要时转换成 content uri 经由存储重定向中转。

使用媒体存储时，会根据“可访问文件夹”设置对结果进行修改。

在 Android P 及以上，为了反射不受限，还会强行关闭 hidden api 检查（修改 `nativeForkAndSpecialize` 的 `runtime_flags`）。

### 4.2. 修复 rename

通过在应用进程内 hook `rename`，如果返回 -1 且 `errno == EXDEV` 则先复制后删除并修改返回值。

### 4.3. 文件监视

通过在应用进程内 hook `open` 等函数并使用 socket 发送给 `storage_redirect` 进程。