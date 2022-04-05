<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Svelte Projects" subtitle="Cutting edge technology to develop modern sites and apps" />

<main class="content section">
  <h1> Svelte </h1>

  <a href="/codelabs/summer-gallery-components/index.html" rel="external">
    <Box>
      <h2> Project 01 - Components </h2>

      The first part of the <b>Summer Gallery</b> project will introduce you to creating pages from **components**.
    </Box>
  </a>

  <a href="/codelabs/summer-gallery-links/index.html" rel="external">
    <Box>
      <h2> Project 02 - Links </h2>

      The second part of the <b>Summer Gallery</b> project will introduce you to creating multiple pages and linking them together.
    </Box>
  </a>

  <a href="/codelabs/summer-gallery-styles/index.html" rel="external">
    <Box>
      <h2> Project 03 - Styles </h2>

      The third part of the <b>Summer Gallery</b> project will introduce you to styling your page with a CSS framework.
    </Box>
  </a>

  <a href="/codelabs/summer-gallery-props/index.html" rel="external">
    <Box>
      <h2> Project 04 - Props </h2>

      The fourth part of the <b>Summer Gallery</b> project will introduce you to customising your components with props.
    </Box>
  </a>

</main>

<style>
  main h1 {
    display: none;
  }

  a:not(:last-child) {
    display: block;
    margin-bottom: 2em;
  }
</style>