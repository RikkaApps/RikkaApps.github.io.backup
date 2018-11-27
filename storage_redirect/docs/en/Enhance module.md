# Enhancement module

## Features

* Guarantee _Storage Redirect_ starts early than normal apps during boot stage
* Guarantee redirected app's logic runs later than redirect
* Monitor file access in public storage (only monitors `open open64 openat openat64 creat creat64 mkdir mkdirat` call in `libc` from app processes)
* Fix the problem that redirect apps can't move files between specific folders

## Precautions

* Back up all your data before use
* Try to disable (delete) it if you have any problem

## Install

_Since this solution needs to replace system files, we only provide Magisk modules for now._

### Install with [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) (recommended)

IMPORTANT: Before installation, **please make sure that you have learned how to remove the module when the system can't start**

From v13, enhance module is a module of [Riru](https://github.com/RikkaApps/Riru), install Riru is required.

1. IMPORTANT: **Delete all old module before v12 (if there is)**
2. IMPORTANT: Make sure version of Storage Redirect is **1.0.0.r1083 or above**
3. Make sure version of Magisk is v17 or above
4. Download [[Magisk] Riru - Core v9 for arm/arm64](https://github.com/RikkaApps/Riru/releases/download/v9/magisk-riru-core-arm-arm64-v9.zip)
5. Download [[Magisk] Riru - Storage Redirect v15 for arm/arm64](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-arm-arm64-v15.zip)
6. Install in _Magisk Manager_

## How to check if it works

* During the boot process, check if there is log like `StorageRedirectInject: replaced com.android.internal.os.Zygote#nativeForkAndSpecialize` (you must connect your device to PC and use adb logcat to check this log, because it will be triggered during the very early progress of booting)
* When opening any app, check if there is log like  `StorageRedirectInject: nativeForkAndSpecialize called, uid=` (use anything that can read log is ok)