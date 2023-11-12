<div class="wrapper">
	<h1>Op filter</h1>
	<slot />
</div>

<style lang="sass">
	:global(html,body)
		min-height: 100%

	:global(body)
		margin: 0
		padding: 1px

		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"
		color: white

		background: url(https://static-dm.ubisoft.com/siege/prod/7907369fa863844fc1ae432a9ca0e610.jpg)
		background-size: 100%
		backdrop-filter: hue-rotate(90deg)

	:global(h1,h2)
		text-transform: uppercase
		font-family: R6S-RegItalic,sans-serif
		font-weight: normal

	.wrapper
		max-width: 1600px
		margin: 0 auto
		padding: 0 1rem

	@font-face
		font-family: R6S-RegItalic
		src: url("https://static-dm.ubisoft.com/siege/prod/7c574ea662392ab39c09ed79280cf5b2.woff2") format("woff2"), url("https://static-dm.ubisoft.com/siege/prod/1a098e45a853edc663c9505d21770af9.woff") format("woff")
		font-style: normal
		font-weight: 400
</style>
