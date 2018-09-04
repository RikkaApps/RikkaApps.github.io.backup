# What is link

"Link" is a feature that is introduced to solve the problem that it is not convenient to access a file saved by redirected apps.

# Behavior of link feature

A link rule mainly includes a source folder and a target folder. When the rule is turned on, the two folders will be monitored and have the following behavior.

* New file creation in source folder: link to target folder
* File in source folder is deleted: delete the corresponding file in target folder (apps only run in the foreground)
* File in target folder is deleted: delete the corresponding file in source folder
* Files in target folder will be linked to source folder when the rule is enabled (and each boot)

# FAQ

## I see the same files in two folders (source folder and target folder), do they take up double storage?

No. Because hard links are used, hard links can be understood as having multiple file names corresponding to the same data.

## If I uninstall the app or clear the app data, will the linked file be deleted?

(Under normal circumstances) No.