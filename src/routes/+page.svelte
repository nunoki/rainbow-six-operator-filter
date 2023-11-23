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
		<OperatorShowcase
			operator={selectedOp}
			on:close={onOperatorClosed}
		/>

		<button
			on:click={() => onOperatorClosed()}
			class="close-button"
		>
			<span>&rsaquo;</span>
		</button>
	</div>
{/if}

<style lang="sass">
	@import "$lib/sass/variables"

	$_close_button_width: 5rem
	$_close_button_color_bg: darken($color_bg, 5%)

	.operator-showcase
		position: fixed
		z-index: 10
		top: 0
		right: 0
		padding: 1.5rem
		width: calc(100vw - $_close_button_width)
		max-width: 40rem
		height: 100vh
		background-color: darken($color_bg, 2%)

		.close-button
			display: flex
			justify-content: center
			align-items: center

			position: absolute
			top: 0
			left: -$_close_button_width
			width: $_close_button_width
			height: 100%
			background-color: $_close_button_color_bg
			border: none
			cursor: pointer

			> span
				color: white
				font-size: $_close_button_width * 1.5
				transform: scaleY(2)

			&:hover
				background-color: #aaa

				> span
					color: lighten($_close_button_color_bg, 5%)
</style>
