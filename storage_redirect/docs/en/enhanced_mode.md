# Enhanced mode

<!-- TOC depthFrom:2 depthTo:3 -->

- [Compatibility](#compatibility)
- [Performance impact](#performance-impact)
- [Download and install](#download-and-install)
    - [Before you install](#before-you-install)
    - [Version corresponding](#version-corresponding)
    - [Magisk modules](#magisk-modules)
    - [Restart zygote](#restart-zygote)

<!-- /TOC -->

## Compatibility

Support Android 6.0 - Android Q Beta 3

#### Other special cases

* "TaiChi·Magisk"

  According to the user's return, it seems currently (2019/3/4) there is still a problem that cannot be used at the same time. Please **use the following [test app](#magisk-modules) to confirm work status**. If there is a problem, you may have to make a choose.

## Performance impact

* Increased app startup time

  > Approximately 0.025s on Google Pixel 2, with 0.010s from File monitor and 0.015s from Fix app interaction

* Fix app interaction (for redirected apps only)
  
  Generates negligible overhead when the app uses ActivityManager and interacts with the Media Store

* File monitoring (for all apps)

  Transferring records will incur overhead, but in theory it is consistent with Android's log mechanism consumption

## Download and install

We **temporarily** only provide [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) modules, beacuse only Magisk can provide reliable boot script.

### Before you install

1. Make sure you know how to delete the module when you are unable to enter the system
2. Just in case, please backup your whole device data first
3. If there are pre-v12 modules, they must be deleted

### Version corresponding

| App Version    | Riru - Storage Redirect Version | Riru - Core Version |
|----------------|---------------------------------|---------------------|
| 1.6.3+         | v19.3+                          | v18+                |
| 1.5.2+         | v19.x                           | v16+                |
| 1.5.0-1.5.1    | v18.1                           | v16+                |
| 1.4.0-1.4.9    | v17                             | any                 |
| Early versions | No longer supported             |                     |

**Note that the version must correspond exactly, otherwise functions may not work properly, or the worst device can't boot.**

### Magisk modules

1. Download Riru - Core
2. Download Riru - Storage Redirect
3. Install these two modules in Magisk
4. Optionally, download [check app for v19](https://github.com/RikkaApps/Riru/releases/download/v19/app-release.apk) to check if Riru works

* Latest (for app 1.6.8+)

  [Riru - Core v19](https://github.com/RikkaApps/Riru/releases/download/v19/magisk-riru-core-v19.zip)

  [Riru - Storage Redirect v19.5](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v19.5.zip)

* History

  [Riru - Core v18](https://github.com/RikkaApps/Riru/releases/download/v19/magisk-riru-core-v19.zip)

  [Riru - Storage Redirect v19.4](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v19.4.zip)
  
### Restart zygote

> Built-in from Riru v14

Also, if you install the module from recovery, try installing it again from Magisk Manager.