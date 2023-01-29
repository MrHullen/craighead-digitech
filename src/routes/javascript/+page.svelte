<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'

  export let data

  let tutorials = Object.values(data)
  
  tutorials.sort((t1, t2) => {
    return t1.number - t2.number
  })

  // const projects = [
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 01 - Input and Output`,
  //     text:  `Projects that <b>output</b> to the user with <code>alert</code> and get their <b>input</b> with <code>prompt</code>.`,
  //   },
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 02 - Variables`,
  //     text:  `Projects that use <code>let</code> to create <b>variables</b> and then do <b>operations</b> on them.`,
  //   },
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 03 - Iteration`,
  //     text:  `Projects that use <code>while</code> to run the same code <b>repeatedly</b>.`,
  //   },
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 04 - Selection`,
  //     text:  `Projects that can change what they do by checking a <b>condition</b> in an <code>if</code> statement.`,
  //   },
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 05 - Collections`,
  //     text:  `Projects that use <code>arrays</code> and <code>objects</code> to store <b>groups</b> of things together.`,
  //   },
  //   {
  //     link:  `/javascript/`,
  //     icon:  ``,
  //     title: `Project 06 - Improvements`,
  //     text:  `Revisiting previous projects to improve their <b>readability</b>, <b>efficiency</b>, and overall <b>quality</b>.`,
  //   },
  // ]
</script>

<Hero
  title="JavaScript"
  subtitle="The most popular propgramming language in the world"
/>

<section class="hero is-danger">
  <div class="hero-body">
    <h2 class="subtitle">This page is a work in progress</h2>
  </div>
</section>

<main class="content section">
  <h2> JavaScript </h2>

  {#each tutorials as tutorial}
    <Box {...tutorial} />
  {/each}
</main>

<style>
  main h2 {
    display: none;
  }
</style>