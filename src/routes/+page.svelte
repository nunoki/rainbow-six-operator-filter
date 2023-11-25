<script lang="ts">
	import type { FilterParams, Operator } from "$lib/data/types"
	import { slide } from "svelte/transition"
	import Filters from "./Filters.svelte"
	import OperatorList from "./OperatorList.svelte"
	import OperatorShowcase from "./OperatorShowcase.svelte"

	let selectedOp: Operator | null = null

	let filters: FilterParams = {} as FilterParams
	function onFiltersChanged(event: { detail: FilterParams }): void {
		filters = event.detail
	}

	function onOperatorSelected(event: { detail: Operator }): void {
		if (event.detail === selectedOp) {
			selectedOp = null
			return
		}
		selectedOp = event.detail
	}

	function onOperatorClosed(): void {
		selectedOp = null
	}
</script>

<Filters on:filtered={onFiltersChanged} />
<OperatorList
	on:opselected={onOperatorSelected}
	{filters}
/>

{#if selectedOp}
	<div
		class="operator-showcase"
		transition:slide={{ duration: 300, axis: "x" }}
	>
		<div class="inner">
			<div class="close-bar">
				<button
					on:click={() => onOperatorClosed()}
					class="close-button"
				>
					&lsaquo; Back
				</button>
			</div>

			<OperatorShowcase
				operator={selectedOp}
				on:close={onOperatorClosed}
			/>
		</div>
	</div>
{/if}

<style lang="sass">
	@import "$lib/sass/variables"

	$_close_button_color_fg: $color_bg
	$_close_button_color_bg: $color_fg

	.operator-showcase
		position: fixed
		z-index: 10
		top: 0
		right: 0
		padding: 1.5rem
		width: calc(99vw)
		height: 100vh
		overflow-y: scroll
		background-color: darken($color_bg, 2%)

		> .inner
			margin: 0 auto
			max-width: 60rem

	.close-bar
		margin: 1rem 0 2rem

		.close-button
			padding: .5rem 2rem
			font-family: $font_ubi
			text-transform: uppercase
			font-size: 2rem

			color: $_close_button_color_fg
			background-color: $_close_button_color_bg
			border: none
			border-left: 10px solid darken($_close_button_color_bg, 20%)
			cursor: pointer

			&:hover
				background-color: darken($_close_button_color_bg, 20%)
				border-color: darken($_close_button_color_bg, 40%)
</style>
