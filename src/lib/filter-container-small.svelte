<div class="small-screen-only">
    <div>
        <p class="summary">Filters</p>
        <ul class="filters-small">
            <li>
                <label for="todo" class="btn">Digitized</label>
            </li>
            <li>
                <label for="todo" class="btn">Year</label>
            </li>
            <li>
                <label for="todo" class="btn">Author</label>
            </li>
            <li>
                <label for="todo" class="btn">Place</label>
            </li>
        </ul>
    </div>
</div>

<style>
    .small-screen-only {
		display: none;
	}
	.filters-small {
		display: flex;
		gap: 1em;
		max-width: 90vw;
		overflow-x: auto;
	}
    @media only screen and (max-width: 800px) {
		.small-screen-only {
			display: initial;
            display: flex;
            flex-direction: column;
            gap: 1.5em;
		}
    }
</style>