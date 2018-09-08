# What is "Non-redirect folders"?

Each redirected app will have a separate set of "non-redirected folders", read and write in these folder by the app will be unaffected by redirection.

Learn more: [About redirect](https://rikka.app/storage_redirect/docs/en/?doc=About%20redirect).

# How should I choose "Non-redirect folders"?

In short, just select the folder that the redirected app needs to access. If the chat app needs to access images, you need to select a folder with images such as `Pictures` `DCIM`. If the folder where you want to access the file is not in the default list, you will need to add it manually.

In most cases, keep the default setting unchanged is ok. (The default setting is folders that the Android system will create by default, such as `Android`, `Pictures`, `Music`, etc.)

However, some apps may create folders in the default settings folder, in which case you need to remove the folder for the app. However, due to the limitations of the principle, it is currently impossible to let an app able to read but not write files in a folder. If you encounter such a situation, please choose whether to join this folder.