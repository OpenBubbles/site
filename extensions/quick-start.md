# Quickstart

Clone the [Sample Extension](https://github.com/OpenBubbles/OpenBubblesSampleExtension), and open it in Android Studio

## Adjust manifest options
Adjust `madrid_name`, `madrid_id`, and `madrid_bundle_id` in `AndroidManifest.xml` to the IDs of your corresponding iMessage app if nessesary. They are currently set to GamePigeon defaults.

* `madrid_name` is the iOS app name
* `madrid_id` is the iOS app store ID (url: .../gamepigeon/id**1124197642**)
* `madrid_bundle_id` is the format `com.apple.messages.MSMessageExtensionBalloonPlugin:[team id]:[bundle id]`


## Deploy to device
Deploy the app on the device. It will not launch as it has no main activity.


## Register with OpenBubbles
Open OpenBubbles, then go to Settings -> Developer Tools. Enable Developer Mode, then click "Add Service Name". Enter `com.example.openbubblesextension.MadridExtensionService` (the service name for this example).

## Test!
You should be able to go to any chat and click the **+** button, and see the sample extension there as an option.


