<script lang="ts">
	export let options: any[]
	export let name: string
	export let selected = options ? options[0].value : null

	$: if (options && selected === null) selected = options[0].value
</script>

{#if options}
	<div class="options">
		{#each options as opt}
			<label class="option">
				<input
					type="radio"
					{name}
					value={opt.value}
					disabled={opt.count === 0}
					bind:group={selected}
				/>
				<span class="option-label">
					<span class="label-content">
						{opt.label}

						{#if opt.secondaryLabel}
							<span class="secondary">
								{opt.secondaryLabel}
							</span>
						{/if}
					</span>

					{#if opt.count !== undefined}
						<span class="label-badge">
							{opt.count}
						</span>
					{/if}
				</span>
			</label>
		{/each}
	</div>
{/if}

<style lang="sass">
	@import "$lib/sass/variables"

	$_border_thickness: 0

	$_color_border: transparent
	$_color_bg: #ddd
	$_color_fg: #333

	$_color_badge_fg: white
	$_color_badge_bg: lighten($color_bg, 12%)

	$_color_hover_fg: black
	$_color_hover_bg: lighten($color_accent, 20%)

	$_color_selected_fg: black
	$_color_selected_bg: $color_accent

	$_color_disabled_fg: #888
	$_color_disabled_bg: #aaa
	$_color_disabled_badge_bg: #999

	.options

		.option
			display: block
			position: relative
			margin-bottom: 1px

			&:last-child .option-label
				margin-bottom: -$_border_thickness

			.option-label
				display: flex
				justify-content: space-between
				align-items: center
				padding: .15rem .5rem
				color: $_color_fg
				cursor: pointer

				white-space: nowrap
				background-color: $_color_bg
				border: $_border_thickness solid $_color_border

				&:hover
					color: $_color_hover_fg
					background-color: $_color_hover_bg

				.label-content
					font-family: $font_ubi
					font-size: 1.5rem
					text-transform: uppercase
					transform: scaleX(.85) skewX(-5deg)
					transform-origin: left center

					.secondary
						display: inline-block
						transform: scale(.75)
						transform-origin: left center
						opacity: .5

						&::before
							content: "("

						&::after
							content: ")"

				.label-badge
					display: inline-block
					padding: .25rem .5rem
					margin-left: .25rem
					line-height: 1
					color: $_color_badge_fg
					background-color: $_color_badge_bg
					border-radius: 1rem

			input
				opacity: 0
				position: absolute
				z-index: -1

				&:checked ~ .option-label
					opacity: 1
					color: $_color_selected_fg
					background-color: $_color_selected_bg

				&:disabled ~ .option-label,
				&:disabled:hover ~ .option-label
					cursor: not-allowed
					color: $_color_disabled_fg
					background-color: $_color_disabled_bg

					.label-badge
						color: $_color_disabled_fg
						background-color: $_color_disabled_badge_bg
</style>
