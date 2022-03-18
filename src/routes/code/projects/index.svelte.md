<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Projects" subtitle="Some small projects to build your skills" />

<main>
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

        You revisit your Introduction project to apply your new skills and then group everything in your code into modern semantic sections.

      </Box>
    </a>

    <a href="/codelabs/summer-continued/index.html" rel="external">
      <Box title="Project 05 - Layout with Grid and Flexbox">

        Revisit your Summer project to update it with all your new skills and then learn how to layout smenatic sections as well as individual elements by using CSS Grid and CSS Flexbox.

      </Box>
    </a>

    <a href="/codelabs/why-web-dev-continued/index.html" rel="external">
      <Box title="Project 06 - Adding Meta Information">

        Revisit your Why Web Dev project to add everything you've learned, and then some extra bits and pieces to pass online validation.

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


    <a href="/codelabs/summer-gallery-components/index.html" rel="external">
      <Box title="Project 01 - Components">

        The first part of the **Summer Gallery** project will introduce you to creating pages from **components**.

      </Box>
    </a>

    <a href="/codelabs/summer-gallery-links/index.html" rel="external">
      <Box title="Project 02 - Links">

        The second part of the **Summer Gallery** project will introduce you to creating multiple pages and linking them together.

      </Box>
    </a>

    <a href="/codelabs/summer-gallery-styles/index.html" rel="external">
      <Box title="Project 03 - Styles">

        The third part of the **Summer Gallery** project will introduce you to styling your page with a CSS framework.

      </Box>
    </a>

    <a href="/codelabs/summer-gallery-props/index.html" rel="external">
      <Box title="Project 04 - Props">

        The fourth part of the **Summer Gallery** project will introduce you to customising your components with props.

      </Box>
    </a>

  </section>
</main>

<style>
  a:not(:last-child) {
    display: block;
    margin-bottom: 2em;
  }
</style>