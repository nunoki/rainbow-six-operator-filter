<script lang="ts">
	export let options: any[]
	export let name: string
	export let selected = options ? options[0].value : null

	$: if (options && selected === null) selected = options[0].value
</script>

{#if options}
	<div class="options">
		{#each options as opt}
			{#key opt.value}
				<label class="option">
					<input
						type="radio"
						{name}
						value={opt.value}
						disabled={opt.disabled || false}
						bind:group={selected}
					/>
					<span class="option-label">
						{opt.label}

						{#if opt.secondaryLabel}
							<span class="secondary">
								{opt.secondaryLabel}
							</span>
						{/if}
					</span>
				</label>
			{/key}
		{/each}
	</div>
{/if}

<style lang="sass">
	@import "$lib/sass/variables"

	.options
		.option
			// white-space: nowrap
			display: block
			position: relative
			margin-bottom: .25rem

			.option-label
				display: block
				padding: .25rem .5rem
				cursor: pointer

				white-space: nowrap
				background-color: lighten($color_bg, 6%)
				border: 1px solid lighten($color_bg, 15%)

				&:hover
					background-color: lighten($color_bg, 15%)

				.secondary
					font-size: .75em
					opacity: .5

					&::before
						content: "("

					&::after
						content: ")"

			input
				opacity: 0
				position: absolute
				z-index: -1

				&:checked ~ .option-label
					opacity: 1
					color: $color_bg
					background-color: $color_fg
					border-color: $color_fg

				&:disabled ~ .option-label
					// opacity: .1
					cursor: not-allowed
					color: darken($color_bg, 5%)
					background-color: darken($color_bg, 1%)
					border-color: darken($color_bg, 5%)
</style>
