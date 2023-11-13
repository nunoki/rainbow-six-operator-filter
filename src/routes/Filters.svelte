<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import type { radioOption, filterParams } from "../types"
	import { SIDE, GUN_TYPE, GADGET, SCOPE, NONE } from "../types"
	import Radio from "../util/Radio.svelte"

	const sides: radioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "Defender", value: SIDE.defender },
		{ label: "Attacker", value: SIDE.attacker },
	]
	const gunTypes: radioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "Rifle", value: GUN_TYPE.rifle },
		{ label: "SMG", value: GUN_TYPE.smg },
		{ label: "DMR", value: GUN_TYPE.dmr },
		{ label: "LMG", value: GUN_TYPE.lmg },
		{ label: "Shotgun", value: GUN_TYPE.shotgun },
		{ label: "Pistol", value: GUN_TYPE.pistol },
		{ label: "Machine pistol", value: GUN_TYPE.mpistol },
		{ label: "Gonne-6", value: GUN_TYPE.gonne6 },
		{ label: "Shield", value: GUN_TYPE.shield },
	]
	const gadgets: { [name: string]: radioOption[] } = {
		defense: [
			{ label: "impact", value: GADGET.impact },
			{ label: "bpcamera", value: GADGET.bpcamera },
			{ label: "obsblocker", value: GADGET.obsblocker },
			{ label: "dshield", value: GADGET.dshield },
			{ label: "barbwire", value: GADGET.barbwire },
		],
		attack: [
			{ label: "grenade", value: GADGET.grenade },
			{ label: "smoke", value: GADGET.smoke },
			{ label: "stun", value: GADGET.stun },
			{ label: "claymore", value: GADGET.claymore },
			{ label: "sbreach", value: GADGET.sbreach },
			{ label: "hbreach", value: GADGET.hbreach },
		],
		common: [{ label: "Any", value: NONE }],
	}
	const scopes: radioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "1.0x", value: SCOPE.s1_0 },
		{ label: "1.5x", value: SCOPE.s1_5 },
		{ label: "2.0x", value: SCOPE.s2_0 },
		{ label: "2.5x", value: SCOPE.s2_5 },
	]

	const dispatch = createEventDispatcher<{ filtered: filterParams }>()

	let side: SIDE
	let gunTypePrimary: GUN_TYPE
	let gunTypeSecondary: GUN_TYPE
	let gadget: GADGET
	let scope: SCOPE

	$: availableGadgets =
		side === SIDE.attacker
			? gadgets.common.concat(gadgets.attack)
			: side === SIDE.defender
			? gadgets.common.concat(gadgets.defense)
			: gadgets.common.concat(gadgets.attack.concat(gadgets.defense))
	$: dispatch("filtered", {
		side,
		gunTypePrimary,
		gunTypeSecondary,
		gadget,
		scope,
	})
</script>

<div class="filterParams">
	<div class="filter">
		Side: <Radio
			name="side"
			options={sides}
			bind:selected={side}
		/>
	</div>

	<div class="filter">
		Primary gun: <Radio
			name="primary_gun"
			options={gunTypes}
			bind:selected={gunTypePrimary}
		/>
	</div>

	<div class="filter">
		Scope (primary gun): <Radio
			name="scope"
			options={scopes}
			bind:selected={scope}
		/>
	</div>

	<div class="filter">
		Secondary gun: <Radio
			name="secondary_gun"
			options={gunTypes}
			bind:selected={gunTypeSecondary}
		/>
	</div>

	<div class="filter">
		Gadget: <Radio
			name="gadget"
			options={availableGadgets}
			bind:selected={gadget}
		/>
	</div>
</div>

<style lang="sass">
	.filterParams
		margin: 1rem 0
</style>
