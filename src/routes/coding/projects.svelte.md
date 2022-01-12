<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svx'
</script>

<Hero title="Projects" subtitle="Some small projects to build your skills" />


<section class="content section">

## HTML & CSS

  <a href="codelabs/introduce-yourself">
    <Box title="Project 01 - Structuring with HTML">

This project introduces you and the basics of HTML and creating your first web page. You'll learn about headings, paragraphs, and lists.

    </Box>
  </a>

  <a href="codelabs/my-summer">
    <Box title="Project 02 - Styling with CSS">

My Summer is where you'll learn about adding images and styling your pages with CSS.

    </Box>
  </a>

  <a href="codelabs/why-web-dev">
    <Box title="Project 03 - Multipage Websites">

Why Web Dev introduces multipage website and linking HTML files together.

    </Box>
  </a>

  <a href="codelabs/coding-tools">
    <Box title="Project 04 - Layout with CSS Grid">

Coding Tools introduces arranging HTML elements using CSS Grid.

    </Box>
  </a>

</section>
<section class="content section">

## Svelte

  <a href="codelabs/new-project">
    <Box title="Project 00 - New Project">

  This is a short tutorial on how to start a new project. It'll be useful for all your future projects.

    </Box>
  </a>

</section>

<style>
  a:not(:last-child) {
    display: block;
    margin-bottom: 2em;
  }
</style>