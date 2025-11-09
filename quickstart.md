---
sidebar: false

prev: false
next: false
aside: false
outline: false

---

<style>
    .getbtn {
        height: 50px;
        display: inline;
        padding-right: 10px;
    }
</style>

# Self-host Guide

::: tip 
We recommend reading this entire guide thoroughly before proceeding.
:::

## What is hardware info?

During activation, your machine's hardware identifiers (serial number, board ID, model, etc.) are sent to Apple for validation.

OpenBubbles requires valid machine identifiers to send to Apple during activation. OpenBubbles refers to this data as **"hardware info"**.

A self-hosted setup of Openbubbles requires hardware info from genuine Apple hardware. For a read-to-go paid solution hosted by Openbubbles, [join the waitlist](/#hosted-waitlist).

## Step 1. Install OpenBubbles

Install OpenBubbles on your preferred device:

<a href="https://play.google.com/store/apps/details?id=com.openbubbles.messaging"><img src="/google_play_badge.png" class="getbtn" /></a>
<a href="https://apps.microsoft.com/store/detail/9PJMSNSQD0FV"><img src="/get-ms.svg" class="getbtn" /></a>
<a href="https://flathub.org/apps/app.openbubbles.OpenBubbles"><img src="/badge-flathub.svg" class="getbtn" /></a>

## Step 2. Activate OpenBubbles

OpenBubbles can be activated by using the hardware info of a Mac, an iPhone or from another OpenBubbles user who has activated OpenBubbles using Mac hardware info. 

Setup with a Mac is the most easiest, **and recommended**, however a Mac install will only allow for platform services to be registered with your iCloud email. To register a phone number, an iPhone is required.

:::: details Option A. With a Mac <Badge type="tip" text="Recommended"/>

1. On a Mac, [download and run the QR code generator program](https://github.com/OpenBubbles/Mac-Hardware-Info/releases/latest/download/Mac.Hardware.Info.zip).
    * If you wish to limit your Mac hardware info to one iCloud account, tick "Prevent Sharing".
2. Open your other device you installed OpenBubbles earlier. 
3. Scan the QR code or copy the activation code to your other device. The Mac does not need to stay online. It will not have access to your Apple Account.

::::

:::: details Option B. From another OpenBubbles app (Mac hardware info only) 

::: warning
You are responsible for who you share your hardware identifiers with. If someone uses your hardware identifiers to send mass spam, your device _**will**_ be blocked. If you share one device with over 20 users, you may experience issues.
:::

The hardware info of a single Mac can be shared with **up to 20 friends** with the App. This method assumes you know someone who has already setup a self-hosted OpenBubbles instance, and is willing to share their Mac hardware info.

1. On the other device, OpenBubbles and go to: Settings -> Your Mac.
2. Scan the QR code on another device with the OpenBubbles or share an activation link with your friend.
* If no code shows, the owner of the Mac has chosen to prevent further sharing during setup.

::::

:::: details Option C. With an iPhone <Badge type="danger" text="Caution" />
::: danger
Using an iPhone is **not recommended for new users**. It only works on certain iOS versions and models, and requires significant setup. The iPhone must stay online at all times, and can only be used by one user. However, Android phone numbers **can** be registered with an iPhone (without a second SIM).
:::

::::

See [Phone Number Registration](/docs/pnr)