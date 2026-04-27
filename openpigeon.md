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
	animation: swiper-scroll 45s linear infinite;
	will-change: transform;
	transform: translate3d(0, 0, 0);
}

.swiper:hover .swiper-track {
	animation-play-state: paused;
}

.swiper-card {
	position: relative;
	flex: 0 0 auto;
	width: auto;
	margin-right: 18px;
	text-align: center;
	font-weight: 600;
	font-size: 16px;
}

.swiper-card img {
	display: block;
	width: auto;
	height: 580px;
	max-width: none;
	margin: 0 auto;
	border-radius: 16px;
	object-fit: contain;
	background: transparent;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
	transition: transform 180ms ease, box-shadow 180ms ease;
}

.swiper-card:hover img {
	transform: scale(1.025);
	filter: blur(3px) brightness(0.65);
	box-shadow: 0 18px 38px rgba(0, 0, 0, 0.2);
}

.swiper-card span {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 52px;
	padding: 10px 14px;
	border-radius: 999px;
	background: rgba(0, 0, 0, 0.45);
	color: white;
	font-size: 18px;
	font-weight: 800;
	letter-spacing: 0.01em;
	text-align: center;
	opacity: 0;
	transform: translate(-50%, -50%) scale(0.96);
	transition: opacity 180ms ease, transform 180ms ease;
	pointer-events: none;
	backdrop-filter: blur(6px);
}

.swiper-card:hover span {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
}

@keyframes swiper-scroll {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(-50%, 0, 0);
	}
}

.games-heading {
	margin: 42px 0 18px;
	padding-top: 10px;
	text-align: center;
	font-weight: 700;
	font-size: 20px;
}

.games-heading span {
	background: linear-gradient(120deg, #f85c5c 30%, #f8995c);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.supported-games-shell {
	max-width: 1040px;
	margin: 28px auto 0;
	padding: 0 18px;
}

.supported-games-subtitle {
	max-width: 620px;
	margin: 0 auto 18px;
	text-align: center;
	color: var(--vp-c-text-2);
	font-size: 15px;
	line-height: 1.6;
}

.supported-games-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 14px;
}

.supported-game-pill {
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 54px;
	padding: 12px 16px;
	border: 1px solid rgba(248, 92, 92, 0.18);
	border-radius: 14px;
	width: 156px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.55)),
		radial-gradient(circle at top, rgba(248, 153, 92, 0.12), transparent 50%);
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	color: var(--vp-c-text-1);
	font-weight: 650;
	font-size: 14px;
	text-align: center;
	transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.supported-game-pill::before {
	content: "";
	position: absolute;
	top: 0;
	left: -45%;
	width: 28%;
	height: 100%;
	background: linear-gradient(
		90deg,
		transparent,
		rgba(255, 255, 255, 0.26),
		transparent
	);
	transform: skewX(-18deg);
	transition: left 520ms ease;
	pointer-events: none;
}

.supported-game-pill:hover::before {
	left: 118%;
}

.supported-game-pill:hover {
	transform: scale(1.02);
	border-color: rgba(248, 92, 92, 0.38);
	box-shadow: 0 12px 26px rgba(248, 92, 92, 0.1);
}

.supported-game-pill span {
	position: relative;
	z-index: 1;
}

.supported-game-pill:hover span {
	color: #f85c5c;
}

.section-spacer {
	height: 42px;
}

.getbtn {
	display: inline;
	height: 50px;
	padding-right: 10px;
}

.dark .supported-game-pill {
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035)),
		radial-gradient(circle at top left, rgba(248, 153, 92, 0.16), transparent 42%);
	border-color: rgba(248, 153, 92, 0.24);
}



@media (max-width: 640px) {
	.swiper-track {
		gap: 12px;
	}

	.swiper-card img {
		height: 320px;
	}

	.supported-games-grid {
		grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
		gap: 10px;
	}

	.supported-game-pill {
		min-height: 52px;
		padding: 10px 12px;
	}
}

@media (prefers-reduced-motion: reduce) {
	.swiper-track {
		animation: none;
	}

	.swiper-card img,
	.supported-game-pill,
	.supported-game-pill::before {
		transition: none;
	}
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

<div class="supported-games-shell">
	<p class="supported-games-subtitle">
		Play the classics your iPhone friends already know, right from OpenPigeon on Android.
	</p>
	<div class="supported-games-grid">
		<div class="supported-game-pill"><span>Cup Pong</span></div>
		<div class="supported-game-pill"><span>Basketball</span></div>
		<div class="supported-game-pill"><span>Crazy 8</span></div>
		<div class="supported-game-pill"><span>Archery</span></div>
		<div class="supported-game-pill"><span>Wordhunt</span></div>
		<div class="supported-game-pill"><span>Battleship</span></div>
		<div class="supported-game-pill"><span>Checkers</span></div>
		<div class="supported-game-pill"><span>Darts</span></div>
		<div class="supported-game-pill"><span>Connect 4</span></div>
		<div class="supported-game-pill"><span>8 Ball</span></div>
		<div class="supported-game-pill"><span>Reversi</span></div>
		<div class="supported-game-pill"><span>Mancala</span></div>
		<div class="supported-game-pill"><span>Dots & Boxes</span></div>
		<div class="supported-game-pill"><span>Gomoku</span></div>
		<div class="supported-game-pill"><span>20 Questions</span></div>
		<div class="supported-game-pill"><span>Paintball</span></div>
		<div class="supported-game-pill"><span>Filler</span></div>
		<div class="supported-game-pill"><span>Wordbites</span></div>
		<div class="supported-game-pill"><span>Anagrams</span></div>
		<div class="supported-game-pill"><span>Chess</span></div>
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