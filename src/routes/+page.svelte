<script lang="ts">
	import type { FilterParams, Operator } from "$lib/data/types"
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
	<OperatorShowcase
		operator={selectedOp}
		on:close={onOperatorClosed}
	/>
{/if}
