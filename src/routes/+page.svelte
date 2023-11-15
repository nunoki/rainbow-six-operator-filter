<script lang="ts">
	import type { filterParams } from "$lib/data/types"
	import Filters from "./Filters.svelte"
	import OperatorList from "./OperatorList.svelte"

	let filters: filterParams = {} as filterParams
	function onFiltersChanged(event: { detail: filterParams }) {
		filters = event.detail
	}
</script>

<Filters on:filtered={onFiltersChanged} />
<OperatorList {filters} />
