<script lang="ts">
	import type { Operator } from "$lib/data/types"
	import { createEventDispatcher } from "svelte"

	export let operator: Operator

	// import { SIDE, type Operator, type Link } from "$lib/data/types"

	// function generateLinks(op: Operator): Link[] {
	// 	let links: Link[] = []

	// 	if (op.name !== "Recruit") {
	// 		links.push({
	// 			url: `https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/operators/${op.uri}`,
	// 			domain: "ubisoft.com",
	// 		})
	// 		links.push({
	// 			url: `https://r6siegecenter.com/guides/operators/${
	// 				op.side === SIDE.defense ? "defenders" : "attackers"
	// 			}/${op.uri}/`,
	// 			domain: "r6siegecenter.com",
	// 		})
	// 	}

	// 	links.push({
	// 		url: `https://rainbowsix.fandom.com/wiki/${op.name}`,
	// 		domain: "fandom.com",
	// 	})

	// 	return links
	// }

	const dispatch = createEventDispatcher()

	function close(): void {
		dispatch("close")
	}
</script>

<div class="operator-showcase">Hello, {operator.name}</div>
<button on:click={() => close()}>Close</button>

<style lang="sass">
//
</style>
