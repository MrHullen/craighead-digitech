<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'

  const projects = [
    {
      link:  `/html-css/introduction/index.html`,
      icon:  `fa-solid fa-indent`,
      title: `Project 01 - Structuring with HTML`,
      text:  `The <b>Introduction</b> project introduces you and the basics of HTML and creating your first web page. You'll learn about headings, paragraphs, and lists.`,
    },
    {
      link:  `/html-css/summer/index.html`,
      icon:  `fa-solid fa-object-group`,
      title: `Project 02 - Styling with CSS`,
      text:  `My Summer</b> is where you'll learn about styling your pages with CSS.`,
    },
    {
      link:  `/html-css/why-web-dev/index.html`,
      icon:  `fa-solid fa-sitemap`,
      title: `Project 03 - Multipage Sites`,
      text:  `Why Web Dev</b> introduces creating sites from pages by linking HTML files together, and adding images.`,
    },
    {
      link:  `/html-css/introduction-continued/index.html`,
      icon:  `fa-solid fa-universal-access`,
      title: `Project 04 - Semantic HTML`,
      text:  `You revisit your <b>Introduction</b> project to apply your new skills and then group everything in your code into modern semantic sections.`,
    },
    {
      link:  `/html-css/summer-continued/index.html`,
      icon:  `fa-solid fa-grip`,
      title: `Project 05 - Layout with Grid and Flexbox`,
      text:  `Revisit your <b>Summer</b> project to update it with all your new skills and then learn how to layout smenatic sections as well as individual elements by using CSS Grid and CSS Flexbox.`,
    },
    {
      link:  `/html-css/why-web-dev-continued/index.html`,
      icon:  `fa-solid fa-circle-info`,
      title: `Project 06 - Meta Information`,
      text:  `Revisit your <b>Why Web Dev</b> project to add everything you've learned, and then some extra bits and pieces to pass online validation.`,
    },
  ]
</script>

<Hero
  title="HTML and CSS Projects"
  subtitle="Build with the fundamentals of the web"
/>

<main class="content section">
  <h1> HTML & CSS </h1>

  {#each projects as project}
    <Box {...project} />
  {/each}
</main>

<style>
  main h1 {
    display: none;
  }
</style>