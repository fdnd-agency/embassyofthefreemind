<script>
	// Svelte 5 Runes for props
	let { stats } = $props();
</script>

<div class="stats-card">
	{#each stats as stat}
		<div class="stat-row" style:--stat={stat.base_stat}>
			<span class="label">{stat.stat.name}</span>

			<div class="bar-track">
				<div class="bar-fill"></div>
			</div>

			<span class="number">{stat.base_stat}</span>
		</div>
	{/each}
</div>

<style>
	/* 1. Define the Container & Variable Type */
	.stat-row {
		container-name: stat-row;
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;

		@property --stat {
			syntax: '<number>';
			inherits: true;
			initial-value: 0;
		}
	}

	/* 2. Base Bar Styles */
	.bar-track {
		flex: 1;
		background: #eee;
		height: 10px;
		border-radius: 5px;
		overflow: hidden;
	}

	.bar-fill {
		height: 100%;
		/* Math logic handled in CSS */
		width: calc((var(--stat) / 255) * 100%);
		transition:
			width 0.4s ease,
			background-color 0.4s;
		background-color: #ccc; /* Default */
	}

	/* 3. The Logic (Range Queries) */
	/* Note: Scoped styles work perfectly here */

	@container stat-row style(--stat < 50) {
		.bar-fill {
			background-color: #ef4444;
		} /* Red */
	}

	@container stat-row style(--stat >= 50) and style(--stat < 100) {
		.bar-fill {
			background-color: #eab308;
		} /* Yellow */
	}

	@container stat-row style(--stat >= 100) {
		.bar-fill {
			background-color: #22c55e;
		} /* Green */
		/* Add a glow for high stats */
		.bar-fill {
			box-shadow: 0 0 8px #22c55e88;
		}
	}
</style>
