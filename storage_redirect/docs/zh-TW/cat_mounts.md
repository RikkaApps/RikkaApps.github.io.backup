# 如何魔法探索


在 adb shell 或任意終端程式中 `su`

透過 `ps -e | grep <程式包名>` 來知道程式進程 pid
   
如微信包名為 `com.tencent.mm` 則需要執行 `ps -e | grep com.tencent`

執行過後應該可以看到

```
u0_a122      22199   505 2594220 244088 SyS_epoll_wait      0 S com.tencent.mm
u0_a122      22269   505 2027792  77840 SyS_epoll_wait      0 S com.tencent.mm:exdevice
u0_a122      22366   505 2049844  85716 SyS_epoll_wait      0 S com.tencent.mm:push
```

這樣的文字

其中 22199 就是需要的 pid

接著 `cat /proc/<pid>/mounts | grep storage` （在上面的例子中就是 `cat /proc/22199/mounts | grep storage`）

執行過後應該可以看到
```
tmpfs /storage tmpfs rw,seclabel,nosuid,nodev,noexec,relatime,size=2920396k,nr_inodes=730099,mode=755,gid=1000 0 0
/data/media /storage/emulated sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
tmpfs /storage/self tmpfs rw,seclabel,nosuid,nodev,noexec,relatime,size=2920396k,nr_inodes=730099,mode=755,gid=1000 0 0
/data/media /storage/emulated/0 sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
/data/media /storage/emulated/0/Android/data/com.tencent.mm sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
/data/media /storage/emulated/0/Pictures sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
...
```

這樣的文字

若 SR 執行正常 則一定會有 `/data/media /storage/emulated/0/Android/data/com.tencent.mm` 開頭的行

後面接著的 `/data/media /storage/emulated/0/Pictures` 等則是由「非重新導向資料夾」設定決定，設定了幾個就應該有幾個這樣的
