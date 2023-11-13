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
		{ label: "Assault rifle", value: GUN_TYPE.rifle },
		{ label: "Submachine gun", value: GUN_TYPE.smg },
		{ label: "Marksman rifle", value: GUN_TYPE.dmr },
		{ label: "Light machine gun", value: GUN_TYPE.lmg },
		{ label: "Shotgun", value: GUN_TYPE.shotgun },
		{ label: "Pistol", value: GUN_TYPE.pistol },
		{ label: "Machine pistol", value: GUN_TYPE.mpistol },
		{ label: "Gonne-6", value: GUN_TYPE.gonne6 },
		{ label: "Shield", value: GUN_TYPE.shield },
	]
	const gadgets: { [name: string]: radioOption[] } = {
		defense: [
			{ label: "Impact grenade", value: GADGET.impact },
			{ label: "Bulletproof camera", value: GADGET.bpcamera },
			{ label: "Observation blocker", value: GADGET.obsblocker },
			{ label: "Deployable shield", value: GADGET.dshield },
			{ label: "Barbed wire", value: GADGET.barbwire },
		],
		attack: [
			{ label: "Frag grenade", value: GADGET.grenade },
			{ label: "Smoke grenade", value: GADGET.smoke },
			{ label: "Stun grenade", value: GADGET.stun },
			{ label: "Claymore", value: GADGET.claymore },
			{ label: "Breach charge", value: GADGET.sbreach },
			{ label: "Hard breach charge", value: GADGET.hbreach },
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

<div class="filters">
	<div class="filter">
		<div class="label">Side</div>
		<div class="options">
			<Radio
				name="side"
				options={sides}
				bind:selected={side}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Speed</div>
		<div class="options">
			<Radio
				name="speed"
				options={speeds}
				bind:selected={speed}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Primary gun</div>
		<div class="options">
			<Radio
				name="primary_gun"
				options={gunTypes}
				bind:selected={gunTypePrimary}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Scope</div>
		<div class="options">
			<Radio
				name="scope"
				options={scopes}
				bind:selected={scope}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Secondary gun</div>
		<div class="options">
			<Radio
				name="secondary_gun"
				options={gunTypes}
				bind:selected={gunTypeSecondary}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Gadget</div>
		<div class="options">
			<Radio
				name="gadget"
				options={availableGadgets}
				bind:selected={gadget}
			/>
		</div>
	</div>
</div>

<style lang="sass">
	.filters
		margin: 1rem 0

	.filter
		display: flex
		padding: .5rem 0

		.label
			display: flex
			gap: .5rem
			align-items: center

			margin-bottom: .5rem
			font-weight: normal
			font-family: R6S-RegItalic
			font-size: 26px
			text-transform: uppercase
			flex: 1 0 9rem
			padding-right: 1rem

			&::after
				flex: 1
				content: " "
				height: 1px
				background-color: rgba(255,255,255,.25)

		.options
			flex: 100 1 50%
</style>
