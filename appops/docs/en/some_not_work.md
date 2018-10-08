### Why changing some permission setting not work?

#### keep awake (WAKE_LOCK)

As mentioned in the first help, App Ops only modifies the system settings, and the actual effect is system dependent.
From the system source code, we can find, WAKE_LOCK is only used for statistics,
deny or not will not have a practical effect. ([Relevant code](https://github.com/aosp-mirror/platform_frameworks_base/blob/oreo-release/services/core/java/com/android/server/power/Notifier.java#L191-L193))

If your system version is 7.0 or above, just use "run in background or be woken up".

#### Location-related

##### Why app still can obtain location?

Even if the application does not requested any location-related permissions,
it can still obtain a relatively accurate location by IP address, SSID, etc.

##### Why some location permissions can not be modified?

From the system source code, we can find that location permissions and App Ops is not one-to-one correspondence,
which means change one item in App Ops may affect multiply permission.

We have tried to filter out item that are not actually work, but there may still be items that are not filtered.