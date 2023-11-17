<script lang="ts">
	import { base } from "$app/paths"
	import { operators } from "$lib/data/operators"
	import type { FilterParams, Link, Operator } from "$lib/data/types"
	import { NONE, SIDE } from "$lib/data/types"
	import IconExternalLink from "$lib/components/IconExternalLink.svelte"
	import { filter } from "$lib/util/filter"

	export let filters: FilterParams = {} as FilterParams

	$: filteredOps = filter(filters)

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
</script>

<div class="operator-list">
	{#if filteredOps.length > 0}
		{#each filteredOps as op}
			<div class="operator">
				<div class="card">
					<div class="inner">
						<div
							class="pic"
							style="background-image: url({base}/operators/{op.uri}-pic.png)"
						/>
						<span class="name">{op.name}</span>
					</div>

					<img
						class="operator-icon"
						src="{base}/operators/{op.uri}-icon.png"
						alt=""
					/>
				</div>

				<div class="links">
					{#each generateLinks(op) as l}
						<a
							href={l.url}
							target="_blank"
							rel="noopener"
							class="link"
						>
							{l.domain}
							<IconExternalLink />
						</a>
					{/each}
				</div>

				{#if op.note}
					<div
						class="icon-note"
						title={op.note}
					>
						*
					</div>
				{/if}
			</div>
		{/each}

		{#each Array(8) as _}
			<span class="filler" />
		{/each}
	{:else}
		<div class="no-results">
			<div class="emote">¯\_(ツ)_/¯</div>
			<p class="message">No results for selected filters</p>
		</div>
	{/if}
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	.operator-list
		display: flex
		gap: 10px
		justify-content: center
		flex-wrap: wrap

		.operator,
		.filler
			position: relative
			flex: 1 1 calc(12.5% - 5px)
			text-decoration: none

		.operator
			.card
				padding-bottom: 190%
				position: relative
				background-color: rgba(255,255,255,.15)

				.inner
					position: absolute
					top: 0
					left: 0
					width: 100%
					height: 100%
					display: flex
					flex-direction: column

					.pic
						background-size: cover
						background-position: center
						flex: 1

					.name
						padding: .25rem
						text-transform: uppercase
						text-align: center
						font-family: $font_ubi
						font-size: 26px
						color: #24262a
						background-color: #c3c3c3

				.operator-icon
					display: block
					position: absolute
					z-index: 1
					top: 55%
					right: auto
					left: 50%
					bottom: auto
					margin: 0 -25%
					width: 50%
					height: auto

			.links
				opacity: 0
				transition: opacity .3s ease
				position: absolute
				z-index: 3
				bottom: 2rem
				left: 10%
				width: 80%

				.link
					padding: .25rem
					margin: .25rem 0
					display: block
					text-align: center
					white-space: nowrap
					overflow: hidden
					text-overflow: ellipsis
					text-decoration: none
					fill: $color_bg
					color: $color_bg
					background-color: $color_fg

					&:hover
						color: $color_fg
						fill: $color_fg
						background-color: $color_bg
						outline: 1px solid $color_fg

					&:active
						background-color: black

			.icon-note
				position: absolute
				z-index: 2
				top: 0
				right: 0
				font-size: 3rem
				font-weight: bold
				color: red
				cursor: help

			&:hover
				outline: 2px solid $color_fg

				.links
					opacity: 1

		.no-results
			padding: 4rem 0
			text-align: center
			color: cyan

			.emote
				font-size: 4rem

			.message
				font-weight: bold
				font-size: 2rem

	@media (max-width: 900px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(20% - 10px)

	@media (max-width: 700px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(25% - 10px)

	@media (max-width: 500px)
		.operator-list
			.operator,
			.filler
				flex: 1 1 calc(33% - 10px)
</style>
