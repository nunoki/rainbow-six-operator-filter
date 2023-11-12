<script lang="ts">
	import { operators } from "../operators"
	import type { filterParams, operator } from "../types"
	import { NONE, SIDE } from "../types"
	import IconExternalLink from "../util/IconExternalLink.svelte"

	export let filters: filterParams

	$: filteredOps = filter(filters)

	function filter(filters: filterParams): operator[] {
		let output = operators
		if (filters.side !== NONE) {
			output = output.filter((op) => op.side === filters.side)
		}
		return output
	}
</script>

<pre>{JSON.stringify(filters)}</pre>

<div class="operator-list">
	{#each filteredOps as op}
		<a
			class="operator"
			href={"https://www.ubisoft.com" + op.uri}
			target="_blank"
			rel="noopener"
		>
			<div class="card">
				<div class="inner">
					<img
						class="pic"
						src={op.pic}
						alt={op.name}
					/>
					<span class="name">{op.name}</span>
				</div>
			</div>

			<div class="icon-external-link">
				<IconExternalLink />
			</div>
		</a>
	{/each}

	{#each Array(8) as _}
		<span class="operator" />
	{/each}
</div>

<style lang="sass">
	.operator-list
		display: flex
		gap: 10px
		justify-content: center
		flex-wrap: wrap

		.operator
			position: relative
			flex: 1 1 calc(12.5% - 5px)
			text-decoration: none

			.card
				position: relative
				background-color: rgba(255,255,255,.15)

				.inner
					display: flex
					flex-direction: column

					.pic
						width: 100%
						flex: 1

					.name
						padding: .25rem
						text-transform: uppercase
						text-align: center
						font-family: R6S-RegItalic,sans-serif
						font-size: 26px
						color: #24262a
						background-color: #c3c3c3

			.icon-external-link
				opacity: 0
				position: absolute
				top: 1rem
				right: 1rem
				fill: white
				width: 2rem

			&:hover
				outline: 1px solid white

				.icon-external-link
					opacity: 1
</style>
