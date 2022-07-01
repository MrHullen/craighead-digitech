<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'

  const projects = [
    {
      link:  `/svelte/summer-gallery-components/index.html`,
      icon:  `fa-solid fa-puzzle-piece`,
      title: `Project 01 - Components`,
      text:  `The first part of the <b>Summer Gallery</b> project will introduce you to creating pages from <b>components</b>.`,
    },
    {
      link:  `/svelte/summer-gallery-links/index.html`,
      icon:  `fa-solid fa-sitemap`,
      title: `Project 02 - Routes`,
      text:  `The second part of the <b>Summer Gallery</b> project will introduce you to creating <b>multiple pages</b> and <b>linking</b> them together.`,
    },
    {
      link:  `/svelte/summer-gallery-styles/index.html`,
      icon:  `fa-solid fa-object-group`,
      title: `Project 03 - Styles`,
      text:  `The third part of the <b>Summer Gallery</b> project will introduce you to <b>styling</b> your page with a CSS framework.`,
    },
    {
      link:  `/svelte/summer-gallery-props/index.html`,
      icon:  `fa-solid fa-share-from-square`,
      title: `Project 04 - Props`,
      text:  `The fourth part of the <b>Summer Gallery</b> project will introduce you to customising your components with <b>props</b>.`,
    },
  ]
</script>

<Hero
  title="Svelte Projects"
  subtitle="Cutting edge technology to develop modern sites and apps"
/>

<main class="content section">
  <h1> Svelte </h1>

  {#each projects as project}
    <Box {...project} />
  {/each}
</main>

<style>
  main h1 {
    display: none;
  }
</style>