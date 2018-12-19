# Explanation of terms

* Internal storage: built-in storage of the device, such as folder `/storage/emulated/<user id>` (user id is generally 0, the primary user)
* Root directory (of internal storage): such as folder `/storage/emulated/0`
* Application-specific folders (on internal storage): Application-specific folders provided by Android systems, such as `/storage/emulated/0/Android/data/com.example` (where `com.example` is the app package name)
* Redirect target folder: a folder in app-specific folder, each redirected app have this option
* Non-redirect folders: a set of folders, each redirected app have this option

# Our philosophy

We hope that the app should only save **files that are useful to the user** to internal storage (except application-specific folder) and user should perceive it (for example, save received images in chat apps, download files in browser apps).

But many applications (especially most applications from mainland China), either actively or passively (behaviors from some SDKs they used) create many folders in internal storage, most of which are privately formatted data. **These files should be saved to the application-specific folder**. After uninstalling those apps, those files will not be deleted. We believe that such behavior is unacceptable.

"Storage Rediret" is designed to let apps behave as we wish, with minimal impact on the user experience.

# Tutorial from scratch

## Understand what happens when you enable redirect

After enabling redirect, when the app reads/writes files in the internal storage, it actually reads/writes the files in the "Redirect target folder" so that the internal storage is not contaminated. However, the app will not be able to access some of the required files (such as the chat app need to access photos), so we introducted "Non-redirect folders", where the app can read or write files as usual.

You can also use "View redirect storage" feature to view internal storage from the perspective of the redirected app.

In addition, files created by this app will be managed by the Android system as long as they are not in the "Non-redirect folders" folder. You can view the space occupied by these files in the App info of the system. When you clear the application data or uninstall the application, these files will also be deleted.

## Understand situations that may affect the normal use of the app

Situations that affect the normal usage are basically situations involving multiple app interactions.

In short, a file path, to redirected and not redirected apps or different redirected apps, may correspond to a different file.
So there will be problems if these apps pass file path rather than use `Content Provider`.

Problems can be divided into these categories:

1. Use other apps to open files from a redirected app (Workaround with "Link" feature, solve with "Enhance module" in the future)
2. Share files from redirected apps
3. Share files to redirected apps
4. Files created by a redirected app are used by another redirected app (Solve with "Shared folders" feature)
5. Redirect apps can't move files between specific folders (Solve with "Enhance module")

Some practical problems that users in mainland China often encounter:

* Open received files from QQ and WeChat (1)
* Send images from Sougou pinyin to QQ (4)
* Xposed modules modify WeChat not work (4)
* Bilibili can't save recorded gif (5)

It should be noted that these problems (except 5) usually only appear in poorly designed app, so there should be fewer and fewer problematic situations over time.

## Judge if redirect is required

If an app creates files that unpleasant for you and does not provide an option to change it, you can determine that the redirect should be enabled.

If you use the "Enhance module", you can use "File monitor" feature to see what file this app have accessed, and then guess files are created by which app.

## Options related to redirect

### Non-redirect folders

"Non-redirect folders" is a very important option that determines which files the redirected app can access.
You can also use the "View redirected storage" feature to confirm if the app can access those files.

### Redirect target folder

"Redirect target folder" is a less important option, which determines that the real folder if the app read/write folder except of "Non-redirect folders". If there are no special requirements, there is usually no need to change this option.

### Link

"Link" is a very important part. If you fully understand what happens when you redirect is enabled, you will know that if a redirected app saves useful files to a folder other than "Non-redirect folders", other app may not find these files. The link function was born to solve this problem.

You can simply understand a link rule as synchronizing a folder in the redirect storage with a outside folder in internal storage, so you can find those files directly in the outer folder.

Applications with online rules usually include link rules, and mostly enable those rules directly is enough. However, it should be noted that the rules are provided by other users, and their correctness and timeliness may not be guaranteed. So we still hope that you can understand how the link function works and create and even contribute your own rules to other users when online rules don't meet their needs.

In addition, the the link function uses hard link (you can search for what is hard link), and the same file that can be seen in the source folder and the target folder takes up only one storage space.

#### How to create your own link rules

First of all, the link feature should only be used to link useful files (such as images and documents saved in a chat app). Some people will mistakenly believe that the various files generated by the application need to be linked. If this is the case, the redirect will lose its meaning.

Using WeChat as an example, WeChat will save the received file to `tencent/MicroMsg/WeChat`. If redrect is enabled, they will actually be saved to `Android/data/com.tencent.mm/sdcard/tencent/MicroMsg/WeChat`, which makes it very inconvenient to find the files. So we need to create a link rule to link these files to a outer folder.

We can simply create such a link rule:

* Source path: `tencent/MicroMsg/WeChat`
* Target path: `Download/WeChat`

Then received file will be savefd to `Download/WeChat`. But then you will definitely find some problems.

1. Received images can not be found in album apps

   Enable "Add to Media storage" option

2. "Open with other app" can not open files
  
   This is because WeChat dose not use `Content Provider`. There is currently only one workaround for this problem, the "Show notifications" option. When you check "Show notification" and receive the file again, you will see a new "Downloaded xxx" notification. Clicking this notification will open the file normally.
   
   You can also find these files directly from other file manager apps or Android's File app.

3. Some unwanted files appeared

   WeChat **may** save other files (start with com.tencent.xin.emoticon) to `tencent/MicroMsg/WeChat`, but we don't need to access these files outside. So we need use "Filter" option to exclude these files。

   The "Filter" feature uses regular expressions, and you can search for regular expressions yourself.

### Shared folders

"Shared folders" is a very important part from version v1.2.0. In short, a shared folder allows a redirected app to access a file generated by another redirected app.

### Things you need to do after you enable redirect

#### Transfer and delete files previously created by the app

Because the files in the internal storage cannot track the creator, you need to move and delete the files created by the app yourself.