
# Phone Number Registration
::: info
Phone Number Registration may not be as reliable as Mac registration, and different carriers may not play nicely. OpenBubbles operates **BEST** with Mac hardware codes.

The following guide contains links to third-party websites that are not affiliated with OpenBubbles and their contents can change at any time. Use at your own risk.
:::
Learn how to get your phone number working on iMessage. The app will default to sending to whatever handle is chosen in settings or setup. 
You can also choose to skip logging in with Apple Account. This may lead to less issues in some cases.

## Pre-Setup | Do this first
Make sure iMessage and Facetime is disabled on your iPhone. You also need to disable Advanced Data Protection and Contact Key Verification. Log out of any Apple Account on the device. OpenBubbles does not support login via app-specific passwords and hardware keys.

## Sim / eSim Swaping Methods

Sim swapping is a method which involves using an iPhone to register a number, and then using OpenBubbles normally with Mac hardware data. You can follow the same guides used for BlueBubbles. However, this method can be even more unreliable than OB.
[All These BlueBubbles | Sim Swapping Guide](https://guide.atbluebubbles.com/ )

## Relay Apps
Keep the device on at all times and connected to Wi-Fi in order to keep your number registered. 
While not required, leaving the display on may improve reliability.

### Method 1 - Validation Relay
There are multiple ways to install Validation Relay, dependening on iOS version and device hardware. 
This guide can be followed regardless of jailbreak status: 
 
Guide 1 - TrollStore

1. Install TrollStore on your device (iOS 14 - iOS 17.0) - [TrollStore Guide](https://ios.cfw.guide/installing-trollstore/)
2. If you have TestFlight installed, delete it.
3. Sideload JJTech's - [Validation Relay App](https://github.com/JJTech0130/ValidationRelay/releases) TIPA file in TrollStore.
4. For best results, sign out of any Apple ID on the device.
5. Input the code from the relay app in OpenBubbles (if you are changing from existing hardware, go to Settings -> Change Hardware).
6. Enable Keep Awake and Dim Display
7.  Optional Steps  - If you are jailbroken you can install the following tweaks (may not be compatible with your iOS version):
    * [AdvancedBrightnessSlider](https://havoc.app/package/advancedbright) to lower the risk of screen burn in
    * [ChargeLimiter](https://github.com/lich4/ChargeLimiter?tab=readme-ov-file#Introduction) to limit charge of the battery
    * [Immortalizer](https://havoc.app/package/immortalizer) to keep the relay app in the active while the screen is off.

### Method 2

If you are on older iOS versions (10 - 14) and jailbroken follow these steps: 

1. Download Copperboy100's - [RelayServer](https://github.com/OpenBubbles/relayserver/releases). -arm is for iOS 10 - 14 (rootful), -arm64 is for iOS 15 - 16.5 (rootless)
2. Install RelayServer 
3. Retrieve the relay code in /var/mobile/config.json. You can find this using an app like Filza.
4. For best results, sign out of any Apple ID on the device.
5. Input the code from the relay app in OpenBubbles (if you are changing from existing hardware, go to Settings -> Change Hardware).

## DO NOT USE
~~[ThatMarcel's beepserv-rewrite](https://github.com/thatmarcel/beepserv-rewrite)~~

It is known to be **extremely unreliable** and usually only works once.

###
**Credits** : [pypush, jjtech, Alfie,](https://discord.com/channels/1130633272595066880/1135636248019615874/1231003645529817139) [BlueBubbles Team](https://github.com/orgs/BlueBubblesApp/people), [danip](https://discord.com/channels/1130633272595066880/1135636248019615874/1231003645529817139), [cjocollin](https://www.reddit.com/r/BlueBubbles/comments/1938ock/stop_using_old_methods_heres_a_new_one/) and [Copperboy100](https://github.com/TaeHagen)
###
