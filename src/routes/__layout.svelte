<script>
  import "../app.scss"

  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<main>
  <slot />
</main>

<Menu />

<Footer />

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
		main {
			margin-bottom: 5rem;
		}
	}

	/* Large screens: make room on the side for the menu */
	@media only screen and (min-width: 600px) {
		main {
			margin-left: 5rem;
		}
	}
</style>