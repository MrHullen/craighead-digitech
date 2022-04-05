<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="HTML and CSS Projects" subtitle="Build with the fundamentals of the web" />

<main class="content section">
  <h1> HTML & CSS </h1>

  <a href="/codelabs/introduction/index.html" rel="external">
    <Box>
      <h2> Project 01 - Structuring with HTML </h2>

      The <b>Introduction</b> project introduces you and the basics of HTML and creating your first web page. You'll learn about headings, paragraphs, and lists.
    </Box>
  </a>

  <a href="/codelabs/summer/index.html" rel="external">
    <Box>
      <h2> Project 02 - Styling with CSS </h2>

      <b>My Summer</b> is where you'll learn about styling your pages with CSS.
    </Box>
  </a>

  <a href="/codelabs/why-web-dev/index.html" rel="external">
    <Box>
      <h2> Project 03 - Multipage Sites </h2>

      <b>Why Web Dev</b> introduces creating sites from pages by linking HTML files together, and adding images.
    </Box>
  </a>

  <a href="/codelabs/introduction-continued/index.html" rel="external">
    <Box>
      <h2> Project 04 - Semantic HTML </h2>

      You revisit your <b>Introduction</b> project to apply your new skills and then group everything in your code into modern semantic sections.
    </Box>
  </a>

  <a href="/codelabs/summer-continued/index.html" rel="external">
    <Box>
      <h2> Project 05 - Layout with Grid and Flexbox </h2>

      Revisit your <b>Summer</b> project to update it with all your new skills and then learn how to layout smenatic sections as well as individual elements by using CSS Grid and CSS Flexbox.
    </Box>
  </a>

  <a href="/codelabs/why-web-dev-continued/index.html" rel="external">
    <Box>
      <h2> Project 06 - Meta Information </h2>

      Revisit your <b>Why Web Dev</b> project to add everything you've learned, and then some extra bits and pieces to pass online validation.
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