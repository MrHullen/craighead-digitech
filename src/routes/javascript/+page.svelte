<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'

  export let data
</script>

<Hero
  title={data.title}
  subtitle={data.subtitle}
/>

<main class="content section">
  <h2> {data.title} </h2>

  {#each data.tutorials as tutorial}
    <Box {tutorial} />
  {/each}
</main>

<style>
  main h2 {
    display: none;
  }
</style>