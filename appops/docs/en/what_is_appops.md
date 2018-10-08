### What is App Ops?

In short, App Ops (this app) is an application that modifies the settings of App Ops service in Android system.

----------------------------

In the Android system there is a service called "App Ops", the service is used to track and control.

> The App Ops service defines a series of "application operations", each corresponding to "allow" and "deny", and each application has its own App Ops settings. Many parts of the system have code about checking App Ops settings.

For example, when a normal application needs to acquire location information, the location service will get the App Ops setting of the requesting application, the application will only get the correct data if the AppOps setting associated with the location is allow.

But usually the system does not provide user interface that allows users to modify the App Ops settings directly, this application was born.

##### About terms:

For the convenience of everyone to understand, the application use the word "permission" rather than "application operation", this may have made some misunderstanding that the application has the ability to control permissions directly, but this is not the case.