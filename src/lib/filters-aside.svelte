<div class="big-screen-only">
<aside>
    <span>Filters</span>
    <ul>
        <li>
            <details>
                <summary>Digitalised</summary>
                <p>WIP: Digitalised filter</p>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <p>WIP: Year filter</p>
            </details>
        </li>
        <li>
           <details>
                <summary>Author</summary>
                <p>WIP: Author filter</p>
           </details> 
        </li>
        <li>
            <details>
                <summary>Place of publication</summary>
                <p>WIP: Place filter</p>
            </details>
        </li>
    </ul>
</aside>
</div>

<style>
    aside {
        width: 15em;
        height: auto;
        background-color: var(--tertiaryBackgroundColor);
        padding: 1em;
    }

    li, ul {
        padding: 5px;
    }

    summary, span {
        color: var(--primaryColor);
        font-weight: var(--fontWeightBold);
        padding: 5px;
    }

    summary {
        border-top: var(--borderSoft);
    }

    p {
        padding: 5px;
    }

    @media only screen and (max-width: 800px) {
		.big-screen-only {
			display: none;
		}
	}
</style>