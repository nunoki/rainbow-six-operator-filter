<script lang="ts">
	import type { FilterParams } from "$lib/data/types"
	import Filters from "./Filters.svelte"
	import OperatorList from "./OperatorList.svelte"

	let filters: FilterParams = {} as FilterParams
	function onFiltersChanged(event: { detail: FilterParams }) {
		filters = event.detail
	}
</script>

<Filters on:filtered={onFiltersChanged} />
<OperatorList {filters} />
