<script lang="ts">
	import { base } from "$app/paths"
	import { createEventDispatcher } from "svelte"
	import { filter } from "$lib/util/filter"
	import { gunNotes } from "$lib/util/gun_notes"
	import type { FilterParams, Operator } from "$lib/data/types"

	export let filters: FilterParams = {} as FilterParams

	const dispatch = createEventDispatcher()

	$: filteredOps = filter(filters)

	function onOperatorClick(operator: Operator): void {
		dispatch("opselected", operator)
	}
</script>

<div class="operator-list">
	{#if filteredOps.length > 0}
		{#each filteredOps as op}
			<button
				class="operator"
				on:click={() => onOperatorClick(op)}
			>
				<div class="card">
					<div class="inner">
						<div
							class="pic"
							style="background-image: url({base}/operators/{op.uri}-pic.png)"
						/>
						<span class="name">{op.name}</span>
					</div>

					<img
						class="operator-icon"
						src="{base}/operators/{op.uri}-icon.png"
						alt=""
					/>
				</div>

				{#if gunNotes(op)}
					<div
						class="icon-note"
						title={gunNotes(op)?.join(", ")}
					>
						*
					</div>
				{/if}
			</button>
		{/each}

		{#each Array(8) as _}
			<span class="filler" />
		{/each}
	{:else}
		<div class="no-results">
			<div class="emote">¯\_(ツ)_/¯</div>
			<p class="message">No results for selected filters</p>
		</div>
	{/if}
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	.operator-list
		display: flex
		gap: 10px
		justify-content: center
		flex-wrap: wrap

		.operator,
		.filler
			position: relative
			flex: 1 1 calc(12.5% - 10px)
			text-decoration: none

		.operator
			margin: 0
			padding: 0
			border: none
			background: transparent
			cursor: pointer

			.card
				padding-bottom: 190%
				position: relative
				background-color: rgba(255,255,255,.15)

				.inner
					position: absolute
					top: 0
					left: 0
					width: 100%
					height: 100%
					display: flex
					flex-direction: column

					.pic
						background-size: cover
						background-position: center
						flex: 1

					.name
						padding: .25rem
						text-transform: uppercase
						text-align: center
						font-family: $font_ubi
						font-size: 26px
						color: #24262a
						background-color: #c3c3c3

				.operator-icon
					display: block
					position: absolute
					z-index: 1
					top: 55%
					right: auto
					left: 50%
					bottom: auto
					margin: 0 -25%
					width: 50%
					height: auto

			.icon-note
				position: absolute
				z-index: 2
				top: 0
				right: 0
				font-size: 3rem
				font-weight: bold
				color: red
				cursor: help

			&:hover
				outline: 2px solid $color_fg

		.no-results
			padding: 4rem 0
			text-align: center
			color: cyan

			.emote
				font-size: 4rem

			.message
				font-weight: bold
				font-size: 2rem

	@media (max-width: 900px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(20% - 10px)

	@media (max-width: 700px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(25% - 10px)

	@media (max-width: 500px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(33% - 10px)
</style>
