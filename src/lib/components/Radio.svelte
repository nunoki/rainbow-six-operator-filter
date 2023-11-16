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
					disabled={opt.disabled || false}
					bind:group={selected}
				/>
				<span class="option-label">
					<span class="label-content">
						{opt.label}
					</span>

					<!--
						{#if opt.secondaryLabel}
							<span class="secondary">
								{opt.secondaryLabel}
							</span>
						{/if}
						-->

					{#if opt.count}
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

	.options
		.option
			// white-space: nowrap
			display: block
			position: relative
			margin-bottom: .25rem

			.option-label
				display: flex
				justify-content: space-between
				align-items: center
				padding: .25rem
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

				.label-badge
					display: inline-block
					padding: .25rem
					margin-left: .25rem
					background-color: $color_bg

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
