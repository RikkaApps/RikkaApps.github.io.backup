# Behavior changes of redirected apps

Please [Redirect target](https://rikka.app/storage_redirect/docs/en/?doc=Redirect%20target) and [Non-redirect folders](https://rikka.app/storage_redirect/docs/en/?doc=Non-redirect%20folder) to understand the concept.

## Changes related to files

* Read or write files other than "Non-redirect folders": redirected to "Redirect target folder"
* Read or write files in "Non-redirect folders": unaffected
* Files in "Redirect target folder" are managed by Android system
  * These files are accounted in storage usage
  * These files will be removed when clear app data (or cache, depends on "redirect target" folder setting) or uninstall app

## Other changes

* Storage permission will be granted automatically

## Example

Assume the configuration is as follows:

- App package name: `com.example`
- Redirect target: `Android/data/<package_name>/sdcard`
- Non-redirect folders: `Pictures`, `Documents`

The following occurs:

- Read `Documents/1.txt`:
  
  Because it is in "Non-redirect folders", it can be read normally.

- 写入 `example/2.txt`:
  
  Because it is not in "Non-redirect folders", it will actually be written to `Android/data/com.example/sdcard/example/2.txt`.

- Know the existence of image `Pictures/1.jpg` through "Media Storage" and read:
  
  Because it is in "Non-redirect folders", it can be read normally.

- Know the existence of image `My Awesome Folder/2.jpg` through "Media Storage" and read:
  
  Because it is not in "Non-redirect folders", actually will read `Android/data/com.example/sdcard/My Awesome Folder/2.jpg`. The image will not be read.