
# Frequently Asked Questions

## What is "Hardware Info"?&#x20;

During iMessage activation, your machine's hardware identifiers (serial number, board ID, model, etc.) are sent to Apple for validation. 
OpenBubbles requires valid machine identifiers to send to Apple during activation. OpenBubbles refers to this data as "hardware info".

## How can I obtain hardware info?

See [activation](/quickstart.html#activate-openbubbles)

## Can OpenBubbles import existing messages? 
* If you have a previous OpenBubbles message backup, yes. To create or restore one, go to Settings -> Backup & Restore -> Messages Backups.
* If you do not have an OpenBubbles message backup, not at this time. OpenBubbles cannot backfill messages from iCloud.

## What if I do not have access to a Mac?

If you don't have access to a Mac, ask a friend to share their code with you. They can share it from the hardware info app on the Mac, or from settings inside OpenBubbles. One Mac can be used by up to 20 users (unlimited logins).

## Does the Mac need to stay online?&#x20;

No! Once you have setup OpenBubbles, feel free to turn off, discard, or do anything you wish with your Mac. Keep in mind the physical Mac may still be useful for troubleshooting.

## What does "prevent sharing" do?

* Enabling "prevent sharing" applies a few restrictions to generated codes:
* Can only be used once (text codes only)
* Expire after 48 hours (text codes only)
* Cannot be shared to other users after completing setup.

## Is OpenBubbles safe to use?&#x20;

Everything happens locally, on your phone. Anything that happens is strictly between you and Apple. An immense effort has been made to ensure a reliable and safe experience. That being said, iMessage is a complex and changing system, and every situation cannot be predicted. Most issues will only affect OpenBubbles, and will not affect other devices or your account. In extremely rare cases, your account may be temporarily (day or two) or permanently blocked. In permanent cases, a call with Apple support will usually lift the block.
::: warning
You are responsible for who you share your hardware identifiers with. If someone uses your hardware identifiers to send mass spam, your device _**will**_ be blocked, and you will only have yourself to blame. If you share one device with over 20 users, you may experience issues.
:::
## I am having issues logging into my Apple Account
To potentially resolve this issue, go to https://account.apple.com/, and delete any duplicate devices and try again.


## Disable Foreground Service Notification
This notification is not needed for OpenBubbles to function.

To disable, either:
* Go to your device settings, search for notification settings for OpenBubbles, and disable the category "Foreground Service".
* Wait for a Foreground Service notification to appear, tap and hold on the notification, press the gear, and disable the category "Foreground Service".
* Go to OpenBubbles app info page, tap "Notifications" and disable the category "Foreground Service".

If you are using a Samsung Device and do not see notification categories you have to enable the "Manage notification categories for each app" option.
To do this you have to go into Settings -> Notifications -> Advanced Settings -> toggle manage notification categories for each app. 

All the methods should end on a page like this:

![Foreground service](/foreground.png)


## Can I register my phone number with OpenBubbles?

If you have an iPhone running the relay app, yes. The phone must stay online at all times. Enter the relay code on the hardware identifier screen, and you will be prompted to register your number. Please refer to the [Phone Number Registration](pnr) page for more information.

## Does OpenBubbles work with FindMy?

Yes! Access the Find My page from the top 3 dots on the main screen. If no Find My option appears, you need to re-log in. Choose "Change Hardware" in settings.
* AirTags are not supported
* Sharing live location with other users is not supported
* Receiving shared locations through Find My and iMessage is supported
* Tracking other devices is supported

## Can I create shared albums?
No, at this time only receiving is supported. However, you can contribute media to shared albums you are invited to.

## Does OpenBubbles work with FaceTime?

No, OpenBubbles does not work with FaceTime. Ask your friends to generate and send you a link, this is officially supported by Apple.

## Why are contacts I know are using iMessage showing up green?

This means you are throttled by Apple. Wait a few hours/days and try again.
* If you recently registered, this can be normal.
* If you have texted many people (group chat or otherwise) you may have to wait a few days or weeks for Apple to raise your limit.

## I see "Verification Failed" under some messages. What does this mean?
This indicates OpenBubbles could not verify the identity of the sender when the message was received. This can be caused for a few reasons:
* You had a poor connection at the time and Apple's keyserver could not be contacted
* You are being rate-limited by Apple
* \[Highly unlikely\] An attacker has compromised APS (but not the keyserver) and is attempting to send a message from an identity that isn't theirs.

## Why can't I send or receive messages?

* Running clear identity cache (Go to Settings -> Developer Tools) - This may help with sending messages.
* Make sure iMessage and Facetime is disabled and you are logged out of iCloud if you are using an iPhone.
* You are deregistered - Check your registration status and renewal time in your profile settings and check your registration method and try again.
* Advanced Data Protection is enabled - Disable this option
* Contact Key Verification is enabled - Disable this option
* Your Apple Account/Hardware has been throttled/banned/blocked by Apple - Visit this [site](https://rentry.org/applebans) to learn more. You may need to create a new account.

Contact us on [Discord](https://discord.gg/98fWS4AQqN) if issues persist.

## Why can't I see my messages sent on OpenBubbles on other Apple devices, even though my Apple Account is linked?

This is a known issue and fixes itself after 24 hours.