# Enhanced mode

## Compatibility

* "TaiChi·Magisk"

  According to the user's return, it seems currently (2019/3/4) there is still a problem that cannot be used at the same time. Please **use the following test app to confirm work status**. If there is a problem, you may have to make a choose.

* Can't use camera on ZUK Z2

  This issue was reported by ZUK Z2 users using AEX 6.2 and said AEX 6.3 has no problem.

## About module v18

Since some users will not actively open the function of the module, all features will be enabled by default from v18.

## About module v17 

The version 17 of the module introduces working method, using `socket`, no longer relying on `logcat`. This means that there will be no longer problems on some of the devices with `logcat` problems. If you have problems (such as can't open redirected apps), please use logcat to grab the log and send it to us.

## Download and install

We **temporarily** only provide [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) modules, beacuse only Magisk can provide reliable boot script.

### Before you install

1. Make sure you know how to delete the module when you are unable to enter the system
2. Just in case, please backup your whole device data first
3. If there are pre-v12 modules, they must be deleted

### Version corresponding

| App Version    | Riru - Storage Redirect Version | Riru - Core Version |
| -------------- | ------------------------------- | ------------------- |
| 1.6.3+         | v19.3+                          | v18+                |
| 1.5.2+         | v19.x                           | v16+                |
| 1.5.0-1.5.1    | v18.1                           | v16+                |
| 1.4.0-1.4.9    | v17                             | any                 |
| Early versions | No longer supported             |                     |

**Note that the version must correspond exactly, otherwise functions may not work properly, or the worst device can't boot.**

### Magisk modules

1. Download [Riru - Core v18](https://github.com/RikkaApps/Riru/releases/download/v18/magisk-riru-core-v18.zip)
2. Download [Riru - Storage Redirect v19.3](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v19.3.zip) (from v19.3+, Core must be upgraded to v18 or above, otherwise your device will not boot)
3. Install these two modules in Magisk
4. Optionally, download [check app](https://github.com/RikkaApps/Riru/releases/download/v17/app-release.apk) to check if Riru works

### Restart zygote

On a small number of devices, zygote starts early than Magisk file replacement, so Riru won't work. We provide a "restart zygote module" a temporary solution.

This module will restart zygote in the late_start service script provided by Magisk.

**If your device dose not have this problem (not see prompt to use this), you do not need to use this module.**

> Built-in from Riru v14