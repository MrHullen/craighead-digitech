<script>
  import "../app.scss"

  import Nav from '$lib/Nav.svelte'
  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<div>
  <Nav />

  <slot />

  <Footer />
</div>

<Menu />

<style>
  /* styling for the scroll on the side */
	:global(body::-webkit-scrollbar) {
		width: 0.25rem;
	}

	:global(body::-webkit-scrollbar-track) {
		background: white;
	}

	:global(body::-webkit-scrollbar-thumb) {
		background: #1b6ca5;
	}

	/* Small screens: make room on the bottom for the menu */
	@media only screen and (max-width: 600px) {
		div {
			margin-bottom: 5rem;
		}
	}

	/* Large screens: make room on the side for the menu */
	@media only screen and (min-width: 600px) {
		div {
			margin-left: 5rem;
		}
	}
</style>