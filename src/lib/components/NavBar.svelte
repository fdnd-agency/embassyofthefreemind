<header class="header">
	<section class="header__content">
		<div class="header__logo">
			<img src="/logo/logo_white.svg" alt="Embassy of the Free Mind" class="logo" />
		</div>

		<nav class="header__center">
			<ul class="nav__pages">
				<li class="nav__item"><a href="#" style="font-weight:bold;">Bezoek en tickets</a></li>
				<li class="nav__item"><a href="#">Collectie</a></li>
				<li class="nav__item"><a href="#">Verhalen</a></li>
				<li class="nav__item"><a href="#">Online catalogus</a></li>
				<li class="nav__item"><a href="#">Over ons</a></li>
			</ul>
		</nav>

		<section class="header__right">
			<div class="lang">
				<input type="checkbox" id="lang-toggle" class="lang__toggle" />
				<label for="lang-toggle" class="lang__label">
					<span>EN</span>
					<svg class="lang__caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
						<polyline points="4 6 9 12 14 6" />
					</svg>
				</label>

				<ul class="lang__menu">
					<li><a href="?lang=en">EN</a></li>
					<li><a href="?lang=nl">NL</a></li>
				</ul>
			</div>

			<div class="hamburger">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 24 24"
						stroke="white"
						fill="none"
						stroke-width="1"
					>
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
			</div>
		</section>
	</section>
</header>

<style>
	header {
		position: fixed;
		z-index: 10;
		width: 100%;
		font-family: var(--font-body);
		font-weight: 300;
		color: white;
		background-color: #0b0c0e;
	}

	.header__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: clamp(0.5rem, 3vw, 2.5rem);
		padding-block: 0.75rem;
		transition: all 0.2s ease-in-out;
	}

	.header__logo {
		flex: 1;
		width: clamp(90px, 10vw, 105px);
		height: auto;
		display: block;
		object-fit: contain;
	}

	.logo {
		width: clamp(90px, 10vw, 105px);
		object-fit: contain;
	}

	.nav {
		display: inherit;
		flex-direction: column;
		align-content: baseline;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.header__center {
		flex: 2;
		display: none;
		justify-content: center;
	}

	.nav__pages {
		display: flex;
		gap: clamp(10px, 4vw, 60px);
		list-style: none;
	}

	.nav__item a {
		color: white;
		text-decoration: none;
	}

	.nav__item {
		font-size: 14px;
		display: block;
		padding-bottom: 0.2rem;
		position: relative;
		text-wrap: nowrap;
		@media (min-width: 1200px) {
			font-size: 16px;
		}
	}

	.nav__item::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-color: white;
		transition: width 0.3s ease-out;
	}

	.nav__item:hover::before {
		width: 100%;
	}

	.header__right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1.75rem;
		position: relative;
		top: 1px;     
	}

	.lang,
	.lang__label,
	.lang__menu,
	.lang__menu li,
	.hamburger__button {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	.lang__toggle {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	.lang {
		position: relative;
		cursor: pointer;
	}

	.lang__label {
		display: flex;
		align-items: center;
		gap: .3rem;
	}

	.lang__menu {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: .5rem;
		background: #0b0c0e;
		padding: .5rem 0;
		display: none;
	}

	.lang__menu li {
		list-style: none;
	}

	.lang__menu a {
		display: block;
		padding: .5rem 1rem;
		color: white;
		text-decoration: none;
		font-size: .9rem;
	}

	.lang__menu a:hover {
		background: rgba(255,255,255,.1);
	}

	.lang__toggle:checked + .lang__label + .lang__menu {
		display: block;
	}

	.lang__caret {
		transition: transform 0.3s ease;
		transform-origin: center;
	}

	.lang__toggle:checked + .lang__label .lang__caret {
		transform: rotate(180deg);
	}

	.hamburger {
		cursor: pointer;
	}

	.search {
		display: none;
		align-items: center;
		gap: 0.5rem;
		position: relative;
	}

	.search input {
		background: transparent;
		border: none;
		border-bottom: 1px solid white;
		color: white;
		padding: 0.2rem 0.3rem;
		width: clamp(120px, 12vw, 170px);
		outline: none;
	}

	.search input::placeholder {
		color: rgb(255, 255, 255);
	}

	@media (min-width: 700px) {

	}

	@media (min-width: 1000px) {

		.header__center {
			display: flex;
		}

		.nav__list {
			display: flex;
			margin: 0;
			margin-block-end: 0;
		}
	}
</style>
