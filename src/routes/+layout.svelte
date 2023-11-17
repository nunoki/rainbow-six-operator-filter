<script lang="ts">
	import { base } from "$app/paths"
	import IconExternalLink from "$lib/components/IconExternalLink.svelte"
</script>

<svelte:head>
	<title>Rainbow Six Operator Filter</title>
</svelte:head>

<div class="wrapper">
	<header class="header">
		<div class="container">
			<h1>
				<img
					class="header-img"
					src="{base}/favicon.png"
					alt=""
				/>
				<span class="app-name"> Rainbow six operator filter </span>
			</h1>

			<nav>
				<a
					href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__W1rDjVUREk2MDhXSkg1RDBZMU80MUk2RjEyRlQwVy4u"
					target="_blank"
					rel="noopener"
				>
					Report error
					<IconExternalLink />
				</a>
			</nav>
		</div>
	</header>

	<div class="container page">
		<slot />
	</div>

	<footer class="footer">
		<p>This tool is not affiliated with nor endorsed by Ubisoft.</p>
		<p>All trademarks, logos and brand names are the property of their respective owners.</p>
	</footer>
</div>

<style lang="sass">
	@import "$lib/sass/variables"

	:global(*)
		box-sizing: border-box

	:global(html,body)
		min-height: 100vh

	:global(body)
		margin: 0
		overflow-y: scroll

		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
		color: $color_fg

		background-color: $color_bg

		a
			fill: $color_link
			color: $color_link
			text-decoration: none

			&:hover
				color: lighten($color_link, 10%)
				fill: lighten($color_link, 10%)
				text-decoration: underline

			&:active
				fill: darken($color_link, 10%)
				color: darken($color_link, 10%)

	:global(h1,h2)
		text-transform: uppercase
		font-family: $font_ubi
		font-weight: normal

	.container
		width: 100%
		max-width: 1600px
		margin: 0 auto
		padding: 0 1rem

	.wrapper
		display: flex
		flex-direction: column
		min-height: 100vh

		.header
			flex: 0 1 content

		.page
			flex: 1

		.footer
			flex: 0 1 content

	.header
		background-color: darken($color_bg, 5%)
		border-bottom: 1px solid darken($color_bg, 50%)

		.container
			display: flex
			justify-content: space-between
			align-items: center
			height: 3rem

			> h1
				margin: 0
				font-size: 1.75rem
				// flex: 0 100 content
				// white-space: nowrap
				// overflow: hidden
				// text-overflow: ellipsis

			.header-img
				height: 2rem
				vertical-align: middle
				margin-right: .5rem

	.footer
		padding: 2em
		text-align: center

		> p
			margin: .5rem 0

	@media (max-width: 500px)
		.header .app-name
			display: none

	@font-face
		font-family: $font_ubi
		src: url("/fonts/R6S-RegItalic.woff2") format("woff2"), url("/fonts/R6S-RegItalic.woff") format("woff")
		font-style: normal
		font-weight: 400
</style>
