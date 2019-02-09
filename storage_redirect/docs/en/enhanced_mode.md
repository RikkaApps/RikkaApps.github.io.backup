# Enhanced mode

## About module v17 

The version 17 of the module introduces working method, using `socket`, no longer relying on `logcat`. This means that there will be no longer problems on some of the devices with `logcat` problems.

However, the reliability of this new working method (2019/2/7) has not been widely verified and cannot be guaranteed to be available on your device. If you have problems (such as can't open redirected apps), you can temporarily use [v16](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-arm-arm64-v16.zip) Module to get back to the previous working mode.

## Compatibility Report

* "TaiChi·Magisk"

  According to user reports and verification, "TaiChi·Magisk" will break the functionality of Riru (Enhancement module is based on Riru). Once a problem occurs, you will find that the number of redirects is always 0.

  **This is not our problem, and it is impossible for us to solve this problem alone. Please choose your own.**

* Can't use camera on ZUK Z2 (camera daemon not start)

## Download and install

Due to the need to replace the system files, we **temporarily** only provide [Magisk](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) modules.

### Before you install

1. Make sure you know how to delete the module when you are unable to enter the system
2. Just in case, please backup your whole device data first
3. If there are pre-v12 modules, they must be deleted

### Magisk modules

1. Download [Riru v11](https://github.com/RikkaApps/Riru/releases/download/v11/magisk-riru-core-v11.zip)
2. Download [Riru - Storage Redirect v17](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-storage-redirect-v17.zip)
3. Install these two modules in Magisk

### Restart zygote

On a small number of devices, zygote starts early than Magisk file replacement, so Riru won't work. We provide a "restart zygote module" a temporary solution.

This module will restart zygote in the late_start service script provided by Magisk.

**If your device dose not have this problem (not see prompt to use this), you do not need to use this module.**

[Riru - Restart zygote](https://github.com/RikkaApps/StorageRedirect-assets/releases/download/assets/magisk-riru-restart-zygote.zip)