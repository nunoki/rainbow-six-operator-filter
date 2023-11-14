<script lang="ts">
	import { operators } from "../operators"
	import type { filterParams, operator } from "../types"
	import { NONE, SIDE } from "../types"
	import IconExternalLink from "../util/IconExternalLink.svelte"

	export let filters: filterParams = {} as filterParams

	$: filteredOps = filter(filters)

	function filter(filters: filterParams): operator[] {
		let output = operators
		if (filters.side && filters.side !== NONE) {
			output = output.filter((op) => op.side === filters.side)
		}
		if (filters.gunTypePrimary && filters.gunTypePrimary !== NONE) {
			output = output.filter((op) => op.gunsPrimary.includes(filters.gunTypePrimary))
		}
		if (filters.gunTypeSecondary && filters.gunTypeSecondary !== NONE) {
			output = output.filter((op) => op.gunsSecondary.includes(filters.gunTypeSecondary))
		}
		if (filters.gadget && filters.gadget !== NONE) {
			output = output.filter((op) => op.gadgets.includes(filters.gadget))
		}
		if (filters.scope && filters.scope !== NONE) {
			output = output.filter((op) => op.maxScope >= filters.scope)
		}
		if (filters.speed && filters.speed !== NONE) {
			output = output.filter((op) => op.speed === filters.speed)
		}
		if (filters.specialty && filters.specialty !== NONE) {
			output = output.filter((op) => op.specialties.includes(filters.specialty))
		}
		return output
	}
</script>

<div class="operator-list">
	{#if filteredOps.length > 0}
		{#each filteredOps as op}
			<div class="operator">
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

				<a
					href={"https://www.ubisoft.com" + op.uri}
					target="_blank"
					rel="noopener"
					class="link link--ubisoft"
				>
					ubisoft.com <IconExternalLink />
				</a>
				<a
					href={`https://rainbowsix.fandom.com/wiki/${op.name}`}
					target="_blank"
					rel="noopener"
					class="link link--fandom"
				>
					fandom.com <IconExternalLink />
				</a>

				{#if op.note}
					<div
						class="icon-note"
						title={op.note}
					>
						*
					</div>
				{/if}
			</div>
		{/each}

		{#each Array(8) as _}
			<span class="operator" />
		{/each}
	{:else}
		<div class="no-results">
			<div class="emote">¯\_(ツ)_/¯</div>
			<p class="message">No results for selected filters</p>
		</div>
	{/if}
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

			.link
				opacity: 0
				position: absolute
				padding: .25rem
				right: 10%
				width: 80%
				text-align: center
				white-space: nowrap
				text-decoration: none
				fill: purple
				color: purple
				background-color: white

				&.link--ubisoft
					top: 1rem

				&.link--fandom
					top: 3.5rem

				&:hover
					color: white
					fill: white
					background-color: purple

				&:active
					background-color: black

			.icon-note
				position: absolute
				z-index: 2
				bottom: 1rem
				right: 1rem
				font-size: 3rem
				font-weight: bold
				color: red
				cursor: help

			&:hover
				outline: 2px solid white

				.link
					opacity: 1

		.no-results
			padding: 4rem 0
			text-align: center
			color: cyan

			.emote
				font-size: 4rem

			.message
				font-weight: bold
				font-size: 2rem
</style>
