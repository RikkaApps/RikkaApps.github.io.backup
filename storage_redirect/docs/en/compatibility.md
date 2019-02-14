# Compatibility Report

## Samsung devices

It has been confirmed that Samsung Galaxy S7 edge must not use the arm64 version (you can see the installed version in About, and it must be the arm64 version if downloaded from Google Play). The symptoms are that the service cannot be started or even device reboot. If you are using the arm64 version please uninstall and download arm version from [our website] (https://rikka.app/storage_redirect).

If you are experiencing problems with other Samsung devices, you can try using arm version.

## Huawei devices

Due to Huawei's kernel implementation (which means that it cannot be solved), SELinux rule patch does not work (current implementation requires some rules). This issue should only occur on newer Huawei devices (this issue is reported by a Huawei Mate 20 Pro user).

## Meizu devices

According to the user report, currently Meizu devices only have built-in root available, but processes running through the built-in root will be killed after leaving the app, but "Storage Redirect" requires a process that is always running.

## Other problems

### log is disabled

> If you use "Enhancement Module" v17 and above, app can work even if log is disabled

Check if log is enabled in "Developer Settings".

In addition, according to user feedback, log disabled by default on Huawei EMUI. If you are using EMUI, please search how to enable log on EMUI.