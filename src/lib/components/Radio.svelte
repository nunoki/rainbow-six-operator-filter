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

	$_border_thickness: 1px

	.options

		.option
			display: block
			position: relative
			margin-bottom: -$_border_thickness

			&:last-child .option-label
				margin-bottom: -$_border_thickness

			.option-label
				display: flex
				justify-content: space-between
				align-items: center
				padding: .15rem .5rem
				color: $color_fg
				cursor: pointer

				white-space: nowrap
				background-color: lighten($color_bg, 2%)
				border: $_border_thickness solid $color_filter_lines

				&:hover
					background-color: lighten($color_bg, 15%)

				.label-content
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
					background-color: lighten($color_bg, 10%)
					color: white
					border-radius: 50%

			input
				opacity: 0
				position: absolute
				z-index: -1

				&:checked ~ .option-label
					opacity: 1
					color: $color_bg
					background-color: lighten($color_bg, 50%)

				&:disabled ~ .option-label,
				&:disabled:hover ~ .option-label
					cursor: not-allowed
					color: darken($color_bg, 10%)
					background-color: darken($color_bg, 3%)

					.label-badge
						color: darken($color_bg, 10%)
						background-color: darken($color_bg, 1%)
</style>
