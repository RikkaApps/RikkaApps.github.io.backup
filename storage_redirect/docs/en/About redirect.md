# Behavior changes of redirected apps

* Read or write files other than "Non-redirect folders": redirected to "Redirect target folder"
* Read or write files in "Non-redirect folders": unaffected
* Files in "Redirect target folder" are managed by Android system
  * These files are accounted in storage usage
  * These files will be removed when clear app data (or cache, depends on "redirect target" folder setting) or uninstall app

> "Non-redirect folders" are folders that Android will create by default, such as `Android`, `Pictures`, `Music` and so on.

# FAQ

## Does the redirect affect the normal use of the app?
  
Most of the cases will not, and the situation that will be affected is listed below.

#### Situations that affect the normal usage of redirected app

* The app will not able to access files and folders outside of "Non-redirect folders".

  Example: Can't find the image in `My Awesome Folders` in a chat app. Because `My Awesome Folder` is not set to "Non-Redirect Folder".

* Issues involving transferring files between two apps (such as Share, Open, system Download Manager). If app pass the file path instead of using `content provider`, one will not be able to find the file.

  Example: Open a file send by others in a chat app. If that app pass file path to other apps. For other apps, the path is wrong so they not able to open that file.

## Will the previously created file be automatically moved after the redirect is turned on?

No. Files created in internal storage do not have an owner, so automatic movement is not possible. You can manually move or delete those files.
  
## Apps that have the redirect turned on will be automatically granted storage permissions. Is this normal?

Yes. Granting storage permissions during an application run will cause the redirect not work, thus forcing automatic grants.