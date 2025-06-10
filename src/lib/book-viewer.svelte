<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { derived } from "svelte/store";

	export let images = [];
	export let title;
	export let queryKey = "index"; // unique per book: boek0, boek1, etc.

	let currentIndex = 3;
	let jsEnabled = false;

	// Get current index from URL (for no-JS or first load)
	const indexStore = derived(page, ($page) => {
		const i = parseInt($page.url.searchParams.get(queryKey));
		return isNaN(i) ? 3 : Math.max(0, Math.min(images.length - 1, i));
	});

	// Update currentIndex only when JS is not enabled (initially)
	$: if (!jsEnabled) {
		indexStore.subscribe((i) => (currentIndex = i));
	}

	onMount(() => {
		jsEnabled = true;
	});

	function previous() {
		if (currentIndex > 0) currentIndex--;
	}

	function next() {
		if (currentIndex < images.length - 1) currentIndex++;
	}
</script>

{#if images && images.length > 0}
	<div class="book-viewer">
		<div class="image-container">
			{#if jsEnabled}
				<!-- JS version -->
				<button
					class="left"
					on:click={previous}
					disabled={currentIndex === 0}
				>
					&larr;
				</button>

				{#key currentIndex}
					<img src={images[currentIndex]?.small} alt="pagina" />
				{/key}

				<button
					class="right"
					on:click={next}
					disabled={currentIndex === images.length - 1}
				>
					&rarr;
				</button>
			{:else}
				<!-- No-JS fallback (URL-based) -->
				<form method="GET" class="left">
					<input
						type="hidden"
						name={queryKey}
						value={currentIndex - 1}
					/>
					<button type="submit" disabled={currentIndex === 0}>
						&larr;
					</button>
				</form>

				<img src={images[currentIndex]?.small} alt="pagina" />

				<form method="GET" class="right">
					<input
						type="hidden"
						name={queryKey}
						value={currentIndex + 1}
					/>
					<button
						type="submit"
						disabled={currentIndex === images.length - 1}
					>
						&rarr;
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}

<style>
	.book-viewer {
		position: relative;
		width: fit-content;
	}

	.image-container {
		position: relative;
		display: inline-block;
	}

	.image-container img {
		max-height: 20vw;
		width: 20vw;
		display: block;
	}

	.image-container button,
	.image-container form {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}

	.image-container form.left,
	.image-container button.left {
		left: 0.3rem;
	}


	.image-container button.right {
		right: 0.3rem;
	}

	.image-container form.right{
		right: 2.2rem;
	}

	.image-container button {
		background-color: var(--primaryColor);
		color: white;
		padding: 0.4rem;
		cursor: pointer;
	}

	.image-container button:hover{
		opacity: 0.8;
	}

	.image-container button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
