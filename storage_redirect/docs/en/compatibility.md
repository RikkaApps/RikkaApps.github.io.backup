# Compatibility Report

## su compatibility

Confirm supported su:

* Magisk
* SuperSU
* LineageOS addonsu

Confirm unsupported su:

* Flyme (Meizu devices) built-in su
  
  All processes from su will be killed after leaving the app, but "Storage Redirect" requires a process that is always running.

## Device compatibility

### Samsung devices

It has been confirmed that Samsung Galaxy S7 edge must not use the arm64 version (you can see the installed version in About, and it must be the arm64 version if downloaded from Google Play). The symptoms are that the service cannot be started or even device reboot. If you are using the arm64 version please uninstall and download arm version from [our website] (https://rikka.app/storage_redirect).

If you are experiencing problems with other Samsung devices, you can try using arm version.

## Other problems

### log is disabled

Check if log is enabled in "Developer Settings".

In addition, according to user feedback, log disabled by default on Huawei EMUI. If you are using EMUI, please search how to enable log on EMUI.