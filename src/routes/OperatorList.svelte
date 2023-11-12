<script lang="ts">
	import { operators } from "../operators"
</script>

<section class="operator-list">
	{#each operators as op}
		<a
			class="operator"
			href={"https://www.ubisoft.com" + op.uri}
			target="_blank"
			rel="noopener"
		>
			<div class="card">
				<div class="inner">
					<img
						class="pic"
						src={op.pic}
						alt={op.name}
					/>
					<span class="name">{op.name}</span>
				</div>
			</div>
		</a>
	{/each}

	{#each Array(8) as _}
		<span class="operator" />
	{/each}
</section>

<style lang="sass">
	.operator-list
		display: flex
		gap: 10px
		justify-content: center
		flex-wrap: wrap

		.operator
			flex: 1 1 calc(12.5% - 5px)
			text-decoration: none

			.card
				position: relative
				background-color: rgba(255,255,255,.15)

				.inner
					display: flex
					flex-direction: column

					.pic
						width: 100%
						flex: 1
					
					.name
						padding: .25rem
						text-transform: uppercase
						text-align: center
						font-size: 26px
						color: #24262a
						background-color: #c3c3c3
			&:hover
				outline: 1px solid white
</style>
