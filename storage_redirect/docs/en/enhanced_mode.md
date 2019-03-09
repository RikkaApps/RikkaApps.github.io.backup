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

## Version corresponding

| App Version | Module Version | Riru Version |
| ----------- | -------------- | ------------ |
| 1.5.0+      | v18+           | v16+         |
| 1.4.0-1.4.9 | v17            | any          |

**Note that the version must correspond exactly, otherwise the bootloop may be the worst. Earlier versions are no longer supported.**

### Magisk modules

1. Download [Riru v16](https://github.com/RikkaApps/Riru/releases/download/v16/magisk-riru-core-v16.zip)
2. Download [Riru - Storage Redirect v18](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v18.zip) ([v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip))
3. Install these two modules in Magisk
4. Optionally, download [check app](https://github.com/RikkaApps/Riru/releases/download/v15/app-release.apk) to check if Riru works

### Restart zygote

On a small number of devices, zygote starts early than Magisk file replacement, so Riru won't work. We provide a "restart zygote module" a temporary solution.

This module will restart zygote in the late_start service script provided by Magisk.

**If your device dose not have this problem (not see prompt to use this), you do not need to use this module.**

> Built-in from Riru v14