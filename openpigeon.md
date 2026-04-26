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
    src: /openpigeongames.webp
    alt: OpenBubbles
  actions:
    - theme: brand
      text: Get Started
      link: /openpigeon/#are-you-ready-to-go
---

<style scoped>
.swiper {
	overflow: hidden;
	margin: 0 -24px;
	padding: 22px 0 30px;
	mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}

.swiper-track {
	display: flex;
	width: max-content;
	gap: 18px;
	animation: swiper-scroll 90s cubic-bezier(0.45, 0, 0.55, 1) infinite;
	will-change: transform;
}

.swiper:hover .swiper-track {
	animation-play-state: paused;
}

.swiper-card {
	flex: 0 0 auto;
	width: auto;
	text-align: center;
	font-weight: 600;
	font-size: 16px;
}

.swiper-card img {
	height: 580px;
	width: auto;
	max-width: none;
	border-radius: 16px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
	object-fit: contain;
	background: rgba(0, 0, 0, 0);
	display: block;
	margin: 0 auto;
	transition: transform 180ms ease, box-shadow 180ms ease;
}

.swiper-card:hover img {
	transform: translateY(-6px) scale(1.025);
	box-shadow: 0 18px 38px rgba(0, 0, 0, 0.2);
}

.swiper-card span {
	display: block;
	padding-top: 12px;
	color: var(--vp-c-text-1);
	font-size: 15px;
	letter-spacing: 0.01em;
}

@keyframes swiper-scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
}

@media (max-width: 640px) {
	.swiper-track {
		gap: 12px;
	}
	.swiper-card img {
		height: 320px;
	}
}

@media (prefers-reduced-motion: reduce) {
	.swiper-track {
		animation: none;
	}
}

.games-heading {
	margin: 42px 0 18px;
	text-align: center;
	font-weight: 700;
    padding-top: 10px;
	font-size: 20px;
}

.games-heading span {
	background: linear-gradient(120deg, #f85c5c 30%, #f8995c);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.section-spacer {
	height: 42px;
}

.getbtn {
	height: 50px;
	display: inline;
	padding-right: 10px;
}
</style>

<div class="games-heading">
	<span>Supported Games</span>
</div>

<div class="swiper">
	<div class="swiper-track">
		<div class="swiper-card"><img src="/op-screenshots/cuppong.webp"/><span>Cup Pong</span></div>
		<div class="swiper-card"><img src="/op-screenshots/basketball.webp"/><span>Basketball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/crazy8.webp"/><span>Crazy 8</span></div>
		<div class="swiper-card"><img src="/op-screenshots/archery.webp"/><span>Archery</span></div>
		<div class="swiper-card"><img src="/op-screenshots/wordhunt.webp"/><span>Wordhunt</span></div>
		<div class="swiper-card"><img src="/op-screenshots/battleship.webp"/><span>Battleship</span></div>
		<div class="swiper-card"><img src="/op-screenshots/checkers.webp"/><span>Checkers</span></div>
		<div class="swiper-card"><img src="/op-screenshots/darts.webp"/><span>Darts</span></div>
		<div class="swiper-card"><img src="/op-screenshots/connect4.webp"/><span>Connect 4</span></div>
		<div class="swiper-card"><img src="/op-screenshots/pool.webp"/><span>8 Ball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/reversi.webp"/><span>Reversi</span></div>
		<div class="swiper-card"><img src="/op-screenshots/mancala.webp"/><span>Mancala</span></div>
		<div class="swiper-card"><img src="/op-screenshots/dots.webp"/><span>Dots & Boxes</span></div>
		<div class="swiper-card"><img src="/op-screenshots/gomoku.webp"/><span>Gomoku</span></div>
		<div class="swiper-card"><img src="/op-screenshots/20questions.webp"/><span>20 Questions</span></div>
		<div class="swiper-card"><img src="/op-screenshots/paintball.webp"/><span>Paintball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/filler.webp"/><span>Filler</span></div>
		<div class="swiper-card"><img src="/op-screenshots/wordbites.webp"/><span>Wordbites</span></div>
		<div class="swiper-card"><img src="/op-screenshots/anagrams.webp"/><span>Anagrams</span></div>
		<div class="swiper-card"><img src="/op-screenshots/chess.webp"/><span>Chess</span></div>
        <div class="swiper-card"><img src="/op-screenshots/cuppong.webp"/><span>Cup Pong</span></div>
		<div class="swiper-card"><img src="/op-screenshots/basketball.webp"/><span>Basketball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/crazy8.webp"/><span>Crazy 8</span></div>
		<div class="swiper-card"><img src="/op-screenshots/archery.webp"/><span>Archery</span></div>
		<div class="swiper-card"><img src="/op-screenshots/wordhunt.webp"/><span>Wordhunt</span></div>
		<div class="swiper-card"><img src="/op-screenshots/battleship.webp"/><span>Battleship</span></div>
		<div class="swiper-card"><img src="/op-screenshots/checkers.webp"/><span>Checkers</span></div>
		<div class="swiper-card"><img src="/op-screenshots/darts.webp"/><span>Darts</span></div>
		<div class="swiper-card"><img src="/op-screenshots/connect4.webp"/><span>Connect 4</span></div>
		<div class="swiper-card"><img src="/op-screenshots/pool.webp"/><span>8 Ball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/reversi.webp"/><span>Reversi</span></div>
		<div class="swiper-card"><img src="/op-screenshots/mancala.webp"/><span>Mancala</span></div>
		<div class="swiper-card"><img src="/op-screenshots/dots.webp"/><span>Dots & Boxes</span></div>
		<div class="swiper-card"><img src="/op-screenshots/gomoku.webp"/><span>Gomoku</span></div>
		<div class="swiper-card"><img src="/op-screenshots/20questions.webp"/><span>20 Questions</span></div>
		<div class="swiper-card"><img src="/op-screenshots/paintball.webp"/><span>Paintball</span></div>
		<div class="swiper-card"><img src="/op-screenshots/filler.webp"/><span>Filler</span></div>
		<div class="swiper-card"><img src="/op-screenshots/wordbites.webp"/><span>Wordbites</span></div>
		<div class="swiper-card"><img src="/op-screenshots/anagrams.webp"/><span>Anagrams</span></div>
		<div class="swiper-card"><img src="/op-screenshots/chess.webp"/><span>Chess</span></div>
	</div>
</div>

<div class="section-spacer"></div>

# Are you ready to go?
You'll need [OpenBubbles](/index.html) (for iMessage) before you can start using OpenPigeon and playing with your friends.

<br><br>

# Get OpenPigeon
<a href="https://play.google.com/store/apps/details?id=com.openbubbles.openpigeon">
	<img src="/google_play_badge.png" class="getbtn" />
</a>

## Contribute to OpenPigeon
We're [Open Source on GitHub!](https://github.com/OpenBubbles/OpenPigeon)

<style>
.openpigeon-page {
	--vp-home-hero-name-color: transparent;
	--vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f85c5c 30%, #f8995c);
	--vp-button-brand-bg: #f85c5c;
	--vp-button-brand-hover-bg: #f8995c;
	--vp-button-brand-active-bg: #f8995c;
}

.openpigeon-page .VPHome {
	background:
		radial-gradient(circle at 75% 20%, rgba(248, 153, 92, 0.16), transparent 34%),
		radial-gradient(circle at 20% 10%, rgba(248, 92, 92, 0.12), transparent 30%);
}

.openpigeon-page .VPHomeHero {
	padding-bottom: 18px;
}

.openpigeon-page .image-src {
	max-width: 560px;
	max-height: none;
	margin: 0 auto;
}

.openpigeon-page .image-src img {
	width: 100%;
	height: auto;
	border-radius: 22px;
	box-shadow: 0 22px 55px rgba(0, 0, 0, 0.18);
}

@media (min-width: 640px) {
	.openpigeon-page .image-src {
		max-width: 680px;
	}
}

@media (min-width: 960px) {
	.openpigeon-page .image-src {
		max-width: 520px;
	}
}
</style>