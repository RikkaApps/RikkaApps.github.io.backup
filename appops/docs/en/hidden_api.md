### About hidden API limitation from Android 9

App Ops must some hidden APIs, but from Android 9 normal apps can't use them.

To use App Ops, you need disable this limitation use adb

```
adb shell
settings put global hidden_api_blacklist_exemptions \*
```

or any terminal app if your device is rooted

```
su
settings put global hidden_api_blacklist_exemptions \*
```

After do this, you need force stop App Ops or even reboot your device.

If this problem still occurs, please contact us.