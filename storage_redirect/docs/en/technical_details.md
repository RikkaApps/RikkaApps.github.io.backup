# Technical details

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. About the use of root permission](#1-about-the-use-of-root-permission)
- [2. Storage isolation (redirect)](#2-storage-isolation-redirect)
    - [2.1. "Synced Folders"](#21-synced-folders)
- [3. The difference between Android and Android Q](#3-the-difference-between-android-and-android-q)
- [4. Enhanced mode](#4-enhanced-mode)
    - [4.1. Fix interaction between apps](#41-fix-interaction-between-apps)
    - [4.2. Fix rename](#42-fix-rename)
    - [4.3. File Monitoring](#43-file-monitoring)

<!-- /TOC -->

**Note that this document does not mention all the details.**

## 1. About the use of root permission

Only the `/data/misc/storage_redirect` folder will be created for executable files and configuration files.

At startup, two processes, `storage_redirect` and `storage_redirect_server`, are run. `storage_redirect` is responsible for the core functionality; `storage_redirect_server` will add a service to `ServiceManager`, which is responsible for communicating with Storage Redirect app.

## 2. Storage isolation (redirect)

After the app process is created, enter the mount namespace of the app process to perform a series of bind mount.

For example, it will mount `/mnt/runtime/write/emulated/0/Android/data/com.example/sdcard` to `/storage/emulated/0`, then for the app process, `/storage/emulated/0` actually is `/storage/emulated/0/Android/data/com.example/sdcard`.

The essence of the various rules set in "Accessible folders" is to add more bind mounts. In addition, no matter how you set it, `Android/data/com.example`, `Android/media/com.example`, `Android/obb/com.example` will be mount to `Android/data/com.example In /sdcard` by default.

* About storage permissions

  Storage permissions are granted and fixed ("Enforced by policy" in system permission management). The reason for the fix is that after app's storage permissions changed, the system will remount `/storage` for the app process (we can't monitor this change), which will cause the mounts we made to be lost.

  On Android Q, `LEGACY_STORAGE` and new read photo/movie/music permissions are also automatically granted.

* About notified when app process create

  When the enhanced mode is not used, `logcat`. When using enhanced mode, the app process will connect our `storage_redirect` process using socket.

### 2.1. "Synced Folders"

Implemented with inotify and hard links. In addition, inotify does not seem to properly monitor that files have been moved/moved in, so only builds and deletes can be handled correctly.

## 3. The difference between Android and Android Q

There is no difference in essence (all using mount), but the details and other aspects are different. In addition, we minimize the impact on issues that affect the use of legacy apps, while Android Q forces all apps to change.

#### Using media storage

* We: Enhanced mode ([4.1. Fix interaction between apps](#41-fix-interaction-between-apps))
* Android Q: Filter according to the read photo/music permission, and return the virtual path (`/mnt/media/`) to the app, hook the number of functions in the app process, and use `openFile` of content provider for the virtual path  to get the available fd (but many apps still can't correctly list photos, music, etc. for their own reasons)

#### Directly passing file paths

* We: Enhanced mode ([4.1. Fix interaction between apps](#41-fix-interaction-between-apps))
* Android Q: No processing, legacy apps must change

#### Unable to move files between mount points (`renname` returns `-1`, `errno=EXDEV`)

* We: Enhanced mode ([4.2. Fix rename](#42-fix-rename))
* Android Q: As of DP2 not processed yet

## 4. Enhanced mode

Enhanced mode implements app process injection with [Riru](https://github.com/RikkaApps/Riru).

### 4.1. Fix interaction between apps

Load our own dex in the redirected app process and add a dynamic proxy for `IActivityManager`.

When start activity received or request to start other activity, file uri carried in intent will be modified, or converted to content uri (transfer via Storage Redirect app) if necessary.

When you use Media Store, the results are modified based on the "Accessible Folders" setting.

In Android P and above, for unlimited reflection, the hidden api check is forced to disable (modify `runtime_flags` of `nativeForkAndSpecialize`).

On Android Q, the file uri exposure check is forced to disabled in systemui process (execute `StrictMode.disableDeathOnFileUriExposure`). (fix "system bug" with violence)

### 4.2. Fix rename

By hooking `rename` within the app process, if -1 is returned and `errno == EXDEV` then copy and delete and modify the return value.

### 4.3. File Monitoring

By hooking functions such as `open` within the app process and use socket to send to `storage_redirect` process.