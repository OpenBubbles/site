# How OpenBubbles Hosted Works
April 15 2025

<div style="font-weight: 600; font-size: 24px; padding: 5px 0;">A technical overview</div>

At OpenBubbles, we want to make sure you can trust the software you use, especially for something as sensitive and critical as a chat app.

To achieve that goal, we've intentionally designed OpenBubbles in a privacy-preserving manner. We've written this blog post to help you understand how OpenBubbles hosted works, and the relationship between our servers and your devices.


### A note
Our app is [open source](https://github.com/OpenBubbles/openbubbles-app). The details of our protocol is available for anyone to read and audit.

## Activation, anyone?
When activating iMessage, Apple naturally wants to know which iDevice is logging in. This presents a challenge for us, because, evidently, there is no Apple device logging in.

### Okay, but how exactly does "activation" work?
Activation involves registering your public keys and push token with Apple's Identity Directory Service (IDS), so other users can find your device and send encrypted messages to you.

Along with your device's identity info, you are required to submit a short piece of *validation data*, so Apple can validate the authenticity of your device. This validation data must be generated with a genuine iDevice, and is only valid for 15 minutes.

To make sure your device is still active, Apple requires you to periodically "renew" your registration, during which time you must submit new validation data. If you're using OpenBubbles, you can see the next scheduled registration, by visiting Profile -> iMessage Status.

## Back to OpenBubbles
To provide an easy, turnkey solution, we created OpenBubbles **hosted**. For a monthly fee, we setup and manage an iDevice on your behalf, to allow you to use iMessage and other Apple services.

## Our activation process

![Activation Diagram](./OpenBubbles%20diagram.png)

### Hello Oasis
When you open OpenBubbles for the first time, it reaches out to our server, Oasis, to check if there is hosted capacity available. Since we're currently running a waitlist, the answer will always be no, unless you have a waitlist invite code.

### A device over here, please!
When you confirm you wish to use a hosted device, OpenBubbles asks Oasis to allocate a device on your behalf, and associates it with your Google Play payment token. Oasis does not collect any information about your Apple account or identity (other than your email if you used the waitlist).

### Log me in
As you add your number or log into your Apple account, OpenBubbles generates authentication keys on-device, and talks to Apple to get certificates verifying your identity. All certificates and keys are stored locally, and never touch OpenBubbles' servers.

If you log into your Apple Account, OpenBubbles is added as a "trusted" device. All interaction is directly with Apple, and the "device secret" and "device metadata" is stored locally on your device.

### Put me on iMessage!
When it finally comes time to register with iMessage, OpenBubbles reaches back out to Oasis and asks for *validation data*. Assuming your subscription is active, Oasis forwards the request to your hosted iPhone, and sends the data back to OpenBubbles.

OpenBubbles then generates message encryption keys on-device. It finally builds a register request with the message keys, validation data, and authentication certificates, and sends it off to Apple.

### Messages, please.
OpenBubbles connects directly to Apple Push Service (APS) to recieve your messages. As a result, OpenBubbles does not have access to your messages or their metadata (participants, delivery receipts, etc). OpenBubbles also works on most airlines and restricted networks that provide free iMessage access.

A small downside is OpenBubbles must run persistenly in the background on your phone to ensure timely delivery of messages. However, we have taken extreme steps to minimize performance and battery impact. When the main app is closed, the only code running is a rust service, keeping the socket open and staying on top of registration renewals. The main app is only started temporarily when a message is received.

## And that's it!
If you were keeping score at home, all we know is your Google Play payment token, email (if you're using the waitlist), and reserved device.

Your messages are **never relayed to our iPhones**, and, in fact, we don't even know your Apple Account or phone number.

### A few notes
* Since we use iPhones, only one phone number can be registered at a time.
* When you cancel your subscription, we hold your device for a few days to allow you to resubscribe, however, if you don't, your device will be released and your number will be deregistered when the next person signs up.
* E2E encryption only works if you don't share your messages with anyone. If you manually submit logs to us (never shared automatically), your recent messages are included (though we *pwomise* to only look at relevant messages 😉)
* OpenBubbles is an entirely independent software product, with no relationship to, or endorsement by Apple.

iMessage, Apple, Mac and iPhone are trademarks of Apple, Inc.

Android is a trademark of Google, LLC.