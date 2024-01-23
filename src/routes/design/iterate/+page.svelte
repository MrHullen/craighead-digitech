<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Iterate" subtitle="Question, explore, adjust, refine, and improve" />

<main class="content section" id="test">
  <h2>
    Iterate <em class="has-text-info">- Te Whakaahua</em>
  </h2>

  <h3>Testing</h3>
  <p>
    Testing is good.
  </p>
</main>

<style>
  @media only screen and (max-width: 600px) {
    h2 em {
      display: block;
    }
  }
</style>
