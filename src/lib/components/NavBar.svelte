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
			<div class="lang" on:click|stopPropagation>
				<button
					class="lang-btn"
					aria-expanded={isLangOpen}
					aria-controls="lang-menu"
					on:click={toggleLang}
				>
					<span>EN</span>
					<svg class="lang-caret caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
						<polyline points="4 6 9 12 14 6" />
					</svg>
        </button>

				<ul id="lang-menu" class="lang-menu" hidden={!isLangOpen}>
					<li><a href="?lang=en">EN</a></li>
					<li><a href="?lang=nl">NL</a></li>
				</ul>
			</div>

			<button
				class="hamburger-btn"
				aria-expanded={isSidepanelOpen}
				aria-controls="sidepanel"
				on:click|stopPropagation={toggleSidepanel}
			>
				<span></span>
			</button>

			<aside
				id="sidepanel"
				class="sidepanel"
				class:open={isSidepanelOpen}
				hidden={!isSidepanelOpen}
				on:click|stopPropagation
			>
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
