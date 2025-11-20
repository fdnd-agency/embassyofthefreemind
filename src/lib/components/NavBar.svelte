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

			<input type="checkbox" id="nav__toggle" class="nav__toggle" />

			<label for="nav__toggle" class="hamburger__btn">
				<span></span>
			</label>

			<aside class="sidepanel">
				<div class="sidepanel__inner">
					<div class="sidepanel__search">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="white" fill="none" stroke-width="1.5">
							<circle cx="9" cy="9" r="7" />
							<line x1="15" y1="15" x2="19" y2="19" />
						</svg>
						<input type="text" placeholder="Search . . ." />
					</div>

					<nav class="sidepanel__nav">
						<ul>
							<li><a href="#">Over ons</a></li>
							<li><a href="#"><strong>Bezoek en tickets</strong></a></li>
							<li><a href="#">Support de EFM</a></li>
							<li><a href="#">Agenda</a></li>
							<li class="submenu">
								<a href="#">Collectie</a>
								<span class="submenu__caret">⌄</span>
							</li>
							<li><a href="#">Research</a></li>
							<li class="submenu">
								<a href="#">Academy</a>
								<span class="submenu__caret">⌄</span>
							</li>
						</ul>
					</nav>

					<div class="sidepanel__footer">
						<p>Wed. to Sat. 10.00-17.00h<br>Sun. 11.00-18.00h</p>
						<p>123, Keizersgracht<br>NL 1015 CJ Amsterdam</p>
					</div>

				</div>
			</aside>
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

	.nav__toggle {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	/* ---------- HAMBURGER BUTTON ---------- */

	.hamburger__btn {
			width: 32px;
			height: 28px;           
			display: flex;
			align-items: center;   
			justify-content: center;
			cursor: pointer;
			position: relative;
			z-index: 102;
	}

	.hamburger__btn span {
			position: relative;
			width: 100%;
			height: 2px;
			background: white;
			transition: all 0.35s ease;
	}

	.hamburger__btn span::before,
	.hamburger__btn span::after {
			content: "";
			position: absolute;
			left: 0;
			width: 100%;
			height: 1.5px;
			background: white;
			transition: all 0.35s ease;
	}

	/* TOP LINE */
	.hamburger__btn span::before {
			top: -9px; 
	}

	/* BOTTOM LINE */
	.hamburger__btn span::after {
			top: 10px;
	}

	/* ---------- ANIMATION TO "X" ---------- */

	.nav__toggle:checked + .hamburger__btn span {
			background: transparent;
	}

	.nav__toggle:checked + .hamburger__btn span::before {
			transform: rotate(45deg);
			top: 0;
	}

	.nav__toggle:checked + .hamburger__btn span::after {
			transform: rotate(-45deg);
			top: 0;
	}

	/* ---------- SIDEPANEL ---------- */

	.sidepanel {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		background: #0b0c0e;
		transform: translateX(100%);
		transition: transform 0.4s ease;
		z-index: 100;
	}

	.nav__toggle:checked ~ .sidepanel {
		transform: translateX(0%);
	}

	.sidepanel__inner {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 2rem;
		color: white;
		overflow-y: auto;
	}

	/* Search */
	.sidepanel__search {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid rgba(255,255,255,0.3);
		padding-bottom: .5rem;
	}

	.sidepanel__search input {
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		color: white;
		font-size: 1rem;
	}

	/* Menu */
	.sidepanel__nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidepanel__nav a {
		color: white;
		text-decoration: none;
		font-size: 1.15rem;
	}

	.submenu {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* Caret */
	.submenu__caret {
		opacity: 0.7;
		font-size: 1.2rem;
		cursor: pointer;
		user-select: none;
	}

	/* Footer */
	.sidepanel__footer {
		margin-top: auto;
		font-size: 0.9rem;
		opacity: 0.85;
		line-height: 1.4;
	}

	@media (min-width: 650px) {
		.sidepanel {
			width: min(400px, 85vw);
		}
	}

	@media (min-width: 900px) {
		.header__center {
			display: flex;
		}
	}

	@media (min-width: 1000px) {
		.nav__list {
			display: flex;
			margin: 0;
			margin-block-end: 0;
		}
	}
</style>
