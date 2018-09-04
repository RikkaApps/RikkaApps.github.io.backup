# Before start

If you still can't solve the problem, please contact us through in-app "Help and support".

# Specific device issues

* **Album is empty in "WeChat" app**

  If other redirected applications work properly, you may need to try to clear the data of "WeChat" and **enable "WeChat"'s storage permission manually from app info**. (We have not yet been able to reproduce the problem)

### Specific device issues

* **Does not work on Huawei EMUI**

  EMUI presets log off, and "store redirects" rely on logcat for information. Please ask yourself how to enable log on EMUI.

* **Does not work on Samsung S7 Edge**

  Please download arm version (you may need to uninstall current version) from [our website](https://rikka.app/storage_redirect/) and **disable auto update in Play store**.

### General problems

* **Redirected apps still generate files**

  Try [Enhance module](https://rikka.app/StorageRedirect/docs/en-US/?doc=enhanced)

* **Unable to find file in redirected app**

  Please check if the file is in "Non-redirect folders". Redirected app is not able to access files not in "Non-redirect folders". (See [About redirect](https://rikka.app/storage_redirect/docs/en/?doc=About%20redirect) for detail)

  If the file is not in "Non-redirect folders", please move it to "Non-redirect folders", or change "Non-redirect folders" setting,

  Magic: If the setting is correct but still can't find file, you may need to try to clear the data of the app （optional?) and disable and enable the app's storage permission manually from app info.


* **Unable to open file from redirected app**

  > Example: "Open with other app" in "WeChat" app will get "unable to open file"

  This is a problem of redirected app, passing file path to other apps. To other app, the file path is wrong.

  To solve this problem, please use [Link](https://rikka.app/storage_redirect/docs/en/?doc=About%20link) feature.

  A notification will show when new file created if the correct rule is added.
  At this time, just tap the notification to open app. (Most popular apps already have user-submitted rules, just add them)

  > Example: Correct way to open files received by "WeChat" app
  >
  > ![Correct way to open](./../en/images/open_with_0.png)

  Files can also be found through the system's "File" (DocumentUI) app .

  > Example: Finding a received file using the Files app
  >
  > !["File" app](./../en/images/open_with_1.png)

* **Unable to share to redirected app**

  This is due to design issues with redirected app (and possibly the sharing app).

  Please download our [Bridge](https://play.google.com/store/apps/details?id=moe.shizuku.bridge) app to use his "Forward share" feature to solve this problem. (You can also wait for us for other solution)