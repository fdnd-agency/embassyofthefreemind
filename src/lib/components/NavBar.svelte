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
				EN
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" stroke="white" fill="none" stroke-width="1">
					<polyline points="6 9 12 15 18 9" />
				</svg>
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
		/* kleine optische correctie: */
		position: relative;
		top: 1px;      /* speel met 1–2px naar smaak */
	}

	.lang {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 18px;
		line-height: 1;     /* heel belangrijk voor centrering */
		cursor: pointer;
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
