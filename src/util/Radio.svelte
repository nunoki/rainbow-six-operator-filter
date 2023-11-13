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
	.options
		display: inline-flex
		gap: .5rem
		flex-wrap: wrap

		.option
			flex: 0 1 content
			white-space: nowrap
			position: relative

			.option-label
				display: block
				padding: .25rem .5rem
				border: 1px solid white
				cursor: pointer

				&:hover
					background-color: rgba(255,255,255,.25)

				.secondary
					font-size: .75em
					opacity: .75

			input
				opacity: 0
				position: absolute
				z-index: -1

				&:checked ~ .option-label
					color: #606
					background-color: white

				&:disabled ~ .option-label
					opacity: .25
					cursor: not-allowed
</style>
