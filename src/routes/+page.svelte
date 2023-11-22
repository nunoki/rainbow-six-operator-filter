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
	</div>
{/if}

<style lang="sass">
	@import "$lib/sass/variables"

	.operator-showcase
		position: fixed
		z-index: 10
		top: 0
		right: 0
		width: 99vw
		width: calc(100vw - 3rem)
		height: 100vh
</style>
