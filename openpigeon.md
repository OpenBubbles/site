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
---

<div class="hero-play-button">
	<a href="https://play.google.com/store/apps/details?id=com.openbubbles.openpigeon">
		<img src="/google_play_badge.png" alt="Get it on Google Play" />
	</a>
</div>

<div class="hero-note">
	Requires OpenBubbles (iMessage) to play with friends.
</div>

<style scoped>
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

.openpigeon-page .VPHomeHero .container {
	gap: 32px;
}

.openpigeon-page .image-src {
	width: min(100%, 420px);
	max-width: 420px;
	max-height: none;
	margin: 0 auto;
}

.openpigeon-page .image-src img {
	width: 100%;
	height: auto;
	border-radius: 22px;
	box-shadow: 0 22px 55px rgba(0, 0, 0, 0.18);
}

.hero-play-button {
	display: flex;
	justify-content: center;
	margin: 16px 0 18px;
}

.hero-play-button img {
	height: 56px;
	transition: transform 180ms ease, box-shadow 180ms ease;
}

.hero-play-button img:hover {
	transform: scale(1.06);
	box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
}

.hero-note {
	margin: 6px 0 18px;
	text-align: center;
	color: var(--vp-c-text-2);
	font-size: 13px;
	opacity: 0.85;
}

.games-heading {
	margin: 42px 0 18px;
	padding-top: 10px;
	text-align: center;
	font-size: 20px;
	font-weight: 700;
}

.games-heading span {
	background: linear-gradient(120deg, #f85c5c 30%, #f8995c);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

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
	margin-right: 18px;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
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
	transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
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
	text-align: center;
	letter-spacing: 0.01em;
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

.supported-games-shell,
.page-info-section {
	max-width: 1040px;
	margin: 28px auto 0;
	padding: 0 18px;
	text-align: center;
}

.supported-games-subtitle,
.page-info-section p,
.next-step-section p,
.contribute-card p {
	max-width: 640px;
	margin: 0 auto 22px;
	color: var(--vp-c-text-2);
	line-height: 1.6;
}

.supported-games-subtitle {
	max-width: 620px;
	font-size: 15px;
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
	width: 156px;
	min-height: 54px;
	padding: 12px 16px;
	border: 1px solid rgba(248, 92, 92, 0.18);
	border-radius: 14px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.55)),
		radial-gradient(circle at top, rgba(248, 153, 92, 0.12), transparent 50%);
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	color: var(--vp-c-text-1);
	font-size: 14px;
	font-weight: 650;
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
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.26), transparent);
	transform: skewX(-18deg);
	transition: left 520ms ease;
	pointer-events: none;
}

.supported-game-pill:hover {
	transform: scale(1.02);
	border-color: rgba(248, 92, 92, 0.38);
	box-shadow: 0 12px 26px rgba(248, 92, 92, 0.1);
}

.supported-game-pill:hover::before {
	left: 118%;
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

.next-step-section,
.contribute-card {
	max-width: 760px;
	margin: 10px auto 46px;
	padding: 30px 24px;
	border: 1px solid rgba(248, 92, 92, 0.16);
	border-radius: 24px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.48)),
		radial-gradient(circle at top right, rgba(248, 153, 92, 0.16), transparent 42%);
	box-shadow: 0 14px 34px rgba(0, 0, 0, 0.07);
	text-align: center;
}

.next-step-section h2,
.page-info-section h2,
.contribute-card h2 {
	margin: 0 0 12px;
	font-size: 28px;
	font-weight: 800;
}

.next-step-actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 14px;
}

.secondary-link,
.github-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 44px;
	border-radius: 999px;
	font-weight: 800;
	text-decoration: none;
	transition: transform 160ms ease, box-shadow 160ms ease, color 160ms ease, border-color 160ms ease, background 160ms ease;
}

.secondary-link {
	padding: 0 18px;
	border: 1px solid rgba(248, 92, 92, 0.28);
	color: #f85c5c;
}

.secondary-link:hover {
	transform: scale(1.03);
	border-color: rgba(248, 92, 92, 0.5);
	background: rgba(248, 92, 92, 0.06);
}

.page-info-section {
	margin-bottom: 42px;
}

.info-card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 16px;
}

.info-card,
.faq-item {
	border: 1px solid rgba(248, 92, 92, 0.16);
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.48)),
		radial-gradient(circle at top right, rgba(248, 153, 92, 0.14), transparent 42%);
	box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
	text-align: left;
}

.info-card {
	padding: 22px 20px;
	border-radius: 22px;
}

.info-card h3 {
	margin: 0 0 8px;
	font-size: 18px;
}

.info-card p {
	margin: 0;
	font-size: 14px;
}

.faq-list {
	max-width: 820px;
	margin: 0 auto;
	display: grid;
	gap: 12px;
	text-align: left;
}

.faq-item {
	padding: 18px 20px;
	border-radius: 18px;
}

.faq-item strong {
	display: block;
	margin-bottom: 6px;
	color: var(--vp-c-text-1);
}

.github-link {
	gap: 9px;
	padding: 0 20px;
	background: linear-gradient(120deg, #f85c5c, #f8995c);
	color: white;
}

.github-link:hover {
	color: #ffd6c2;
	transform: scale(1.03);
	box-shadow: 0 12px 26px rgba(248, 92, 92, 0.22);
}

.github-icon {
	width: 19px;
	height: 19px;
	flex: 0 0 19px;
	fill: currentColor;
	transition: transform 160ms ease;
}

.github-link:hover .github-icon {
	transform: scale(1.1);
}

.dark .supported-game-pill,
.dark .next-step-section,
.dark .info-card,
.dark .faq-item,
.dark .contribute-card {
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035)),
		radial-gradient(circle at top right, rgba(248, 153, 92, 0.16), transparent 42%);
	border-color: rgba(248, 153, 92, 0.24);
}

@media (min-width: 640px) {
	.openpigeon-page .image-src {
		width: min(100%, 460px);
		max-width: 460px;
	}
}

@media (min-width: 960px) {
	.openpigeon-page .image-src {
		width: min(100%, 500px);
		max-width: 500px;
	}
}

@media (min-width: 1200px) {
	.openpigeon-page .image-src {
		width: min(100%, 540px);
		max-width: 540px;
	}
}

@media (max-width: 959px) {
	.openpigeon-page .VPHomeHero .container {
		gap: 18px;
	}
}

@media (max-width: 640px) {
	.swiper-card {
		margin-right: 12px;
	}

	.swiper-card img {
		height: 320px;
	}

	.supported-games-grid {
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
	.supported-game-pill::before,
	.hero-play-button img,
	.secondary-link,
	.github-link,
	.github-icon {
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
<div class="swiper-card"><img src="/op-screenshots/tanks.webp"/><span>Tanks</span></div> 
<div class="swiper-card"><img src="/op-screenshots/gomoku.webp"/><span>Gomoku</span></div> 
<div class="swiper-card"><img src="/op-screenshots/20questions.webp"/><span>20 Questions</span></div> 
<div class="swiper-card"><img src="/op-screenshots/paintball.webp"/><span>Paintball</span></div> 
<div class="swiper-card"><img src="/op-screenshots/filler.webp"/><span>Filler</span></div> 
<div class="swiper-card"><img src="/op-screenshots/wordbites.webp"/><span>Wordbites</span></div> 
<div class="swiper-card"><img src="/op-screenshots/anagrams.webp"/><span>Anagrams</span></div> 
<div class="swiper-card"><img src="/op-screenshots/chess.webp"/><span>Chess</span></div> 
<div class="swiper-card"><img src="/op-screenshots/knockout.webp"/><span>Knockout</span></div> 
<div class="swiper-card"><img src="/op-screenshots/golf.webp"/><span>Mini Golf</span></div> 
<div class="swiper-card"><img src="/op-screenshots/shuffle.webp"/><span>Shuffleboard</span></div> 
<div class="swiper-card"><img src="/op-screenshots/9ball.webp"/><span>9 Ball</span></div>
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
<div class="swiper-card"><img src="/op-screenshots/tanks.webp"/><span>Tanks</span></div>  
<div class="swiper-card"><img src="/op-screenshots/gomoku.webp"/><span>Gomoku</span></div> 
<div class="swiper-card"><img src="/op-screenshots/20questions.webp"/><span>20 Questions</span></div> 
<div class="swiper-card"><img src="/op-screenshots/paintball.webp"/><span>Paintball</span></div> 
<div class="swiper-card"><img src="/op-screenshots/filler.webp"/><span>Filler</span></div> 
<div class="swiper-card"><img src="/op-screenshots/wordbites.webp"/><span>Wordbites</span></div> 
<div class="swiper-card"><img src="/op-screenshots/anagrams.webp"/><span>Anagrams</span></div> 
<div class="swiper-card"><img src="/op-screenshots/chess.webp"/><span>Chess</span></div>
<div class="swiper-card"><img src="/op-screenshots/knockout.webp"/><span>Knockout</span></div> 
<div class="swiper-card"><img src="/op-screenshots/golf.webp"/><span>Mini Golf</span></div> 
<div class="swiper-card"><img src="/op-screenshots/shuffle.webp"/><span>Shuffleboard</span></div> 
<div class="swiper-card"><img src="/op-screenshots/9ball.webp"/><span>9 Ball</span></div>
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
		<div class="supported-game-pill"><span>9 Ball</span></div>
		<div class="supported-game-pill"><span>Reversi</span></div>
		<div class="supported-game-pill"><span>Mancala</span></div>
		<div class="supported-game-pill"><span>Dots & Boxes</span></div>
		<div class="supported-game-pill"><span>Tanks</span></div>
		<div class="supported-game-pill"><span>Gomoku</span></div>
		<div class="supported-game-pill"><span>20 Questions</span></div>
		<div class="supported-game-pill"><span>Paintball</span></div>
		<div class="supported-game-pill"><span>Filler</span></div>
		<div class="supported-game-pill"><span>Wordbites</span></div>
		<div class="supported-game-pill"><span>Anagrams</span></div>
		<div class="supported-game-pill"><span>Chess</span></div>
		<div class="supported-game-pill"><span>Knockout</span></div>
		<div class="supported-game-pill"><span>Mini Golf</span></div>
		<div class="supported-game-pill"><span>Shuffleboard</span></div>
	</div>
</div>

<div class="section-spacer"></div>

<div class="next-step-section" id="are-you-ready-to-go">
	<h2>Ready to play?</h2>
	<p>
		Once OpenBubbles is set up, install OpenPigeon and start playing supported games with your iPhone friends.
	</p>
	<div class="next-step-actions">
		<a href="/index.html" class="secondary-link">Set up OpenBubbles first</a>
		<a href="https://play.google.com/store/apps/details?id=com.openbubbles.openpigeon">
			<img src="/google_play_badge.png" class="getbtn" alt="Get it on Google Play" />
		</a>
	</div>
</div>

<div class="page-info-section">
	<h2>More games coming soon</h2>
	<p>
		OpenPigeon is growing quickly, with more games planned and community contributions welcome.
	</p>
	<div class="info-card-grid">
		<div class="info-card">
			<h3>More classics</h3>
			<p>We’re actively growing the game library with popular, social games that make playing with friends over iMessage feel seamless.</p>
		</div>
		<div class="info-card">
			<h3>Better Android play</h3>
			<p>The goal is to make playing with iPhone friends feel smooth, simple, and natural from Android.</p>
		</div>
		<div class="info-card">
			<h3>Open source progress</h3>
			<p>Developers can help improve existing games, polish UI, and add new games over time.</p>
		</div>
	</div>
</div>

<div class="page-info-section">
	<h2>Quick questions</h2>
	<div class="faq-list">
		<div class="faq-item">
			<strong>Do I need OpenBubbles?</strong>
			<span>Yes. OpenBubbles handles iMessage support, and OpenPigeon adds the games.</span>
		</div>
		<div class="faq-item">
			<strong>Can I play with iPhone friends?</strong>
			<span>Yes. That is the whole point: playing supported GamePigeon-compatible games from Android.</span>
		</div>
		<div class="faq-item">
			<strong>Can I add my own game to OpenPigeon?</strong>
			<span>Yes. OpenPigeon is open source, so more games and improvements can be added over time.</span>
		</div>
	</div>
</div>

<div class="contribute-card">
	<h2>Contribute to OpenPigeon</h2>
	<p>
		OpenPigeon is open source. If you are a developer, you can help improve the app, polish existing games, or contribute new ones.
	</p>
	<a href="https://github.com/OpenBubbles/OpenPigeon" class="github-link">
		<span>View on GitHub</span>
		<svg class="github-icon" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"/>
		</svg>
	</a>
</div>

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

.openpigeon-page .VPHomeHero .name {
	background: linear-gradient(120deg, #f85c5c 30%, #f8995c);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

.openpigeon-page .image-src {
	width: min(100%, 420px);
	max-width: 420px;
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
		width: min(100%, 460px);
		max-width: 460px;
	}
}

@media (min-width: 960px) {
	.openpigeon-page .image-src {
		width: min(100%, 500px);
		max-width: 500px;
	}
}

@media (min-width: 1200px) {
	.openpigeon-page .image-src {
		width: min(100%, 540px);
		max-width: 540px;
	}
}
</style>
