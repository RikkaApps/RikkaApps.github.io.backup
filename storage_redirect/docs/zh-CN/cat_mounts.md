# 如何魔法探索


在 adb shell 或任意终端应用中 `su`

通过 `ps -e | grep <应用包名>` 来知道应用进程 pid
   
如微信包名为 `com.tencent.mm` 则需要执行 `ps -e | grep com.tencent`

执行过后应该可以看到

```
u0_a122      22199   505 2594220 244088 SyS_epoll_wait      0 S com.tencent.mm
u0_a122      22269   505 2027792  77840 SyS_epoll_wait      0 S com.tencent.mm:exdevice
u0_a122      22366   505 2049844  85716 SyS_epoll_wait      0 S com.tencent.mm:push
```

这样的文字

其中 22199 就是需要的 pid

接着 `cat /proc/<pid>/mounts | grep storage` （在上面的例子中就是 `cat /proc/22199/mounts | grep storage`）

执行过后应该可以看到
```
tmpfs /storage tmpfs rw,seclabel,nosuid,nodev,noexec,relatime,size=2920396k,nr_inodes=730099,mode=755,gid=1000 0 0
/data/media /storage/emulated sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
tmpfs /storage/self tmpfs rw,seclabel,nosuid,nodev,noexec,relatime,size=2920396k,nr_inodes=730099,mode=755,gid=1000 0 0
/data/media /storage/emulated/0 sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
/data/media /storage/emulated/0/Android/data/com.tencent.mm sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
/data/media /storage/emulated/0/Pictures sdcardfs rw,nosuid,nodev,noexec,noatime,fsuid=1023,fsgid=1023,gid=9997,multiuser,mask=7,derive_gid,default_normal 0 0
...
```

这样的文字

若 SR 运行正常 则一定会有 `/data/media /storage/emulated/0/Android/data/com.tencent.mm` 开头的行

后面接着的 `/data/media /storage/emulated/0/Pictures` 等则是由“非重定向文件夹”设定决定，设定了几个就应该有几个这样的