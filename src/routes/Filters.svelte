<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import type { RadioOption, FilterParams } from "$lib/data/types"
	import { SIDE, GUN_TYPE, GADGET, SCOPE, NONE, SPEED, ROLE } from "$lib/data/types"
	import Radio from "$lib/components/Radio.svelte"

	const sides: RadioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "Defender", value: SIDE.defense },
		{ label: "Attacker", value: SIDE.attack },
	]
	const gunTypes: { [name: string]: RadioOption[] } = {
		primary: [
			{ label: "Any", value: NONE },
			{ label: "Assault rifle", value: GUN_TYPE.rifle },
			{ label: "Submachine gun", value: GUN_TYPE.smg },
			{ label: "Marksman rifle", value: GUN_TYPE.dmr },
			{ label: "Light machine gun", value: GUN_TYPE.lmg },
			{ label: "Shotgun", value: GUN_TYPE.shotgun },
			{ label: "Shield", value: GUN_TYPE.shield },
		],
		secondary: [
			{ label: "Any", value: NONE },
			{ label: "Submachine gun", value: GUN_TYPE.smg },
			{ label: "Shotgun", value: GUN_TYPE.shotgun },
			{ label: "Pistol", value: GUN_TYPE.pistol },
			{ label: "Bailiff", value: GUN_TYPE.bailiff },
			{ label: "Machine pistol", value: GUN_TYPE.mpistol },
			{ label: "Gonne-6", value: GUN_TYPE.gonne6 },
		],
	}
	const gadgets: { [name: string]: RadioOption[] } = {
		defense: [
			{ label: "Impact grenade", value: GADGET.impact },
			{ label: "Bulletproof camera", value: GADGET.bpcamera },
			{ label: "Observation blocker", value: GADGET.obsblocker },
			{ label: "Deployable shield", value: GADGET.dshield },
			{ label: "Barbed wire", value: GADGET.barbwire },
			{ label: "Proximity alarm", value: GADGET.proxalarm },
			{ label: "Nitro cell", value: GADGET.nitro },
		],
		attack: [
			{ label: "Frag grenade", value: GADGET.grenade },
			{ label: "Smoke grenade", value: GADGET.smoke },
			{ label: "Stun grenade", value: GADGET.stun },
			{ label: "Claymore", value: GADGET.claymore },
			{ label: "Breach charge", value: GADGET.sbreach },
			{ label: "Hard breach charge", value: GADGET.hbreach },
			{ label: "Impact EMP grenade", value: GADGET.emp },
		],
		common: [{ label: "Any", value: NONE }],
	}
	const scopes: RadioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "1.0x", value: SCOPE.s1_0 },
		{ label: "1.5x", value: SCOPE.s1_5 },
		{ label: "2.0x", value: SCOPE.s2_0 },
		{ label: "2.5x", value: SCOPE.s2_5 },
		{ label: "> 2.5x", value: SCOPE.s2_5plus },
	]
	const speeds: RadioOption[] = [
		{ label: "Any", value: NONE },
		{ label: "1-speed", value: SPEED.s1, secondaryLabel: "3-armor" },
		{ label: "2-speed", value: SPEED.s2, secondaryLabel: "2-armor" },
		{ label: "3-speed", value: SPEED.s3, secondaryLabel: "1-armor" },
	]
	const roles: { [name: string]: RadioOption[] } = {
		defense: [
			{ label: "Anti-entry", value: ROLE.antientry },
			{ label: "Trapping", value: ROLE.trapping },
			{ label: "Crowd control", value: ROLE.crowdcontrol },
		],
		attack: [
			{ label: "Breaching", value: ROLE.breaching },
			{ label: "Frontline", value: ROLE.frontline },
			{ label: "Map control", value: ROLE.mapcontrol },
		],
		common: [
			{ label: "Any", value: NONE },
			{ label: "Anti-gadget", value: ROLE.antigadget },
			{ label: "Intel", value: ROLE.intel },
			{ label: "Support", value: ROLE.support },
		],
	}

	const dispatch = createEventDispatcher<{ filtered: FilterParams }>()

	let side: SIDE
	let gunTypePrimary: GUN_TYPE
	let gunTypeSecondary: GUN_TYPE
	let gadget: GADGET
	let scope: SCOPE
	let speed: SPEED
	let role: ROLE

	let availableGadgets: RadioOption[] = []
	let availableRoles: RadioOption[] = []
	$: {
		// disable selection of attacker gadgets on defense and vice-versa
		gadgets.attack.map((g) => (g.disabled = side === SIDE.defense))
		gadgets.defense.map((g) => (g.disabled = side === SIDE.attack))
		availableGadgets = gadgets.common.concat(gadgets.attack.concat(gadgets.defense))

		// after selecting a defender gadget and then switching side to attack (or vice-versa),
		// reset selection
		if (
			(side === SIDE.attack && gadgets.defense.find((g) => gadget === g.value)) ||
			(side === SIDE.defense && gadgets.attack.find((g) => gadget === g.value))
		) {
			gadget = gadgets.common[0].value
		}

		// disable selection of attacker roles on defense and vice-versa
		roles.attack.map((s) => (s.disabled = side === SIDE.defense))
		roles.defense.map((s) => (s.disabled = side === SIDE.attack))
		availableRoles = roles.common.concat(roles.attack.concat(roles.defense))

		// after selecting a defender role and then switching side to attack (or vice-versa),
		// reset selection
		if (
			(side === SIDE.attack && roles.defense.find((g) => role === g.value)) ||
			(side === SIDE.defense && roles.attack.find((g) => role === g.value))
		) {
			role = roles.common[0].value
		}
	}

	$: dispatch("filtered", {
		side,
		gunTypePrimary,
		gunTypeSecondary,
		gadget,
		scope,
		speed,
		role,
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
		<div class="label">Role</div>
		<div class="options">
			<Radio
				name="role"
				options={availableRoles}
				bind:selected={role}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Primary gun</div>
		<div class="options">
			<Radio
				name="primary_gun"
				options={gunTypes.primary}
				bind:selected={gunTypePrimary}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Secondary gun</div>
		<div class="options">
			<Radio
				name="secondary_gun"
				options={gunTypes.secondary}
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

	<div class="filter">
		<div class="label">Scope</div>
		<div class="options">
			<Radio
				name="scope"
				options={scopes}
				bind:selected={scope}
			/>
		</div>
		<p class="note">
			Note that the scope filter is not linked to the gun filter, meaning that the selected scope
			will not necessarily be on the selected gun (if any)
		</p>
	</div>
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	.filters
		display: flex
		gap: .5rem
		width: 100%
		overflow-x: auto
		margin: 1rem 0

	.filter
		flex: 1 0 7rem

		.label
			display: flex
			gap: .5rem
			align-items: center

			margin-bottom: .5rem
			font-weight: normal
			font-family: $font_ubi
			font-size: 26px
			text-transform: uppercase
			flex: 1 0 9rem
			padding-right: .5rem

			&::after
				flex: 1
				content: " "
				height: 1px
				background-color: $color_fg
				opacity: .25

		.options
			flex: 100 1 50%

	.note
		font-size: .9em
		opacity: .5
		font-style: italic
		font-family: serif
</style>
