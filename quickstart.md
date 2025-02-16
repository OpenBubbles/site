---
sidebar: false

prev: false
next: false
aside: false
outline: false

---

<script setup>
    import { ref, onMounted } from 'vue'

    const subscriptionAvailable = ref(false)
    onMounted(async () => {
        const res = await fetch('https://hw.openbubbles.app/status');
        subscriptionAvailable.value = (await res.json()).available
    })
</script>

<style>
    .getbtn {
        height: 50px;
        display: inline;
        padding-right: 10px;
    }
</style>

# Quickstart

::: tip
Apple **requires** hardware info from genuine Apple hardware to use iMessage. Subscriptions coming soon. OpenBubbles works **best** with a Mac.
:::

## Install OpenBubbles
<a href="https://play.google.com/store/apps/details?id=com.openbubbles.messaging"><img src="/google_play_badge.png" class="getbtn" /></a>
<a href="https://apps.microsoft.com/store/detail/9PJMSNSQD0FV"><img src="/get-ms.svg" class="getbtn" /></a>

## Hosted (monthly subscription)

Get all OpenBubbles features (including turning your Android phone number into a blue bubble) without the need of an iPhone.

<div v-if="subscriptionAvailable">
Now available! Choose "Hosted" during setup, for a $10/mo subscription fee and a 7-day trial.
</div>
<div v-else>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSf0psSFctObU_2Ib44H4WZlXhwpy-nLWy-jteYExWgKZ_mnhg/viewform?usp=header">Join the waitlist</a>
</div>

## Self-managed

### With a Mac

On a Mac, [download and run the QR code generator](https://github.com/OpenBubbles/Mac-Hardware-Info/releases/latest/download/Mac.Hardware.Info.zip). Scan the QR code or copy the activation code to your other device. The Mac does not need to stay online. It will not have access to your Apple Account.

::: info
Your Mac can be shared with **up to 20 friends** with the App. However, it cannot register your phone number.
:::

### From another device (Mac Hardware only)
Open OpenBubbles, then go to Settings -> Your Mac.

Scan the QR code on another device or share an activation link with your friend.

If no code shows, the owner of the Mac has chosen to prevent further sharing.

### With an iPhone <Badge type="danger" text="caution" />
::: danger
Using an iPhone is **not recommended for new users**. It only works on certain iOS versions and models, and requires significant setup. The iPhone must stay online at all times, and can only be used by one user. However, Android phone numbers **can** be registered with an iPhone (without a second SIM).
:::

See [Phone Number Registration](/docs/pnr)



