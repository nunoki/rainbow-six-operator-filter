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

			.option-label
				display: block
				padding: .25rem .5rem
				cursor: pointer

				white-space: nowrap

				&:hover
					outline: 1px solid $color_fg

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
					outline: 1px solid $color_fg

				&:disabled ~ .option-label
					opacity: .1
					cursor: not-allowed

					&:hover
						background-color: transparent
						outline-color: transparent
</style>
