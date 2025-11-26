<script>
  let isLangOpen = false;
	let isSidepanelOpen = false;

  function toggleLang() {
    isLangOpen = !isLangOpen;
  }

  function toggleSidepanel() {
    isSidepanelOpen = !isSidepanelOpen;
  }

	function closeAll() {
    isLangOpen = false;
    isSidepanelOpen = false;
  }
</script>

<svelte:window on:click={closeAll} />

<header class="header">
	<section class="header-content">
		<div class="header-logo">
			<img src="/logo/logo_white.svg" alt="Embassy of the Free Mind" class="logo" />
		</div>

		<nav class="header-center">
			<ul class="nav-pages">
				<li class="nav-item"><a href="#">Collectie</a></li>
				<li class="nav-item"><a href="#">Verhalen</a></li>
				<li class="nav-item"><a href="#">Online catalogus</a></li>
				<li class="nav-item"><a href="#">Over ons</a></li>
				<li class="nav-item"><a href="#" style="font-weight:bold;">Tickets kopen</a></li>
			</ul>
		</nav>

		<section class="header-right">
					<span>EN</span>
					<svg class="lang-caret caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
						<polyline points="4 6 9 12 14 6" />
					</svg>
				</label>

				<ul class="lang-menu">
					<li><a href="?lang=en">EN</a></li>
					<li><a href="?lang=nl">NL</a></li>
				</ul>
			</div>

			<input type="checkbox" id="nav-toggle" class="nav-toggle" tabindex="0"/>

			<label for="nav-toggle" class="hamburger-btn" tabindex="0">
				<span></span>
			</label>

			<aside class="sidepanel">
				<div class="sidepanel-inner">
					<div class="sidepanel-search">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="white" fill="none" stroke-width="1.5">
							<circle cx="9" cy="9" r="7" />
							<line x1="15" y1="15" x2="19" y2="19" />
						</svg>
						<input type="text" placeholder="Search . . ." />
					</div>

					<nav class="sidepanel-nav">
						<ul>
							<li><a href="#">Over ons</a></li>
							<li><a href="#"><strong>Bezoek en tickets</strong></a></li>
							<li><a href="#">Support de EFM</a></li>
							<li><a href="#">Agenda</a></li>
							<li class="submenu">
								<a href="#">Collectie</a>
								<svg class="submenu-caret caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
								<polyline points="4 6 9 12 14 6" />
								</svg>
							</li>
							<li><a href="#">Research</a></li>
							<li class="submenu">
								<a href="#">Academy</a>
									<svg class="submenu-caret caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
								<polyline points="4 6 9 12 14 6" />
								</svg>
							</li>
						</ul>
					</nav>

					<div class="sidepanel-footer">
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

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: clamp(0.5rem, 3vw, 2.5rem);
		padding-block: 0.75rem;
		transition: all 0.2s ease-in-out;
	}

	.header-logo {
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

	.header-center {
		flex: 2;
		display: none;
		justify-content: center;
	}

	.nav-pages {
		display: flex;
		gap: clamp(10px, 4vw, 60px);
		list-style: none;
	}

	.nav-item a {
		color: white;
		text-decoration: none;
	}

	.nav-item {
		font-size: 14px;
		display: block;
		padding-bottom: 0.2rem;
		position: relative;
		text-wrap: nowrap;
		@media (min-width: 1200px) {
			font-size: 16px;
		}
	}

	.nav-item::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-color: white;
		transition: width 0.3s ease-out;
	}

	.nav-item:hover::before {
		width: 100%;
	}

	.header-right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1.75rem;
	}

	.lang,
	.lang-label,
	.lang-menu,
	.lang-menu li,
	.hamburger-button {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	.lang-toggle {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	.lang {
		position: relative;
		cursor: pointer;
	}

	.lang-label {
		display: flex;
		align-items: center;
		gap: .3rem;
	}

	.lang-label:hover span,	
	.lang-label:hover .caret { opacity: .7; }

	.lang-menu {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: .5rem;
		background: #0b0c0e;
		padding: .5rem 0;
		display: none;
	}

	.lang-menu li {
		list-style: none;
	}

	.lang-menu a {
		display: block;
		padding: .5rem 1rem;
		color: white;
		text-decoration: none;
		font-size: .9rem;
	}

	.lang-menu a:hover {
		background: rgba(255,255,255,.1);
	}

	.lang-toggle:checked + .lang-label + .lang-menu {
		display: block;
	}

	.caret {
    display: inline-block;
    transition: transform 0.3s ease;
    transform-origin: center;
    font-size: 1.2rem;
    opacity: 0.8;
    cursor: pointer;
	}

	.caret--rotate {
			transform: rotate(180deg);
	}
	
	.lang-toggle:checked + .lang-label .lang-caret {
		transform: rotate(180deg);
	}

	.nav-toggle {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	/* ---------- HAMBURGER BUTTON ---------- */

	.hamburger-btn {
			width: 32px;
			height: 28px;           
			display: flex;
			align-items: center;   
			justify-content: center;
			cursor: pointer;
			position: relative;
			z-index: 102;
	}

	.hamburger-btn span {
			position: relative;
			width: 100%;
			height: 2px;
			background: white;
			transition: all 0.35s ease;
	}

	.hamburger-btn span::before,
	.hamburger-btn span::after {
			content: "";
			position: absolute;
			left: 0;
			width: 100%;
			height: 1.5px;
			background: white;
			transition: all 0.35s ease;
	}

	/* TOP LINE */
	.hamburger-btn span::before {
			top: -9px; 
	}

	/* BOTTOM LINE */
	.hamburger-btn span::after {
			top: 10px;
	}

	/* ---------- ANIMATION TO "X" ---------- */

	.nav-toggle:checked + .hamburger-btn span {
			background: transparent;
	}

	.nav-toggle:checked + .hamburger-btn span::before {
			transform: rotate(45deg);
			top: 0;
	}

	.nav-toggle:checked + .hamburger-btn span::after {
			transform: rotate(-45deg);
			top: 0;
	}

	/* ---------- SIDEPANEL ---------- */

	.sidepanel {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
		overflow-y: hidden;
		background: #0b0c0e;
		filter: drop-shadow(-6px 1px 20px #141414cc);
		transform: translateX(120%);
		opacity: 0; 
		transition: transform 0.4s ease-out, opacity 0.4s ease-in;
		z-index: 100;
		pointer-events: none;
	}

	.nav-toggle:checked ~ .sidepanel {
		transform: translateX(0%);
    opacity: 1;                
    pointer-events: auto;
	}

	.sidepanel-inner {
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 5rem 2rem 2rem;
		opacity: 0; 
		transition: opacity 0.7s ease-in;
		color: white;
		overflow-y: hidden;
	}

	.nav-toggle:checked ~ .sidepanel .sidepanel-inner {
			opacity: 1;
	}

	/* Search */
	.sidepanel-search {
		display: flex;
		align-items: center;
		width: 60%;
		gap: 0.75rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid rgba(255,255,255,0.3);
		padding-bottom: .5rem;
	}

	.sidepanel-search input {
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		color: white;
		font-size: 1rem;
	}

	/* Menu */
	.sidepanel-nav ul {
		overflow-y: hidden;
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.sidepanel-nav a {
		color: white;
		text-decoration: none;
		font-size: 16px;
	}

	.submenu {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* Caret */
	.submenu-caret {
		opacity: 0.7;
		font-size: 1.2rem;
		cursor: pointer;
		user-select: none;
	}

	/* Footer */
	.sidepanel-footer {
		color: #bbbbbb;
		position: sticky;
		bottom: 0;
		text-align: right;
		padding-top: 10rem;
		padding-bottom: 2rem;
	}

	@media (min-width: 650px) {
		.sidepanel {
			width: min(400px, 85vw);
		}
	}

	@media (min-width: 900px) {
		.header-center {
			display: flex;
		}
	}

	@media (min-width: 1000px) {
		.nav-list {
			display: flex;
			margin: 0;
			margin-block-end: 0;
		}
	}
</style>
