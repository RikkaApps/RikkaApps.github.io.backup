### What is privilege mode?

In privileged mode, App Ops will invoke high-privilege system APIs by interacting with a process that opened by root or adb. Because this mode is almost equivalent to calling API directly, the speed will be **much faster** than call the relevant commands via the shell under root condition. At the same time, with the ability to call API, the realization of many things will be greatly simplified.

----------------------------

##### Why does the privilege mode requires a standalone app?

Privileged mode implementation requires more work, if sepreated into a standalone application, developers will be able to focus on their own functional development without having to care about the implementation of the privilege mode itself.

##### Why the privileged mode suggested adb permission is insufficient?

On Android 5.0 and 5.1, adb does not have permission to modify App Ops settings, and you need to upgrade the Android version of the system or find a way to root.

##### Will permission settings get invalid if Shizuku server is not running after booting?

No. App Ops is implemented by modifying system settings. **The changes that have been made are ALWAYS in effect** regardless the Shizuku server's status.