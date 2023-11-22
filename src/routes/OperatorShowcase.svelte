<!-- TODO FIXME: double scrollbar -->
<script lang="ts">
	import { SIDE, type Link, type Operator } from "$lib/data/types"
	import { createEventDispatcher, onDestroy, onMount } from "svelte"
	import { base } from "$app/paths"
	import { roles, sides, gunTypes, scopes, gadgets } from "$lib/data/typenames"
	import IconExternalLink from "$lib/components/IconExternalLink.svelte"
	import IconScope from "$lib/components/IconScope.svelte"

	export let operator: Operator

	const dispatch = createEventDispatcher()

	onMount(() => {
		window.addEventListener("keydown", escHandler)
	})

	onDestroy(() => {
		window.removeEventListener("keydown", escHandler)
	})

	function escHandler(e: KeyboardEvent) {
		if (e.key === "Escape") {
			dispatch("close")
		}
	}

	function generateLinks(op: Operator): Link[] {
		let links: Link[] = []

		if (op.name !== "Recruit") {
			links.push({
				url: `https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/operators/${op.uri}`,
				domain: "ubisoft.com",
			})
			links.push({
				url: `https://r6siegecenter.com/guides/operators/${
					op.side === SIDE.defense ? "defenders" : "attackers"
				}/${op.uri}/`,
				domain: "r6siegecenter.com",
			})
		}

		links.push({
			url: `https://rainbowsix.fandom.com/wiki/${op.name}`,
			domain: "fandom.com",
		})

		return links
	}

	function close(): void {
		dispatch("close")
	}
</script>

<div class="operator-showcase">
	<button
		class="close-button"
		on:click={() => close()}
	>
		&times;
	</button>

	<div class="container">
		<div class="wrapper">
			<div class="pic">
				<img
					src="{base}/operators/{operator.uri}-pic.png"
					alt=""
				/>
			</div>

			<div class="details">
				<h1 class="name">{operator.name}</h1>

				<section class="info info--icon">
					<div class="label">Operator icon</div>
					<div class="value">
						<img
							src="{base}/operators/{operator.uri}-icon.png"
							alt=""
						/>
					</div>
				</section>

				<section class="info info--side">
					<div class="label">Side</div>
					<div class="value">
						{sides[operator.side]}
					</div>
				</section>

				<section class="info info--role">
					<div class="label">Role{operator.roles.length > 1 ? "s" : ""}</div>
					<div class="value">
						<ul>
							{#each operator.roles as role}
								<li>{roles[role]}</li>
							{/each}
						</ul>
					</div>
				</section>

				<section class="info info--speed">
					<div class="label">Speed / Armor</div>
					<!-- TODO: maybe get rid of the SPEED type, and have the `speed` prop be
					just a number -->
					<div class="value">
						<div class="speed-armor">
							<div class="speed">
								<div class="title">{operator.speed + 1}-speed</div>
								<div class="indicators indicators--{operator.speed + 1}">
									<span class="indicator" />
									<span class="indicator" />
									<span class="indicator" />
								</div>
							</div>
							<div class="armor">
								<div class="title">{3 - operator.speed}-armor</div>
								<div class="indicators indicators--{3 - operator.speed}">
									<span class="indicator" />
									<span class="indicator" />
									<span class="indicator" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{#each [{ label: "Primary guns", data: operator.gunsPrimary }, { label: "Secondary guns", data: operator.gunsSecondary }] as placement}
					<section class="info info--guns">
						<div class="label">{placement.label}</div>
						<div class="value">
							<div class="guns">
								{#each placement.data as gun}
									<div class="gun">
										<div class="gun-type">{gunTypes[gun.gun.type]}</div>
										<div class="gun-name">{gun.gun.name}</div>
										<div class="gun-scope">
											<IconScope />
											{scopes[gun.maxScope]}
										</div>
										<div class="gun-note">
											{#if gun.gun.note}
												*{gun.gun.note}
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					</section>
				{/each}

				{#if operator.note}
					<section class="info info--note">
						<div class="label" />
						<div class="value">
							<span class="asterisk">*</span>{operator.note}
						</div>
					</section>
				{/if}

				<section class="info info--gadgets">
					<div class="label">Gadgets</div>
					<div class="value">
						<ul>
							{#each operator.gadgets as gadget}
								<li>{gadgets[gadget]}</li>
							{/each}
						</ul>
					</div>
				</section>

				<section class="info">
					<div class="label">More links</div>
					<div class="value">
						<ul>
							{#each generateLinks(operator) as link}
								<li>
									<a
										href={link.url}
										target="_blank"
										rel="noopener"
									>
										{link.domain}
										<IconExternalLink />
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	.operator-showcase
		position: relative
		padding: 2rem
		width: 100%
		height: 100%
		overflow-y: scroll
		background-color: darken($color_bg, 5%)

		.close-button
			position: absolute
			top: 1rem
			right: 1rem
			margin: 0
			padding: 0
			width: 5rem
			height: 5rem
			line-height: 1
			font-size: 5rem
			color: white
			background-color: black
			border: none
			cursor: pointer

			&:hover
				background-color: #333

			&:active
				color: black
				background-color: white

	.container
		margin: 0 auto
		max-width: 60rem

	.wrapper
		display: flex
		gap: 2rem

		> .pic
			flex: 1 1 30%

		> .details
			flex: 100

	.name
		margin: 1rem 0
		font-size: 4rem

	.info
		display: flex
		align-items: start
		margin-bottom: 2rem

		.label
			flex: 0 0 10rem
			display: flex
			align-items: center
			text-transform: uppercase
			font-family: $font_ubi
			font-size: 1.5rem

			&::after
				flex: 1
				content: " "
				margin: 0 1rem
				height: 1px
				background-color: $color_fg
				opacity: .25

		.value
			flex: 1
			font-size: 1.2rem

	.info--icon img
		height: 4rem

	.info--note .value
		font-size: .9rem
		opacity: .5

		.asterisk
			display: inline-block
			margin-right: .25rem
			color: red
			font-weight: bold
			font-size: 1rem

	.indicators
		.indicator
			display: inline-block
			margin-right: .5rem
			width: 1.5rem
			height: 1.5rem
			border: 1px solid transparentize($color_fg, .75)
			border-radius: 50%

		&.indicators--1 .indicator:nth-child(1),
		&.indicators--2 .indicator:nth-child(1),
		&.indicators--2 .indicator:nth-child(2),
		&.indicators--3 .indicator:nth-child(1),
		&.indicators--3 .indicator:nth-child(2),
		&.indicators--3 .indicator:nth-child(3)
			background-color: $color_fg
			border-color: $color_fg

	.speed-armor
		display: flex
		justify-self: start
		gap: 2rem

		.title
			margin-bottom: .5rem
			text-align: center

		.speed,
		.armor
			flex: 0 0 content

	ul
		margin: 0

	.info--role
		ul
			padding: 0
			list-style: none

			li
				display: inline-block

				&:not(:last-child)::after
					margin-right: .25rem
					content: ","

	.guns
		display: flex
		align-items: start
		gap: 1rem
		flex-wrap: wrap

		.gun
			padding: 1rem
			text-align: center
			width: calc(50% - 1rem)
			background-color: $color_bg

			.gun-name
				font-family: $font_ubi
				font-size: 2rem
				white-space: nowrap

			.gun-note
				padding: .25rem 0
				font-size: .8rem
				font-style: italic
				opacity: .5
</style>
