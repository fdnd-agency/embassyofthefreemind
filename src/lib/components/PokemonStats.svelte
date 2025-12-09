<script>
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
	.stat-row {
		container-name: stat-row;
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-bottom: 0.6rem;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.8);
		font-family: 'Courier New', monospace;
		letter-spacing: 1px;

		@property --stat {
			syntax: '<number>';
			inherits: true;
			initial-value: 0;
		}
	}

	.label {
		width: 30%;
		text-align: right;
		font-size: 0.7rem;
		text-transform: uppercase;
		color: #a5f3fc;
	}

	.number {
		width: 30px;
		text-align: right;
		font-weight: bold;
		color: #fff;
	}

	.bar-track {
		flex: 1;
		background: rgba(255, 255, 255, 0.1);
		height: 6px;
		border-radius: 2px;
		overflow: hidden;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
	}

	.bar-fill {
		height: 100%;
		width: calc((var(--stat) / 255) * 100%);
		transition:
			width 1s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.4s;

		background-color: #555;
	}

	@container stat-row style(--stat < 50) {
		.bar-fill {
			background-color: #ef4444;
			box-shadow: 0 0 5px #ef4444;
		}
	}

	@container stat-row style(--stat >= 50) and style(--stat < 90) {
		.bar-fill {
			background-color: #00f0ff;
			box-shadow: 0 0 8px #00f0ffaa;
		}
	}

	@container stat-row style(--stat >= 90) and style(--stat < 120) {
		.bar-fill {
			background-color: #bd00ff;
			box-shadow: 0 0 12px #bd00ff;
		}
	}

	@container stat-row style(--stat >= 120) {
		.bar-fill {
			background: linear-gradient(90deg, #bd00ff, #fff);
			box-shadow:
				0 0 15px #ffffff,
				0 0 30px #bd00ff;
		}
	}
</style>
