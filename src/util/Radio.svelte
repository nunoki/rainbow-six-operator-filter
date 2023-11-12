<script lang="ts">
	import { onMount } from "svelte"

	export let options: any[]
	export let name: string
	export let selected = options ? options[0].value : null

	$: if (options && selected === null) selected = options[0].value
</script>

{#if options}
	{#each options as opt}
		<label>
			<input
				type="radio"
				{name}
				value={opt.value}
				bind:group={selected}
			/>
			{opt.label}
		</label>
	{/each}
{/if}
