<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import type { RadioOption, FilterParams } from "$lib/data/types"
	import { SIDE, GUN_TYPE, GADGET, SCOPE, NONE, SPEED, ROLE } from "$lib/data/types"
	import Radio from "$lib/components/Radio.svelte"
	import { filter } from "$lib/util/filter"

	const filterSections: { [name: string]: RadioOption[] } = {}

	filterSections.sides = [
		{ label: "Any", value: NONE },
		{ label: "Defender", value: SIDE.defense },
		{ label: "Attacker", value: SIDE.attack },
	]
	filterSections.gunTypesPrimary = [
		{ label: "Any", value: NONE },
		{ label: "Assault rifle", value: GUN_TYPE.rifle },
		{ label: "Submachine gun", value: GUN_TYPE.smg },
		{ label: "Marksman rifle", value: GUN_TYPE.dmr },
		{ label: "Light machine gun", value: GUN_TYPE.lmg },
		{ label: "Shotgun", value: GUN_TYPE.shotgun },
		{ label: "Shield", value: GUN_TYPE.shield },
	]
	filterSections.gunTypesSecondary = [
		{ label: "Any", value: NONE },
		{ label: "Gonne-6", value: GUN_TYPE.gonne6 },
		{ label: "Bailiff", value: GUN_TYPE.bailiff },
		{ label: "Submachine gun", value: GUN_TYPE.smg },
		{ label: "Shotgun", value: GUN_TYPE.shotgun },
		{ label: "Pistol", value: GUN_TYPE.pistol },
		{ label: "Machine pistol", value: GUN_TYPE.mpistol },
	]
	filterSections.gadgets = [
		{ label: "Any", value: NONE },
		{ label: "Impact grenade", value: GADGET.impact },
		{ label: "Bulletproof camera", value: GADGET.bpcamera },
		{ label: "Observation blocker", value: GADGET.obsblocker },
		{ label: "Deployable shield", value: GADGET.dshield },
		{ label: "Barbed wire", value: GADGET.barbwire },
		{ label: "Proximity alarm", value: GADGET.proxalarm },
		{ label: "Nitro cell", value: GADGET.nitro },
		{ label: "Frag grenade", value: GADGET.grenade },
		{ label: "Smoke grenade", value: GADGET.smoke },
		{ label: "Stun grenade", value: GADGET.stun },
		{ label: "Claymore", value: GADGET.claymore },
		{ label: "Breach charge", value: GADGET.sbreach },
		{ label: "Hard breach charge", value: GADGET.hbreach },
		{ label: "Impact EMP grenade", value: GADGET.emp },
	]
	filterSections.scopesPrimary = [
		{ label: "Any", value: NONE },
		{ label: "1.0x", value: SCOPE.s1_0 },
		{ label: "1.5x", value: SCOPE.s1_5 },
		{ label: "2.0x", value: SCOPE.s2_0 },
		{ label: "2.5x", value: SCOPE.s2_5 },
		{ label: "> 2.5x", value: SCOPE.s2_5plus },
	]
	filterSections.scopesSecondary = [
		{ label: "Any", value: NONE },
		{ label: "1.0x", value: SCOPE.s1_0 },
		{ label: "1.5x", value: SCOPE.s1_5 },
		{ label: "2.0x", value: SCOPE.s2_0 },
		{ label: "2.5x", value: SCOPE.s2_5 },
		{ label: "> 2.5x", value: SCOPE.s2_5plus },
	]
	filterSections.speeds = [
		{ label: "Any", value: NONE },
		{ label: "1-speed", value: SPEED.s1, secondaryLabel: "3-armor" },
		{ label: "2-speed", value: SPEED.s2, secondaryLabel: "2-armor" },
		{ label: "3-speed", value: SPEED.s3, secondaryLabel: "1-armor" },
	]
	filterSections.roles = [
		{ label: "Any", value: NONE },
		{ label: "Anti-entry", value: ROLE.antientry },
		{ label: "Trapping", value: ROLE.trapping },
		{ label: "Crowd control", value: ROLE.crowdcontrol },
		{ label: "Breaching", value: ROLE.breaching },
		{ label: "Frontline", value: ROLE.frontline },
		{ label: "Map control", value: ROLE.mapcontrol },
		{ label: "Anti-gadget", value: ROLE.antigadget },
		{ label: "Intel", value: ROLE.intel },
		{ label: "Support", value: ROLE.support },
	]

	const dispatch = createEventDispatcher<{ filtered: FilterParams }>()

	let side: SIDE
	let gunTypePrimary: GUN_TYPE
	let gunTypeSecondary: GUN_TYPE
	let gadget: GADGET
	let scopePrimaryGun: SCOPE
	let scopeSecondaryGun: SCOPE
	let speed: SPEED
	let role: ROLE

	let sections = [
		{ selectedProp: "speed", sectionProp: "speeds" },
		{ selectedProp: "role", sectionProp: "roles" },
		{ selectedProp: "scopePrimaryGun", sectionProp: "scopesPrimary" },
		{ selectedProp: "scopeSecondaryGun", sectionProp: "scopesSecondary" },
		{ selectedProp: "side", sectionProp: "sides" },
		{ selectedProp: "gadget", sectionProp: "gadgets" },
		{ selectedProp: "gunTypeSecondary", sectionProp: "gunTypesSecondary" },
		{ selectedProp: "gunTypePrimary", sectionProp: "gunTypesPrimary" },
	]

	$: {
		// do a test filtering for every selectable filter to see how many results it would yield,
		// and then update the badge of the corresponding options
		for (let s of sections) {
			for (let i in filterSections[s.sectionProp]) {
				let testFilters = Object.assign(
					{
						gadget,
						side,
						gunTypePrimary,
						gunTypeSecondary,
						speed,
						scopePrimaryGun,
						scopeSecondaryGun,
						role,
					},
					{ [s.selectedProp]: filterSections[s.sectionProp][i].value },
				)
				let results = filter(testFilters)
				filterSections[s.sectionProp][i].count = results.length
				filterSections[s.sectionProp][i].disabled = results.length === 0
			}
		}
	}

	$: dispatch("filtered", {
		side,
		gunTypePrimary,
		gunTypeSecondary,
		gadget,
		scopePrimaryGun,
		scopeSecondaryGun,
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
				options={filterSections.sides}
				bind:selected={side}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Speed</div>
		<div class="options">
			<Radio
				name="speed"
				options={filterSections.speeds}
				bind:selected={speed}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Role</div>
		<div class="options">
			<Radio
				name="role"
				options={filterSections.roles}
				bind:selected={role}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Primary gun</div>
		<div class="options">
			<Radio
				name="primary_gun"
				options={filterSections.gunTypesPrimary}
				bind:selected={gunTypePrimary}
			/>
		</div>

		<div class="label">Scope</div>
		<div class="options">
			<Radio
				name="scope_primary"
				options={filterSections.scopesPrimary}
				bind:selected={scopePrimaryGun}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Secondary gun</div>
		<div class="options">
			<Radio
				name="secondary_gun"
				options={filterSections.gunTypesSecondary}
				bind:selected={gunTypeSecondary}
			/>
		</div>

		<div class="label">Scope</div>
		<div class="options">
			<Radio
				name="scope_secondary"
				options={filterSections.scopesSecondary}
				bind:selected={scopeSecondaryGun}
			/>
		</div>
	</div>

	<div class="filter">
		<div class="label">Gadget</div>
		<div class="options">
			<Radio
				name="gadget"
				options={filterSections.gadgets}
				bind:selected={gadget}
			/>
		</div>
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

			margin: .5rem 0
			font-weight: normal
			font-family: $font_ubi
			font-size: 26px
			text-transform: uppercase
			flex: 1 0 9rem
			padding-right: .5rem

			// &::after
			// 	flex: 1
			// 	content: " "
			// 	height: 1px
			// 	background-color: $color_fg
			// 	opacity: .25

		.options
			flex: 100 1 50%
</style>
