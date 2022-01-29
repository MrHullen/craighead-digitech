<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Projects" subtitle="Some small projects to build your skills" />


<section class="content section">

## HTML & CSS

  <a href="/codelabs/introduction/index.html" rel="external">
    <Box title="Project 01 - Structuring with HTML">

      This project introduces you and the basics of HTML and creating your first web page. You'll learn about headings, paragraphs, and lists.

    </Box>
  </a>

  <a href="/codelabs/summer/index.html" rel="external">
    <Box title="Project 02 - Styling with CSS">

      My Summer is where you'll learn about styling your pages with CSS.

    </Box>
  </a>

  <a href="/codelabs/why-web-dev/index.html" rel="external">
    <Box title="Project 03 - Multipage Sites">

      Why Web Dev introduces creating sites from pages by linking HTML files together, and adding images.

    </Box>
  </a>

  <a href="/codelabs/introduction-continued/index.html" rel="external">
    <Box title="Project 04 - Semantic HTML">

      ...

    </Box>
  </a>

  <a href="/codelabs/summer-continued/index.html" rel="external">
    <Box title="Project 05 - Position with Grid and Flexbox">

      ...

    </Box>
  </a>

  <a href="/codelabs/why-web-dev-continued/index.html" rel="external">
    <Box title="Project 06 - Adding Meta Information">

      ...

    </Box>
  </a>

<!--
  <a href="codelabs/coding-tools">
    <Box title="Project 04 - Layout with CSS Grid">

      Coding Tools introduces arranging HTML elements using CSS Grid.

    </Box>
  </a>
-->

</section>
<section class="content section">

## Svelte

<!--
  <a href="codelabs/new-project">
    <Box title="Project 00 - New Project">

      This is a short tutorial on how to start a new project. It'll be useful for all your future projects.

    </Box>
  </a>
-->
</section>

<style>
  a:not(:last-child) {
    display: block;
    margin-bottom: 2em;
  }
</style>