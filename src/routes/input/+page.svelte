<script>
  import Hero from '$lib/Hero.svelte'
</script>

<Hero title="Input" subtitle="If you can type easily then that's one less thing to think about" />

<main class="content section">
  <h1> Input </h1>

  <div>
    <figure class="image is-16by9">
      <iframe class="has-ratio" src="https://apextyper.com/" frameborder="0" title="Apex Typer"></iframe>
    </figure>
  </div>

</main>

<style>
  main h1 {
    display: none;
  }

  div {
    display: flex;
    justify-content: center;
  }
</style>