---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

pageClass: openpigeon-page

title: Play GamePigeon on Android

head:
  - - meta
    - name: description
      content: "Play GamePigeon on Android"
  - - meta
    - http-equiv: Content-Language
      content: en

hero:
  name: "OpenPigeon"
  text: "Play GamePigeon on Android"
  tagline: Play Cup Pong, Basketball, Crazy 8s, and more with your iPhone friends!
  image:
    src: /openpigeongames.png
    alt: OpenBubbles
  actions:
    - theme: brand
      text: Get Started
      link: /openpigeon/#ready-to-go
---

<style scoped>
    .swiper {
        white-space: nowrap;
        overflow-x: auto;
        margin: 0 -24px;
    }
    .swiper > div {
        display: inline-block;
        width: 80%;
        padding: 5px;
        max-width: 300px;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
    }
    .swiper > div > span {
        display: inline-block;
        padding: 10px 0;
    }
    .swiper > div > img {
        border-radius: 10px;
    }
    .getbtn {
        height: 50px;
        display: inline;
        padding-right: 10px;
    }
</style>

<div class="swiper">
    <div style="padding-left: 14px; width: 0;"> </div>
    <div>
        <img src="/op-screenshots/cuppong.jpg"/>
        <span>Cup Pong</span>
    </div>
    <div>
        <img src="/op-screenshots/basketball.jpg"/>
        <span>Basketball</span>
    </div>
    <div>
        <img src="/op-screenshots/crazy8.jpg"/>
        <span>Crazy 8</span>
    </div>
    <div>
        <img src="/op-screenshots/archery.jpg"/>
        <span>Archery</span>
    </div>
    <div>
        <img src="/op-screenshots/wordhunt.jpg"/>
        <span>Wordhunt</span>
    </div>
    <div>
        <img src="/op-screenshots/battleship.jpg"/>
        <span>Battleship</span>
    </div>
    <div>
        <img src="/op-screenshots/checkers.jpg"/>
        <span>Checkers</span>
    </div>
    <div>
        <img src="/op-screenshots/darts.jpg"/>
        <span>Darts</span>
    </div>
    <div>
        <img src="/op-screenshots/connect4.jpg"/>
        <span>Connect 4</span>
    </div>
    <div>
        <img src="/op-screenshots/pool.jpg"/>
        <span>8 Ball</span>
    </div>
</div>

<br>
<br>
<br>


# Ready to go?
You'll need [OpenBubbles](/index.html) (for iMessage) before you can start using OpenPigeon and playing with your friends.
<br>
<br>

# Get OpenPigeon
<a href="https://play.google.com/store/apps/details?id=com.openbubbles.openpigeon"><img src="/google_play_badge.png" class="getbtn" /></a>

## Contribute to OpenPigeon
We're [Open Source on GitHub!](https://github.com/OpenBubbles/OpenPigeon) We're actively looking for game developers to contribute their favorite games.


<style>
.openpigeon-page {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f85c5c 30%, #f8995c);
  --vp-button-brand-bg: #f85c5c;
  --vp-button-brand-hover-bg: #f8995c;
  --vp-button-brand-active-bg: #f8995c;
}

@media (min-width: 960px) {
    .image-src {
        max-width: 420px;
        max-height: 320px;
    }
}
@media (min-width: 640px) {
    .image-src {
        max-width: 336px;
        max-height: 256px;
    }
}

.image-src {
    max-width: 252px;
    max-height: 192px;
}
</style>
