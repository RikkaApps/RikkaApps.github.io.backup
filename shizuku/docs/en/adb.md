# Start with adb

<!-- TOC depthFrom:2 depthTo:3 -->

- [1. What is `adb`?](#1-what-is-adb)
- [2. Install `adb`](#2-install-adb)
    - [2.1. Windows](#21-windows)
    - [2.2. Linux / macOS](#22-linux--macos)
- [3. Setting `adb`](#3-setting-adb)
    - [3.1. MIUI device](#31-miui-device)
- [4. Start Shizuku](#4-start-shizuku)
    - [4.1. How to avoid Shizuku stop (even if there is no restart)](#41-how-to-avoid-shizuku-stop-even-if-there-is-no-restart)

<!-- /TOC -->

## 1. What is `adb`?

Android Debug Bridge (`adb`) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you Can use to run a variety of commands on a device.

See [Android Developer](https://developer.android.com/studio/command-line/adb) for more information.

## 2. Install `adb`

### 2.1. Windows

1. Download the [SDK Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) provided by Google and extract it to any folder
2. Open the folder with Explorer,hold down Shift and right click, select "Open PowerShell Window here" (for Windows 7, select open CMD)
3. Enter `adb`, if success, you can see a long list of content instead of the prompt not finding adb.

> Please do not close this window. The "terminal" mentioned later refers to this window (if you closed the window, please go back to step 2)

### 2.2. Linux / macOS

You guys definitely can do this yourself :D

## 3. Setting `adb`

To use `adb` you first need to turn on USB debugging on your device, usually by following these steps:

1. Open system Settings and go to About.
2. Click "Build number" quickly for several times, you can see a message similar to "You are a developer".
3. At this point, you should able to find "Developer Options" in Settings,  enable "USB Debugging".
4. Connect the device to the computer and type `adb devices` in the terminal.
5. At this time, the dialog "Allow debugging" will appear on the device, check "Always allow" and confirm.
6. Enter `adb devices` again in the terminal. If there is no problem, you will see something like the following.

   ```
   List of devices attached
   XXX      device
   ```

> The steps for enabling Developer Options on different devices may vary, please search for yourself.

### 3.1. MIUI device

If you use MIUI, you also need to enable "USB Debug (Security options)".

## 4. Start Shizuku

**This step needs to be re-executed each time the device is rebooted.**

Enter `adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh` in the terminal. If there is no problem, you will see that Shizuku has started successfully in Shizuku app.

### 4.1. How to avoid Shizuku stop (even if there is no restart)

**Please follow the rules below, otherwise it will be invalid.**

1. Do not turn off "USB Debugging"
2. Do not modify the USB usage mode after connecting the device to the computer (or change to "charge only" if not)

   After a security patch, if the USB usage mode is not "charge only", changing the USB usage mode will kill all processes of adb. **Therefore, be sure not to modify the USB usage mode after change to "charge only".** (This step may not be needed if your device has not received security patchs for a long time)

   In addition, some manufacturers (such as Sony) added a dialog that will modify the USB usage mode when the computer is connected. Please don't click any dialog before disconnecting.

#### 4.1.1. Huawei device

Turn on "Allow ADB Debugging Options in 'Charge Only' mode" in "Developer Options".