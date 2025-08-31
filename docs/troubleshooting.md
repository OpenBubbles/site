# Troubleshooting

## My contacts aren't showing
When you first install OpenBubbles, your contacts may not be properly displayed. In order to fix this, restart your phone.

The windows app currently does not show contacts. As an alternative, you can use the "Change Chat Avatar" option in the details page of your chat to identify your contacts.


## Why are contacts I know are using iMessage showing up green?

This means you are throttled by Apple. Wait a few hours/days and try again.
* If you recently registered, this can be normal.
* If you have texted many people (group chat or otherwise) you may have to wait a few days or weeks for Apple to raise your limit.


## I can't send or receive messages

* Running clear identity cache (Go to Settings -> Developer Tools) - This may help with sending messages.
* Make sure iMessage and Facetime is disabled and you are logged out of iCloud if you are using an iPhone.
* You are deregistered - Check your registration status and renewal time in your profile settings and check your registration method and try again.
* Start a new conversation with contact
* Advanced Data Protection is enabled - Disable this option
* Contact Key Verification is enabled - Disable this option
* Your Apple Account/Hardware has been throttled/banned/blocked by Apple - Visit this [site](https://rentry.org/applebans) to learn more. You may need to create a new account.
* Make sure your iDevice can use iMessage. If your device cannot use iMessage, OpenBubbles will not work.

Contact us on [Discord](https://discord.gg/98fWS4AQqN) if issues persist.

## I keep getting sent back to the login screen
* Make sure you are logged out of iCloud on the relay device (if applicable)
* Delete duplicate device logins on https://account.apple.com

## I am having issues logging into my Apple Account
To potentially resolve this issue, go to https://account.apple.com/, and delete any duplicate devices and try again. 

OpenBubbles does not support login via app-specific passwords and hardware keys 
Please use a email and password to login.

## Debug relay issues (device offline/code not found)
* Make sure your device is powered on.
* Make sure your device is connected to Wi-fi
* Change Auto-Lock to never on your device (This may lead to screen burn in, lowering brightness will help mitigate this)
* Enable Keep Awake in relay app
* If using a VPN check if Apple domains and services are bypassed.
* Make sure relay app and OpenBubbles are updated

## I can't see sent messages on other Apple devices, even though my Apple Account is linked
* This is a known issue and fixes itself after 24 hours.

## I see "Verification Failed" under some messages. What does this mean?
This indicates OpenBubbles could not verify the identity of the sender when the message was received. This can be caused for a few reasons:
* You had a poor connection at the time and Apple's keyserver could not be contacted
* You are being rate-limited by Apple
* \[Highly unlikely\] An attacker has compromised APS (but not the keyserver) and is attempting to send a message from an identity that isn't theirs.

## Mac-Hardware-Info does not work
* Update to High Sierra or newer, if your device does not compatible with newer versions of MacOS visit https://dortania.github.io/OpenCore-Legacy-Patcher/ to see how to update to a newer version of MacOS.


